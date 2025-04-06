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
                        backgroundColor: 'rgba(103, 80, 255, 0.7)'
                    }
                ],
            },
            options: {
                responsive: true,
                scales: {
                    y: { beginAtZero: true }
                }
            }
        })
    })

</script>

<template>

</template>
