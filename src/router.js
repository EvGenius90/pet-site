import { createRouter, createWebHistory } from "vue-router";

import HomeView from './pages/Home';
import AboutView from './pages/about';
import Articles from './pages/articles';
import Juridical from './pages/juridical';
import NoPage from './pages/NoPage'
import Promotions from './pages/promotions'
import Contacts from './pages/contacts'
import Reviews from './pages/reviews'
import Agreements from './pages/agreements'
import Bonus from './pages/bonus'
import Cats from './pages/cats'
import Products_Cats from './pages/products_Cats'
import Item from './pages/_itemAlias'

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
            path: '/agreements',
            name: 'agreements',
            component: Agreements
        },
        {
            path: '/bonus',
            name: 'bonus',
            component: Bonus
        },
        {
            path: '/cats',
            name: 'cats',
            component: Cats
        },
        {
            path: '/products_Cats',
            name: 'products_Cats',
            component: Products_Cats
        },
        {
            path: '/:itemAlias',
            name: 'alias',
            component: Item,
        },
        {
            path: '/:CatchAll(.*)',
            name: '404',
            component: NoPage
        }
    ]
})

export default router