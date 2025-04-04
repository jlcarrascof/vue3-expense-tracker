<script setup>
  import { ref, onMounted } from "vue"
  import { Chart, DoughnutController, ArcElement, Tooltip, Legend } from "chart.js"

  // Registrar componentes de Chart.js
  Chart.register(DoughnutController, ArcElement, Tooltip, Legend)

  const chartCanvas = ref(null)

  onMounted(() => {
    new Chart(chartCanvas.value, {
      type: "doughnut",
      data: {
        labels: ["Total Balance", "Total Expenses", "Total Income"],
        datasets: [
          {
            data: [79100, 7100, 86200],
            backgroundColor: ["#4CAF50", "#E53935", "#FB8C00"]
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "bottom"
          }
        }
      }
    })
  })
</script>

<template>
    <div class="bg-white shadow-lg rounded-xl p-5 mt-6">
      <h2 class="text-lg font-semibold mb-4">Financial Overview</h2>
      <canvas ref="chartCanvas"></canvas>
    </div>
</template>
