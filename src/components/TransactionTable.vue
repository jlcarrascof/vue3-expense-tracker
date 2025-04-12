<script setup>
  import { ref } from "vue"

  const transactions = ref([
    { id: 1, description: "Shopping", date: "17th Feb 2025", amount: -430, icon: "🛍️" },
    { id: 2, description: "Travel", date: "13th Feb 2025", amount: -670, icon: "✈️" },
    { id: 3, description: "Electricity Bill", date: "11th Feb 2025", amount: -200, icon: "💡" },
    { id: 4, description: "Loan Repayment", date: "10th Feb 2025", amount: -600, icon: "🏦" },
    { id: 5, description: "Transport", date: "14th Jan 2025", amount: -300, icon: "🚌" }
  ])
</script>

<template>
  <div class="bg-white shadow-lg rounded-xl p-5 mt-10">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-lg font-semibold">Recent Transactions</h2>
      <router-link to="/transactions" class="text-green-600 font-semibold hover:underline">See All →</router-link>
    </div>

    <table class="w-full">
      <tbody>
        <tr v-for="transaction in transactions" :key="transaction.id"
          class="border-b last:border-none">
          <td class="flex items-center py-3">
            <span class="text-2xl bg-gray-100 p-2 rounded-full">{{ transaction.icon }}</span>
            <div class="ml-3">
              <p class="font-medium">{{ transaction.description }}</p>
              <p class="text-gray-500 text-sm">{{ transaction.date }}</p>
            </div>
          </td>
          <td class="text-right text-sm font-bold"
            :class="transaction.amount < 0 ? 'text-red-500' : 'text-green-500'">
            {{ transaction.amount < 0 ? '-' : '+' }}${{ Math.abs(transaction.amount) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
