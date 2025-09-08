<template>
  <!-- Messages go here -->
  <!-- Example Message -->
  <div v-if="itsMine" class="flex justify-end">
    <div class="bg-blue-200 text-black p-2 rounded-lg max-w-xs">{{ message }}</div>
  </div>

  <!-- Example Received Message -->
  <div v-else class="flex">
    <div class="bg-gray-300 text-black p-2 rounded-lg max-w-xs">
      <span class="capitalize">{{ message }}</span>
      <!--object-cover hace que la imagen pueda cubrir todo lo necesario-->
      <img v-if="image" :src="image" alt="YesNoImage" class="w-52 h-52 object-cover">
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  message: string;
  itsMine: boolean;
  image?: string;
}

// Con esto obtengo las props definidas en la interfaz y las uso en el template
defineProps<Props>();
</script>
