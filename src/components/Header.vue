<template>
    <header class="header" :scroll="asd">
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
                            <ul class="submenu hidden-menu">
                                <li v-for="headerMore of headerMore" :key="headerMore">
                                    <RouterLink :to="headerMore.url">{{ headerMore.title }}</RouterLink>
                                </li>
                                
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
                        <span>Войти</span>
                    </div>
                    <div class="basket" @click="showBasket">
                        <img :src="icons.basket.url" alt="basket">
                        <span v-if="basket.price">{{basket.price}}</span>
                        <div class="basket__products">
                            <span>{{ basket.basketCounter }}</span> 
                            <!-- добавлен v-if для проверки наличия значения item.basketCounter -->
                            <!-- <span>{{ item.basketCounter }}</span> -->
                        </div>
                    </div>
                    <div class="basket-vidget d-none">
                        <div class="basket-vidget__inner">
                            <BlockProducts></BlockProducts>
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
    franchising,
    headerMore,
    basket
} from '@/_config';
import BlockProducts from '@/components/UI/basketComp'

export default {
    data() {
        return{
            links,
            pictures,
            icons,
            headerLower,
            promotions,
            vetclinic,
            franchising,
            headerMore,
            basket
        }
    },
    components: { BlockProducts },
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
        },
        qwe(){
            const header = document.querySelector('.header')
            if(header.scrollY > 20){
                console.log('goood')
            }
        },
        showBasket(){
            // const target = e.target
    
            // if(!target.closest('.basket') && !target.closest('.basket-vidget')){

            //     basketVidget.classList.add('d-none')

            // }
            const basketVidget = document.querySelector('.basket-vidget')

            basketVidget.classList.toggle('d-none')
        },
        myHeader(){
            const header = document.querySelector('.header')
            const headerUpper = document.querySelector('.header__upper')
            const headerLower = document.querySelector('.header__lower')
            const headerAverage = document.querySelector('.header__average')
            const logoImg = document.querySelector('.logo__img')
            const search = document.querySelector('.search')
            const profile = document.querySelector('.profile')
            const basket = document.querySelector('.basket')
            const main = document.querySelector('.main')
            const up = document.querySelector('.up')

            const hHeight = header.offsetHeight
            
            if(window.scrollY <= 200){
                console.log('goood')
            }
            // const scrollY = window.scrollY

            // document.addEventListener('scroll', function(){

                

                // const headerInner = document.querySelector('.header__inner')
                // main.style.marginTop = `${hHeight}px`;

                // if(window.scrollY >= 200){
                    
                //     up.style.cssText = `
                //     bottom: 48px
                //     `

                //     headerInner.classList.add('mini-header')

                //     headerAverage.classList.add('mini-average')

                //     headerAverage.style.cssText = `
                //     align-items: flex-start;
                //     padding: 15px 0
                //     `

                //     logoImg.style.cssText = `
                //     height: 60px;
                //     margin-top: -8px;
                //     `

                //     search.style.cssText = `
                //     height: 50px
                //     `
                    
                //     profile.style.cssText = `
                //     height: 50px
                //     `

                //     basket.style.cssText = `
                //     height: 50px
                //     `

                //     headerUpper.classList.add('d-none')

                //     headerLower.classList.add('d-none')

                //     header.style.cssText = `
                //     margin-top: 0px
                //     `

                // }
                // else{

                //     up.style.cssText = `
                //     bottom: -48px
                //     `

                //     headerInner.classList.remove('mini-header')

                //     main.style.marginTop = null;

                //     headerAverage.classList.remove('mini-average')

                //     headerAverage.style.cssText = `
                //     align-items: flex-end;
                //     padding: 9px 0
                //     `

                //     logoImg.style.cssText = `
                //     heght: 73px;
                //     margin-top: 0px;
                //     `

                //     search.style.cssText = `
                //     height: 60px
                //     `

                //     profile.style.cssText = `
                //     height: 60px
                //     `

                //     basket.style.cssText = `
                //     height: 60px
                //     `

                //     headerUpper.classList.remove('d-none')

                //     headerLower.classList.remove('d-none')

                //     header.style.cssText = `
                //     margin-top: 17px
                //     `

                // }

            // })
        }
    },
    computed:{
        asd(){
            const header = document.querySelector('.header')
            if(window.scrollY > 20){
                console.log('goood')
            }
        }
    }
}

</script>

<style></style>