<template>
    <!-- <ul>
        <li v-for="link of links" :key="link">
            <a :href="link.url">{{ link.title }}</a>
            <img :src="link.img" :alt="link.logo">
        </li>
    </ul> -->
    <header class="header">
        <div class="container">
            <div class="header__inner">
                <div class="header__upper">
                    <ul class="header__upper-nav">
                        <div>
                            <ul>
                                <li class="header__upper-list more">
                                    <a class="header__upper-outline link-more" href="#">Ваш город</a>
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
                            <a :href="link.url">{{ link.title }}</a>
                        </li>
                        <li class="header__upper-more more">
                            <a class="header__upper-more-vector link-more" href="#">Еще</a>
                            <ul class="submenu hidden-menu ">
                                <li><a href="#">Бонусная программа</a></li>
                                <li><a href="#">Для юр. лиц</a></li>
                                
                            </ul>
                        </li>
                    </ul>
                    <div class="header__upper-phone">
                        <img :src="icons.phone.url" alt="phone">
                        <p>+7 (3452) 59-49-45</p>
                        <a class="call" href="#">Заказать звонок</a>
                    </div>
                </div>
                <div class="header__average">
                    <a class="logo" href="index.html">
                        <img class="logo__img" :src="pictures.logo.url" :alt="pictures.name">
                    </a>
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
                                <a :href="linksLower.url">{{ linksLower.title }}</a>
                            </li>
                            <a :href="promotions.url"><li>{{ promotions.title}}</li></a>
                        </ul>
                    </div>
                    <div class="header__lower-right">
                        <ul>
                            <li><a href="#">Франчайзинг</a></li>
                            <a :href="vetclinic.url"><li>{{ vetclinic.title }}</li></a>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
import { links, pictures, icons, headerLower, promotions, vetclinic } from '@/_config';

export default {
    data() {
        return{
            links,
            pictures,
            icons,
            headerLower,
            promotions,
            vetclinic
        }
    }
}

</script>

<style></style>