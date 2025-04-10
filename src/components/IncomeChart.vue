<script setup>
    import { onMounted, ref } from 'vue'
    import { Chart, registerables } from 'chart.js'

    // Necessary registration of chart.js components
    Chart.register(...registerables)

    const chartCanvas = ref(null)



</script>

<template>

</template>
