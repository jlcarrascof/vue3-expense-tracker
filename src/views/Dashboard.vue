<template>
  <div class="flex">
    <Sidebar />
    <main class="flex-1 p-5">
      <SummaryCards />
      <div class="grid grid-cols-2 gap-4">
      </div>
    </main>
  </div>
</template>

<script setup>
  import Sidebar from '../components/Sidebar.vue';
  import SummaryCards from '../components/SummaryCards.vue';
  // import FinancialInfo from '../components/FinancialInfo.vue';
  // import Charts from '../components/Charts.vue';
</script>
