<script>

</script>

<template>
  <header class="bg-gradient-to-r from-green-600 to-green-800 text-white py-6 shadow-lg">
    <div class="container mx-auto flex justify-between items-center px-6">
      <h1 class="text-4xl font-bold tracking-wide">💰 Expense Tracker App</h1>
      <nav>
        <ul class="flex gap-6 text-lg font-medium">
          <li><a href="/" class="hover:text-gray-300 transition">Home</a></li>
          <li><a href="/signup" class="hover:text-gray-300 transition">Sign Up</a></li>
          <li><a href="/" class="hover:text-gray-300 transition">Log In</a></li>
        </ul>
      </nav>
    </div>
  </header>

   <!-- Render Vue Router views -->
   <router-view></router-view>
</template>

<style scoped>

</style>
