<template>
  <div class="flex h-screen">
    <!-- Sidebar -->
    <Sidebar />
    <div class="flex-1 flex flex-col">
      <!-- Header -->
      <Header />
      <div class="flex flex-1">
        <!-- Financial Info -->
        <FinancialInfo />
        <!-- Charts -->
        <Charts />
      </div>
    </div>
  </div>
</template>

<script setup>
  import Sidebar from '../components/Sidebar.vue';
  import Header from '../components/Header.vue';
  import FinancialInfo from '../components/FinancialInfo.vue';
  import Charts from '../components/Charts.vue';
</script>
