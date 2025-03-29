<script setup>
  import { ref } from 'vue';

  const username = ref('Mike William');
  const avatarUrl = ref('/path/to/avatar.jpg');
</script>

<template>
    <header class="bg-green-600 text-white py-4 px-6 flex justify-between">
      <h1 class="text-lg font-bold">Dashboard</h1>
      <div class="flex items-center">
        <img :src="avatarUrl" alt="Avatar" class="w-8 h-8 rounded-full" />
        <span class="ml-2">{{ username }}</span>
      </div>
    </header>
</template>
