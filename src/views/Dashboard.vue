<template>
  <div class="flex">
    <Sidebar />
    <main class="flex-1 p-5">
      <SummaryCards />
      <div class="grid grid-cols-2 gap-4">
        <TransactionTable />
        <FinancialOverview />
      </div>
    </main>
  </div>
</template>

<script setup>
  import Sidebar from '../components/Sidebar.vue';
  import SummaryCards from '../components/SummaryCards.vue';
  import TransactionTable from '../components/TransactionTable.vue';
  import FinancialOverview from '../components/FinancialOverview.vue';
</script>
