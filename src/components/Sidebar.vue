<template>
  <aside class="bg-green-700 text-white w-64 min-h-screen p-5">
    <!-- Perfil -->
    <div class="flex flex-col items-center mb-6">
      <img src="@/assets/profile.jpg" alt="User Avatar" class="w-16 h-16 rounded-full mb-2">
      <h2 class="text-lg font-semibold">Javier Martínez</h2>
    </div>

    <!-- Menú -->
    <nav>
      <ul>
        <li v-for="item in menuItems" :key="item.path" class="mb-4">
          <router-link :to="item.path" class="flex items-center p-2 rounded-lg"
            :class="{ 'bg-green-900': $route.path === item.path }">
            <span class="mr-3">{{ item.icon }}</span>
            {{ item.label }}
          </router-link>
        </li>
      </ul>
    </nav>
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
