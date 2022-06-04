import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
	{
		path: '/login',
    name: 'login',
		component: () => import('../views/login/login.vue')
	},
	{
		path: '/home',
    name: 'home',
		component: () => import('../views/home/home.vue')
	},
]


const router = createRouter({
	routes,
	history: createWebHashHistory()
})

export default router
