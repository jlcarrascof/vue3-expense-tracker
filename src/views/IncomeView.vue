<script setup>
    // import IncomeChart from '@/components/IncomeChart.vue'
</script>

<template>

<div class="p-6">
    <!-- Title -->
    <div class="flex justify-between items-center mb-6">
      <div>
        <h2 class="text-2xl font-bold text-gray-800">Income Overview</h2>
        <p class="text-gray-500">Track your earnings over time and analyze your income trends.</p>
      </div>
      <button class="text-purple-600 font-semibold hover:underline">
        + Add Income
      </button>
    </div>

    <!-- Graph -->
    <div class="bg-white rounded-xl shadow-lg p-4 h-[350px]">
        <!--
        <IncomeChart />
        -->
    </div>
  </div>

</template>
