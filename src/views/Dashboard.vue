<script setup>
  import Sidebar from '../components/Sidebar.vue'
  import SummaryCards from '../components/SummaryCards.vue'
  import TransactionTable from '../components/TransactionTable.vue'
  import FinancialOverview from '../components/FinancialOverview.vue'
  import ExpensesSection from '../components/ExpensesSection.vue'
</script>

<template>
  <div class="flex">
    <Sidebar />
    <main class="flex-1 p-5 space-y-6">
      <SummaryCards />
      <div class="grid grid-cols-2 gap-4">
        <TransactionTable />
        <FinancialOverview />
      </div>
      <div class="grid grid-cols-2 gap-4">
        <ExpensesSection />
      </div>
    </main>
  </div>
</template>
