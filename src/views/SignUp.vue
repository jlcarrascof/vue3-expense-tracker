<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 class="text-2xl font-bold mb-4 text-center">Crear Cuenta</h2>
        <form>
          <input type="text" placeholder="Nombre completo" class="w-full p-2 border rounded mb-3" />
          <input type="email" placeholder="Correo electrónico" class="w-full p-2 border rounded mb-3" />
          <input type="password" placeholder="Contraseña" class="w-full p-2 border rounded mb-3" />
          <button class="w-full bg-green-600 text-white py-2 rounded">Registrarse</button>
        </form>
        <p class="text-center mt-4">
          ¿Ya tienes cuenta? <router-link to="/" class="text-green-600">Inicia sesión</router-link>
        </p>
      </div>
    </div>
</template>
