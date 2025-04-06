<script setup>
    import { ref, onMounted } from 'vue'
    import Chart from 'chart.js/auto'

    const incomes = ref([
    { id: 1, name: 'Salary', date: '12th Feb 2025', amount: 12000, icon: '💼' },
    { id: 2, name: 'Interest from Savings', date: '13th Jan 2025', amount: 9800, icon: '🏦' },
    { id: 3, name: 'E-commerce Sales', date: '11th Jan 2025', amount: 11900, icon: '🛒' },
    { id: 4, name: 'Graphic Design', date: '10th Jan 2025', amount: 10500, icon: '🎨' },
    { id: 5, name: 'Affiliate Marketing', date: '8th Jan 2025', amount: 8000, icon: '🤝' },
    ])

    const incomeChart = ref(null)
    const formatCurrency = (amount) => `$${amount}`

    onMounted(() => {
        new Chart(incomeChart.value, {
            type: 'doughnut',
            data: {
            labels: ['Salary', 'Interest from Savings', 'E-commerce Sales', 'Graphic Design', 'Affiliate Marketing'],
            datasets: [
                {
                data: [12000, 9800, 11900, 10500, 8000],
                backgroundColor: ['#5B21B6', '#DB2777', '#F59E0B', '#3B82F6', '#10B981'],
                borderWidth: 0
                }
            ]
            },
            options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                display: true,
                position: 'bottom'
                },
                tooltip: {
                callbacks: {
                    label: (ctx) => `${ctx.label}: $${ctx.raw}`
                }
                }
            }
            }
        })
    })

</script>

<template>
  <div class="mt-6">
    <h2 class="text-xl font-bold text-gray-800 mb-4">Last 60 Days Income</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[350px]">

      <!-- Gráfico de Ingresos -->
      <div class="bg-white p-4 rounded-xl shadow-lg h-full">
        <div class="h-[350px]">
          <canvas ref="incomeChart" class="w-full h-full"></canvas>
        </div>
      </div>

      <!-- Lista de Ingresos -->
      <div class="bg-white p-4 rounded-xl shadow-lg h-full">
        <div class="flex justify-between items-center mb-3">
          <h3 class="text-lg font-semibold text-gray-700">Income</h3>
          <button class="text-sm text-gray-500 hover:text-gray-700">See All →</button>
        </div>

        <div class="flex flex-col space-y-4">
          <div
            v-for="income in incomes"
            :key="income.id"
            class="flex items-center justify-between border-b last:border-none pb-3"
          >
            <span class="text-2xl">{{ income.icon }}</span>
            <div class="flex-1 ml-3">
              <p class="text-gray-900 font-medium">{{ income.name }}</p>
              <p class="text-sm text-gray-500">{{ income.date }}</p>
            </div>
            <p class="font-bold text-green-500">{{ formatCurrency(income.amount) }}</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
