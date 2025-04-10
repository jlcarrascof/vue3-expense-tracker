<script setup>
    import Sidebar from '../components/Sidebar.vue'
    import IncomeChart from '../components/IncomeChart.vue'
</script>

<template>
    <div class="flex">
        <Sidebar />
        <main class="flex-1 p-6">
            <!-- Title -->
            <div class="flex justify-between items-center mb-6">
                <div>
                    <h2 class="text-2xl font-bold text-gray-800">Income Overview</h2>
                    <p class="text-gray-600">Track your earnings over time and analyze your income trends.</p>
                </div>
                <button class="text-green-600 font-semibold hover:underline">
                    + Add Income
                </button>
            </div>

            <!-- Chart -->
            <div class="bg-white rounded-xl shadow-lg p-4 h-[350px]">
                <IncomeChart />
            </div>
        </main>
    </div>
</template>
