import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import Dashboard from '../views/Dashboard.vue'

const routes = [
    { path: '/', name: 'Login', component: Login },
    { path: '/signup', name: 'SignUp', component: SignUp },
    { path: '/dashboard', name: 'Dashboard', component: Dashboard, meta: { requiresAuth: true } }, // Protected route
    { path: '/income', name: 'Income', component: IncomeView, meta: { requiresAuth: true } }, // Protected route
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

// 🚀 Protect private routes.

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem("token")
    console.log("Token:", token) // Print the token ...

    if (to.matched.some(record => record.meta.requiresAuth) && !token) {
      next("/") //  if not authenticated, redirect to login
    } else {
      next() // if have token, continue
    }
})

export default router
