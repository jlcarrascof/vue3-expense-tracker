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

    

</script>

<template>

</template>
