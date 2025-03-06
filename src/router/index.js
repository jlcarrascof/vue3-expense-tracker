import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import Dashboard from '../views/Dashboard.vue'

const routes = [
    { path: '/', component: Login },
    { path: '/signup', component: SignUp },
    { path: '/dashboard', component: Dashboard },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
