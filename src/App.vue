<script>
  import { getData } from './api'

  export default {
    mounted() {
      getData()
    }
  }
</script>

<template>
  <div class="bg-green-600 text-white p-8">
    <h1 class="text-4xl">Expense Tracker App</h1>
  </div>

   <!-- Render Vue Router views -->
   <router-view></router-view>
</template>

<style scoped>

</style>
