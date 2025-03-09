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
          <h2 class="text-2xl font-bold mb-4 text-center text-black">Create Account</h2>
          <p class="text-gray-500 text-center mb-6">Please enter your details to sign up</p>
        </div>
      </div>
   </div>
</template>
