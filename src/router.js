import { createRouter, createWebHistory } from "vue-router";

import HomeView from './pages/Home';
import AboutView from './pages/about';
import Articles from './pages/articles';
import Juridical from './pages/juridical';
import NoPage from './pages/NoPage'
import Promotions from './pages/promotions'
import Contacts from './pages/contacts'
import Reviews from './pages/reviews'

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
            path: '/juridical',
            name: 'juridical',
            component: Juridical
        },
        {
            path: '/promotions',
            name: 'promotions',
            component: Promotions
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: Contacts
        },
        {
            path: '/reviews',
            name: 'reviews',
            component: Reviews
        },
        {
            path: '/:CatchAll(.*)',
            name: '404',
            component: NoPage
        }
    ]
})

export default router