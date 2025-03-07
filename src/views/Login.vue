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
                    <input type="password" placeholder="Password"
                        class="w-full p-2 rounded mb-3 bg-gray-200 border" />
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
