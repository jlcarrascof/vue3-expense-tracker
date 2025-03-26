<script setup>
  import { ref } from "vue"
  import { useRouter } from "vue-router"
  import { useToast } from "vue-toastification"
  import API from "../api"

  const fullName = ref("")
  const email = ref("")
  const password = ref("")
  const profileImage = ref(null)
  const showPassword = ref(false)
  const router = useRouter()
  const toast = useToast()

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      profileImage.value = URL.createObjectURL(file)
    }
  }

  const handleRegister = async () => {
    try {
      const formData = {
        fullName: fullName.value,
        email: email.value,
        password: password.value,
        profileImage: profileImage.value,
      }

      await API.post("/auth/register", formData)

      // ✅ Show success notification with fade-in and redirect ...
      toast.success("✅ Registration successful! Redirecting to login...", {
        timeout: 3000,
        transition: "Vue-Toastification__fade",
        position: "bottom-left",
      })

      setTimeout(() => {
        router.push("/")
      }, 3000)
    } catch (error) {
      toast.error(`❌ ${error.response?.data?.message || "Error in registration"}`, {
        timeout: 3000,
        transition: "Vue-Toastification__fade",
        position: "bottom-left",
      })
    }
  }

</script>

<template>
    <div class="h-screen flex">
      <!-- Left Section: Registration Form -->
      <div class="w-1/2 flex items-center justify-center bg-white">
        <div class="p-8 rounded-lg shadow-lg w-96">
          <h2 class="text-2xl font-bold mb-4 text-center text-black">Create Account</h2>
          <p class="text-gray-500 text-center mb-6">Please enter your details to sign up</p>

          <!-- Profile Image Upload Section -->
          <div class="flex flex-col items-center mb-4">
            <label class="cursor-pointer">
              <input type="file" class="hidden" @change="handleFileUpload" accept="image/*" />
              <div class="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
                <img v-if="profileImage" :src="profileImage" alt="Profile" class="w-full h-full object-cover" />
                <span v-else class="text-gray-500 text-sm">Upload</span>
              </div>
            </label>
          </div>

          <form @submit.prevent="handleRegister">
            <input v-model="fullName" type="text" placeholder="Full Name" class="w-full p-2 border rounded mb-3 bg-gray-200" />
            <input v-model="email" type="email" placeholder="Email Address" class="w-full p-2 border rounded mb-3 bg-gray-200" />

            <!-- Password field with toggle button for visibility -->
            <div class="relative">
              <input
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="Max 10 chars"
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

            <button type="submit" class="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition mt-4">
              Sign Up
            </button>
            <p class="text-center mt-4">
              Already have an account?
              <router-link to="/" class="text-green-600 font-semibold hover:underline">
                Log in
              </router-link>
            </p>
          </form>
        </div>
      </div>

      <!-- Right Section: Dashboard Image -->
      <div class="w-1/2 flex items-center justify-center bg-green-100">
        <img src="../assets/vue-dashboard.jpg" alt="Vue Dashboard" class="w-3/4">
      </div>
    </div>
</template>
