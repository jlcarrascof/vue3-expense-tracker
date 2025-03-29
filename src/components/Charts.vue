<script setup>
    import { onMounted } from 'vue';
    import Chart from 'chart.js/auto';

    onMounted(() => {
    const ctx = document.getElementById('balanceChart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
        labels: ['Ingresos', 'Gastos', 'Balance Total'],
        datasets: [{
            data: [86200, 7100, 79100],
            backgroundColor: ['#34D399', '#F87171', '#60A5FA'],
        }],
        },
    });
    });
</script>

<template>
    <div class="bg-green-100 w-full p-4">
      <h2 class="font-bold">Gráfico de Balance</h2>
      <canvas id="balanceChart"></canvas>
    </div>
</template>
