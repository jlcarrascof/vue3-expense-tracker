<script setup>
    import { ref, onMounted } from 'vue'
    import Chart from 'chart.js/auto'

    const expenses = ref([
        { id: 1, name: 'Shopping', date: '17th Feb 2025', amount: -430, icon: '🛍️' },
        { id: 2, name: 'Travel', date: '13th Feb 2025', amount: -670, icon: '✈️' },
        { id: 3, name: 'Electricity Bill', date: '11th Feb 2025', amount: -200, icon: '💡' },
        { id: 4, name: 'Loan Repayment', date: '10th Feb 2025', amount: -600, icon: '🏦' },
        { id: 5, name: 'Transport', date: '14th Jan 2025', amount: -300, icon: '🚌' }
    ])

    const expensesChart = ref(null)

    const formatCurrency = (amount) => `$${Math.abs(amount)}`

    onMounted(() => {
        new Chart(expensesChart.value, {
            type: 'bar',
            data: {
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                datasets: [
                    {
                        label: 'Last 30 Days Expenses',
                        data: [400, 600, 200, 500],
                        backgroundColor: '#E53935'
                    }
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: { beginAtZero: true }
                }
            }
        })
    })

</script>

<template>
  <div class="mt-6">
    <h2 class="text-xl font-bold text-gray-800 mb-4">Expenses</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[350px]">
      <!-- Lista de Gastos -->
      <div class="bg-white p-4 rounded-xl shadow-lg h-full">
        <div class="flex flex-col space-y-4">
          <div
            v-for="expense in expenses"
            :key="expense.id"
            class="flex items-center justify-between border-b last:border-none pb-3"
          >
            <span class="text-2xl">{{ expense.icon }}</span>
            <div class="flex-1 ml-3">
              <p class="text-gray-900 font-medium">{{ expense.name }}</p>
              <p class="text-sm text-gray-500">{{ expense.date }}</p>
            </div>
            <p class="font-bold text-sm" :class="expense.amount < 0 ? 'text-red-500' : 'text-green-500'">
              {{ formatCurrency(expense.amount) }}
            </p>
          </div>
        </div>
      </div>

      <!-- Gráfico de Gastos -->
      <div class="bg-white p-4 rounded-xl shadow-lg h-full">
        <div class="h-[350px]">
          <canvas ref="expensesChart" class="w-full h-full"></canvas>
        </div>
      </div>
    </div>

  </div>
</template>
