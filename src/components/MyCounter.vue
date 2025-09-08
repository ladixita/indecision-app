<template>
  <section>
    <!--aqui no se coloca el value porque lo extrae y no es necesario-->
    <h3>Counter:  {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>
    <div>
      <button class="btn" @click="counter++">+1</button>
      <button class="btn" @click="counter--">-1</button>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { useCounter } from '@/composables/useCounter';

const {counter, squareCounter} = useCounter(10)
// import { computed, ref } from 'vue';

// interface Props {
//   value: number
// }
// const props = defineProps({
//   value: { type: Number, required: true}
// }) aqui este codigo si llega y se queda en javascript

// const props = defineProps<{
//   value: number
// }>()

// const props = defineProps<Props>();

// const counter = ref(props.value); //variable reactiva y como es setup ya es retornado
// const squareCounter = computed(() => counter.value * counter.value) //cuando es computed es de solo lectura y no puede cambiar
</script>
<style scoped>@reference "tailwindcss";
.btn {  @apply p-5 bg-blue-500 rounded hover:bg-blue-700 mr-2;}</style>
