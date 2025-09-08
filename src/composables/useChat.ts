import { sleep } from '@/helpers/sleep'
import type { ChatMessage } from '@/interfaces/chat-message.interface'
import type { YesNoResponse } from '@/interfaces/yes-no.response'
import { ref } from 'vue'

export const useChat = () => {
  const messages = ref<ChatMessage[]>([])

  const onMessage = async(text: string) => {
    if(text.length === 0) return

    // Asincrono porque se trabajará con HTTP
    const getHisResponse = async() => {
      const resp = await fetch('https://yesno.wtf/api')
      const data = (await resp.json()) as YesNoResponse

      return data
    }

    messages.value.push({
      id: new Date().getTime(),
      itsMine: true,
      message: text,
    })

    // Evaluar si el texto termina en ?
    if(!text.endsWith('?')) return

    await sleep(1.5)

    const { answer, image } = await getHisResponse();

    messages.value.push({
      id: new Date().getTime(),
      itsMine: false,
      message: answer,
      image: image
    })
  }

  return {
    // Properties
    messages,
    // Methods
    onMessage,
  }
}
