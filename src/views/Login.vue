<script>
    import { ref } from "vue"
    const showPassword = ref(false)
</script>

<template>
    <div class="h-screen flex">
        <!-- Sección Izquierda: Formulario de Login -->
        <div class="w-1/2 flex items-center justify-center bg-white">
            <div class="p-8 rounded-lg shadow-lg w-96">
                <h2 class="text-2xl font-bold mb-4 text-center text-black">Welcome Back</h2>
                <p class="text-gray-500 text-center mb-6">Please enter your details to log in</p>
                <form>
                    <input type="email" placeholder="Email address"
                        class="w-full p-2 rounded mb-3 bg-gray-200 border" />

                    <div class="relative">
                        <input
                            :type="showPassword ? 'text' : 'password'"
                            placeholder="Password"
                            class="w-full p-2 rounded bg-gray-200 border pr-10"
                        />
                        <button
                            type="button"
                            @click="showPassword = !showPassword"
                            class="absolute right-3 top-3 text-gray-500"
                        >
                            <i v-if="showPassword" class="fas fa-eye-slash"></i>
                            <i v-else class="fas fa-eye"></i>
                        </button>
                    </div>

                    <button class="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
                        Log in
                    </button>
                    <p class="text-center mt-4">
                        Don't have an account?
                        <router-link to="/signup" class="text-green-600 font-semibold hover:underline">
                            Sign Up here
                        </router-link>
                    </p>
                </form>
            </div>
        </div>

        <!-- Sección Derecha: Espacio para Imagen o Gráficos -->
        <div class="w-1/2 flex items-center justify-center bg-green-100">
            <img src="../assets/vue-dashboard.jpg" alt="Vue Dashboard" class="w-3/4">
        </div>
    </div>
</template>
