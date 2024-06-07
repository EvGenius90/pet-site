import { createRouter, createWebHistory } from "vue-router";

import HomeView from './pages/Home'
import AboutView from './pages/about'

const routerHistory = createWebHistory()

const router = createRouter({
    history: routerHistory,
    routes:[
        {
            path: '/',
            component: HomeView
        },
        {
            path: '/about',
            component: AboutView
        }
    ]
})

export default router