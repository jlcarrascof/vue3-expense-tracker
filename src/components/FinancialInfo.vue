<script setup>
    import { ref } from 'vue';

    const stats = ref([
    { label: 'Balance Total', value: '$79,100' },
    { label: 'Ingresos Totales', value: '$86,200' },
    { label: 'Gastos Totales', value: '$7,100' },
    ]);

    const transactions = ref([
    { id: 1, category: 'Shopping', amount: '$430', date: '17 Feb 2025' },
    { id: 2, category: 'Travel', amount: '$670', date: '13 Feb 2025' },
    ]);
</script>

<template>
    <section class="flex flex-col p-6">
      <div class="flex justify-between">
        <div v-for="stat in stats" :key="stat.label" class="p-4 bg-green-200 rounded">
          <h2>{{ stat.label }}</h2>
          <p>{{ stat.value }}</p>
        </div>
      </div>
      <div class="mt-6">
        <h2 class="text-lg font-bold">Transacciones Recientes</h2>
        <ul class="space-y-2">
          <li v-for="tx in transactions" :key="tx.id" class="bg-white shadow p-3 rounded">
            {{ tx.category }}: {{ tx.amount }} - {{ tx.date }}
          </li>
        </ul>
      </div>
    </section>
</template>
