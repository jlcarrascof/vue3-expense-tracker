<script setup>
  import { ref } from "vue"

  const summaryData = ref([
    { title: "Total Balance", amount: "$79,100", icon: "💳", color: "border-green-500" },
    { title: "Total Income", amount: "$86,200", icon: "💰", color: "border-orange-500" },
    { title: "Total Expenses", amount: "$7,100", icon: "📉", color: "border-red-500" }
  ])
</script>

<template>
    <div class="grid grid-cols-3 gap-4">
      <div v-for="card in summaryData" :key="card.title"
        class="bg-white shadow-lg rounded-xl p-5 flex items-center border-l-8"
        :class="card.color">

        <div class="text-4xl p-3 rounded-full bg-gray-100">
          {{ card.icon }}
        </div>

        <div class="ml-4">
          <p class="text-gray-500 text-sm font-semibold">{{ card.title }}</p>
          <h2 class="text-xl font-semibold">{{ card.amount }}</h2>
        </div>
      </div>
    </div>
</template>
