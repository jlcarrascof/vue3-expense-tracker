<template>
  <!-- Sidebar -->
  <aside class="bg-white text-green-700 w-1/6 h-screen overflow-y-auto shadow-md">
    <!-- Avatar y Nombre -->
    <div class="flex flex-col items-center py-6">
      <img src="" alt="Avatar" class="w-16 h-16 rounded-full mb-2" />
      <p class="text-lg font-bold">Mike William</p>
    </div>
    <!-- Menú de Navegación -->
    <ul class="space-y-2">
      <li
        v-for="item in menuItems"
        :key="item.label"
        class="flex items-center p-3 hover:bg-green-400 hover:text-green-900 rounded transition">
        <span :class="item.icon" class="mr-2"></span> <!-- Ícono -->
        {{ item.label }}
      </li>
    </ul>
  </aside>
</template>

<script setup>
  const menuItems = [
    { label: 'Dashboard', route: '/dashboard', icon: 'dashboard-icon-class' },
    { label: 'Ingresos', route: '/income', icon: 'income-icon-class' },
    { label: 'Gastos', route: '/expenses', icon: 'expense-icon-class' },
    { label: 'Cerrar Sesión', route: '/logout', icon: 'logout-icon-class' },
  ];
</script>
