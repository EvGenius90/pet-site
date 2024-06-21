<template>
    <header class="header">
        <div class="container">
            <div class="header__inner">
                <div class="header__upper">
                    <ul class="header__upper-nav">
                        <div>
                            <ul>
                                <li class="header__upper-list more">
                                    <routerLink class="header__upper-outline link-more" to="#" @click="more">Ваш город</routerLink>
                                    <ul class="header__upper-list-submenu submenu hidden-menu">
                                        <div class="all-close submenu__close close">&#215;</div>
                                        <p>Выберите ваш город</p>
                                        <div class="header__upper-list-submenu-box">
                                            <input type="search" placeholder="Ваш город">
                                            <img src="icons/Vector.svg" alt="">
                                        </div>
                                        <ul class="header__upper-list-submenu-list">
                                            <li>Тюмень</li>
                                            <li>Новый Уренгой</li>
                                            <li>Екатеринбург</li>
                                            <li>Сургут</li>
                                            <li>Курган</li>
                                            <li>Тобольск</li>
                                            <li>Нижневартовск</li>
                                        </ul>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <li class="header__upper-nav-li" v-for="link of links" :key="link">
                            <RouterLink :to="link.url">{{ link.title }}</RouterLink>
                        </li>
                        <li class="header__upper-more more">
                            <RouterLink class="header__upper-more-vector link-more" to="#" @click="more">Еще</RouterLink>
                            <ul class="submenu hidden-menu ">
                                <li><RouterLink to="#">Бонусная программа</RouterLink></li>
                                <li><RouterLink to="#">Для юр. лиц</RouterLink></li>
                                
                            </ul>
                        </li>
                    </ul>
                    <div class="header__upper-phone">
                        <img :src="icons.phone.url" alt="phone">
                        <p>+7 (3452) 59-49-45</p>
                        <RouterLink class="call" to="#">Заказать звонок</RouterLink>
                    </div>
                </div>
                <div class="header__average">
                    <RouterLink class="logo" to="/">
                        <img class="logo__img" :src="pictures.logo.url" :alt="pictures.name">
                    </RouterLink>
                    <div class="search">
                        <input type="search" placeholder="Поиск товаров">
                        <img :src="icons.search.url" alt="search">
                    </div>
                    <div class="profile">
                        <img :src="icons.profile.url" alt="profile">
                        <span></span>
                    </div>
                    <div class="basket">
                        <img :src="icons.basket.url" alt="basket">
                        <div class="basket__products">
                            <span>0</span>
                        </div>
                    </div>
                    <div class="basket-vidget d-none">
                        <div class="basket-vidget__inner">
                            <span>Корзина пуста</span>
                        </div>
                    </div>
                </div>
                <nav class="header__lower">
                    <div class="header__lower-left">
                        <ul>
                            <li v-for="linksLower of headerLower" :key="linksLower">
                                <RouterLink :to="linksLower.url">{{ linksLower.title }}</RouterLink>
                            </li>
                            <RouterLink :to="promotions.url"><li>{{ promotions.title}}</li></RouterLink>
                        </ul>
                    </div>
                    <div class="header__lower-right">
                        <ul>
                            <li><RouterLink :to="franchising.url">{{ franchising.title }}</RouterLink></li>
                            <RouterLink :to="vetclinic.url"><li>{{ vetclinic.title }}</li></RouterLink>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
import { 
    links, 
    pictures, 
    icons, 
    headerLower, 
    promotions, 
    vetclinic, 
    franchising 
} from '@/_config';

export default {
    data() {
        return{
            links,
            pictures,
            icons,
            headerLower,
            promotions,
            vetclinic,
            franchising
        }
    },
    methods:{
        more(e){
            const linkMore = document.querySelectorAll('.link-more')

            // находит родительский элемент
            const submenu = e.target.closest('.more')
            // находит дочерний элемент
            const zxc = submenu.querySelector('.submenu')
            // меняет стиль окна
            zxc.classList.toggle('visible-menu')
        },
        close(){
            const modalClose = document.querySelectorAll('.modal-close')

            orderCall.classList.add('d-none')
            document.body.style.overflow = ''
        }
    }
}

</script>

<style></style>