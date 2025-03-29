<script setup>
  const menuItems = [
    { label: 'Dashboard', route: '/dashboard' },
    { label: 'Ingresos', route: '/income' },
    { label: 'Gastos', route: '/expenses' },
    { label: 'Cerrar Sesión', route: '/logout' },
  ];
</script>

<template>
    <aside class="bg-green-500 text-white w-1/6 h-screen">
      <ul>
        <li v-for="item in menuItems" :key="item.label" class="hover:bg-green-700 p-3">
          {{ item.label }}
        </li>
      </ul>
    </aside>
</template>
