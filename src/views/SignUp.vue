<script setup>
  import { ref } from "vue"

  const showPassword = ref(false)
  const profileImage = ref(null)

  const handleFileUpload = (event) => {
      const file = event.target.files[0]
      if (file) {
          profileImage.value = URL.createObjectURL(file)
      }
  }
</script>

<template>
   <div class="h-screen flex">
      <!-- Sección Izquierda: Formulario de Registro -->
      <div class="w-1/2 flex items-center justify-center bg-white">
        <div class="p-8 rounded-lg shadow-lg w-96">

        </div>
      </div>
   </div>
</template>
