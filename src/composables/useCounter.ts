import { ref, computed } from "vue";

//composable function
export const useCounter = (initeValue: number = 5) => {
  const counter = ref(initeValue); //variable reactiva y como es setup ya es retornado
  // const squareCounter = computed(() => counter.value * counter.value)
  return {
    counter,
    squareCounter: computed(() => counter.value * counter.value)
  }
}
