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

          <!-- Imagen de perfil con botón para subir foto -->
          <div class="flex flex-col items-center mb-4">
            <label class="cursor-pointer">
              <input type="file" class="hidden" @change="handleFileUpload" accept="image/*" />
              <div class="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
                <img v-if="profileImage" :src="profileImage" alt="Profile" class="w-full h-full object-cover" />
                <span v-else class="text-gray-500 text-sm">Upload</span>
              </div>
            </label>
          </div>

          <form>
            <input
              type="text"
              placeholder="Full Name"
              class="w-full p-2 border rounded mb-3 bg-gray-200"
            />
            <input
              type="email"
              placeholder="Email Address"
              class="w-full p-2 border rounded mb-3 bg-gray-200"
            />

          </form>
      </div>
   </div>
</template>
