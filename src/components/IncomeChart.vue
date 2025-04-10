<script setup>
    import { onMounted, ref } from 'vue'
    import { Chart, registerables } from 'chart.js'

    // Necessary registration of chart.js components
    Chart.register(...registerables)

    const chartCanvas = ref(null)

    const mockIncomeData = [
        { date: '1st Jan', amount: 12000 },
        { date: '4th Jan', amount: 9000 },
        { date: '6th Jan', amount: 8500 },
        { date: '7th Jan', amount: 14000 },
        { date: '8th Jan', amount: 1200 },
        { date: '9th Jan', amount: 7000 },
        { date: '10th Jan', amount: 10000 },
        { date: '11th Jan', amount: 11500 },
        { date: '13th Jan', amount: 9800 },
        { date: '12th Feb', amount: 12800 },
    ]

    onMounted(() => {
        const ctx = chartCanvas.value.getContext('2d')
        new Chart(ctx, {
            type: 'bar',
            data: {
            labels: mockIncomeData.map(item => item.date),
            datasets: [
                {
                label: 'Income',
                data: mockIncomeData.map(item => item.amount),
                    backgroundColor: [
                        '#6366f1', '#a78bfa', '#818cf8', '#4f46e5', '#7c3aed',
                        '#8b5cf6', '#6d28d9', '#5b21b6', '#7e22ce', '#6d28d9'
                    ],
                    borderRadius: 8,
                    barThickness: 24,
                    }
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                },
                scales: {
                    y: {
                    beginAtZero: true,
                    ticks: {
                        callback: value => `$${value}`,
                    },
                    },
                },
            },
        })
    })

</script>

<template>
    <canvas ref="chartCanvas" class="w-full h-full"></canvas>
</template>
