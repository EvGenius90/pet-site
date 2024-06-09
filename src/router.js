import { createRouter, createWebHistory } from "vue-router";

import HomeView from './pages/Home';
import AboutView from './pages/about';
import Articles from './pages/articles'
import NoPage from './pages/NoPage';

const routerHistory = createWebHistory()

const router = createRouter({
    history: routerHistory,
    routes:[
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView
        },
        {
            path: '/articles',
            name: 'articles',
            component: Articles
        },
        {
            path: '/:CatchAll(.*)',
            name: '404',
            component: NoPage
        }
    ]
})

export default router