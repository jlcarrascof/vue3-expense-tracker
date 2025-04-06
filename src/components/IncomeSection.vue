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

</template>
