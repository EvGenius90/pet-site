<template>
    <div class="item-alias" v-if="item">
        <div class="container">
            <div class="profile-product">
                <div class="profile-product__fotos">
                    <div class="profile-product__foto">
                        <div class="profile-product__foto_block">
                            <img class="foto" v-if="this.src" :src="this.src" alt="">
                            <img class="foto" v-else-if="item.img" :src="item.img" alt="">
                            <img class="no-foto" v-else :src="item.noImg" alt="">
                            <div class="promotion" v-if="item.promotion">
                                {{ item.promotion + '%' }}
                            </div>
                        </div>
                    </div>
                    <div class="profile-product__slid" v-if="item.sliderImg1">
                            <div class="profile-product__slid_left" v-if="i >= 2" @click="left">
                                <img class="profile-product__slid_left_svg" src="../assets/icons/Group443.svg" alt="">
                            </div>
                            <div class="profile-product__slid_right" v-if="item.sliderImg4" @click=right>
                                <img class="profile-product__slid_right_svg" src="../assets/icons/Group443.svg" alt="">
                            </div>
                            <div class="profile-product__slider">
                                <div class="active-foto  profile-product__slider_img" @click="focusFoto">
                                    <img class="profile-product__slider_sfoto" :src="item.sliderImg1" alt="">
                                </div>
                                <div class="profile-product__slider_img" v-if="item.sliderImg2" @click="focusFoto">
                                    <img class="profile-product__slider_sfoto" :src="item.sliderImg2" alt="">
                                </div>
                                <div class="profile-product__slider_img" v-if="item.sliderImg3" @click="focusFoto">
                                    <img class="profile-product__slider_sfoto" :src="item.sliderImg3" alt="">
                                </div>
                                <div class="profile-product__slider_img" v-if="item.sliderImg4" @click="focusFoto">
                                    <img class="profile-product__slider_sfoto" :src="item.sliderImg4" alt="">
                                </div>
                            </div>
                        </div>
                </div>
                <div class="profile-product__information">
                    <div class="profile-product__title">
                        <p>{{ item.descr }}</p>
                    </div>
                    <div class="profile-product__data">
                        <div class="profile-product__data_left">
                            <div class="profile-product__data_left_code">
                                Код товара: {{ item.ProductCode }}
                            </div>
                            <div class="profile-product__data_left_weight" v-if="item.weightValue1">
                                <div class="profile-product__data_left_weight_block">
                                    <p class="profile-product__data_left_weight_block_p" @click="focusParagraph">{{ item.weightValue1 + ' кг'}}</p>
                                    <p class="profile-product__data_left_weight_block_p" @click="focusParagraph">{{ item.weightValue2 + ' кг'}}</p>
                                    <p class="profile-product__data_left_weight_block_p" @click="focusParagraph">{{ item.weightValue3 + ' кг'}}</p>
                                </div>
                            </div>
                            <div class="profile-product__data_left_type">
                                <ul>
                                    <li>Тип<span>{{ item.type }}</span></li>
                                    <li>Возраст<span>{{ item.age }}</span></li>
                                    <li>Производитель<span>{{ item.Manufacturer }}</span></li>
                                </ul>
                            </div>
                            <p class="profile-product__data_left_all">Смотреть все</p>
                        </div>
                        <div class="profile-product__data_right">
                            <div class="profile-product__data_right_purchase">
                                <div class="price-discount" style="font-size: 24px;">
                                    <span class="price-current" v-if="item.priceDiscound">{{ item.priceDiscound + ' р'}}</span> 
                                    <span class="price" v-if="item.price">{{ item.price + ' р'}}</span> 
                                    <span class="price-old" v-if="item.priceOld">{{ item.priceOld + ' р'}}</span>
                                </div>
                                <div v-if="item.availability">
                                    <div class="card__btn" @click="addToBasket" v-if="counter < 1">
                                        В корзину
                                    </div>
                                    <div class="change-quantities" v-if="counter > 0">
                                        <div class="minus" @click="minus"></div>
                                        <span>{{counter}}</span>
                                        <div class="plus" @click="plus"></div>
                                    </div>
                                    <div class="one-click_border">
                                        Купить в 1 клик
                                    </div>
                                </div>
                            </div>
                            <div class="product-info">
                                <div class="product-info__availability product-info__block" v-if="item.availability">
                                    <img src="../assets/icons/galka-green.svg" alt="">
                                    <span>Есть на складе</span>
                                </div>
                                <div class="product-info__delivery product-info__block" v-if="item.availability">
                                    <img src="../assets/icons/clock-green.svg" alt="">
                                    <span>Доставим сегодня</span>
                                </div>
                                <div class="product-info__availability-not product-info__block" v-if="!item.availability">
                                    <img src="../assets/icons/exclamation-point.svg" alt="">
                                    <div>
                                        <span>Нет в наличии. Под заказ от 2 до 7 дней</span>
                                    </div>
                                </div>
                                <div class="product-info__delivery-info product-info__block">
                                    <img src="../assets/icons/car.svg" alt="">
                                    <div>
                                        <span>
                                            Бесплатная доставка по Тюмени при заказе от 1490р.
                                            <a href="#">Узнать все условия доставки</a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="item-alias__about">
                <div class="about">
                    <div class="tabss">
                        <div class="tabs__inner" style="margin-bottom: auto">
                            <div class="tabs__items">
        
                                <input class="tabs__radio" type="radio" name="select" id="tab_01" >
                                <label class="tabs__label" for="tab_01">Описание</label>
        
                                <div class="tabs__block item-alias__tabs__block">
                                    <ul>
                                        <li>Тип<span>{{ item.type }}</span></li>
                                        <li>Возраст<span>{{ item.age }}</span></li>
                                        <li>Производитель<span>{{ item.Manufacturer }}</span></li>
                                    </ul>
                                    <ul>
                                        <li>Тип<span>{{ item.type }}</span></li>
                                        <li>Возраст<span>{{ item.age }}</span></li>
                                        <li>Производитель<span>{{ item.Manufacturer }}</span></li>
                                    </ul>
                                </div>
        
                                <input class="tabs__radio" type="radio" name="select" id="tab_02">
                                <label class="tabs__label" for="tab_02">Характеристики</label>
                                <div class="tabs__block">
                                    <ul>
                                        <li>Тип<span>{{ item.type }}</span></li>
                                        <li>Возраст<span>{{ item.age }}</span></li>
                                        <li>Производитель<span>{{ item.Manufacturer }}</span></li>
                                    </ul>
                                </div>
                                <hr>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="similar-products">
                <h1>Похожие товары</h1>

                <div class="similar-products__inner" >
                    <div class="products_cats__right-column" v-for="item of items" :key="item.id">
                        <dvi class="card-wrapper"  v-if="item.alias == this.$route.params.itemAlias">
                            <card :promotion="item.promotion" :imgUrl="item.img" :desc="item.descr" :price="item.price" 
                                :priceDiscound="item.priceDiscound" :priceOld="item.priceOld" 
                                :weightValue1="item.weightValue1" :weightValue2="item.weightValue2" :weightValue3="item.weightValue3"
                                :weightValue="item.weightValue" :link="item.alias"></card>
                        </dvi>
                    </div>
                </div>
            </div>

            <div class="Recommended-products">
                <h1>Рекомендуемые товары</h1>

                <div class="Recommended-products__inner" >
                    <div class="products_cats__right-column" v-for="item of items" :key="item.id">
                        <dvi class="card-wrapper"  v-if="item.category == this.$route.params.category">
                            <card :promotion="item.promotion" :imgUrl="item.img" :desc="item.descr" :price="item.price" 
                                :priceDiscound="item.priceDiscound" :priceOld="item.priceOld" 
                                :weightValue1="item.weightValue1" :weightValue2="item.weightValue2" :weightValue3="item.weightValue3"
                                :weightValue="item.weightValue" :link="item.alias"></card>
                        </dvi>
                    </div>
                </div>
            </div>

        </div>
    </div>
    
</template>

<script>
import items from '@/components/seeders/items.js'
import { basket } from '@/_config';
import Card from '@/components/UI/card';

export default {
    components:{ Card },
    data(){
        return{
            item: null,
            itemCategory: null,
            items,
            counter: 0,
            basket,
            i: 1,
            src: '',
        }
    },
    created(){
        const alias = this.$route.params.itemAlias
        const item = items.find(el => el.alias === alias)

        const category = this.$route.params.category
        const itemCategory = items.find(el => el.category === category)

        this.itemCategory = itemCategory
        this.item = item
    },
    props:{
        imgUrl:{
            type: String
        },
    },
    methods:{
        addToBasket(){
            if(this.item.priceDiscound){
                this.basket.price += this.item.priceDiscound
            }
            else{
                this.basket.price += this.item.price
            }

            this.counter++
            this.basket.basketCounter++

            document.querySelector('.block-basket__content').innerHTML = 
                `<div style="display: flex; border-bottom: 1px solid #c8cbd0">
                    <img style="width: 100px; height: 100px" src="${this.item.img}" alt="">
                    <p>${this.item.descr}</p>
                    <p>${this.counter + ' шт'}</p>
                </div>`
        },
        plus(){
            if(this.item.priceDiscound){
                this.basket.price += this.item.priceDiscound
            }
            else{
                this.basket.price += this.item.price
            }

            // this.basket.price += this.item.priceDiscound
            this.counter++
            this.basket.basketCounter++
        },
        minus(){
            if(this.item.priceDiscound){
                this.basket.price -= this.item.priceDiscound
            }
            else{
                this.basket.price -= this.item.price
            }

            // this.basket.price -= this.item.priceDiscound
            this.counter--
            this.basket.basketCounter--
        },
        right(){
            const imgs = document.querySelectorAll('.profile-product__slider_img')
            const rig = document.querySelector('.profile-product__slid_right')
            
            if(imgs.length){
                imgs[this.i - 1].classList.add('d-none')
                    
            }
            // удаляет правую кнопку слайдера если this.i == imgs.length - 2
            if(this.i == imgs.length - 2){
                rig.classList.add('d-none')
            }
            
            ++this.i
        },
        left(){
            const imgs = document.querySelectorAll('.profile-product__slider_img')
            const rig = document.querySelector('.profile-product__slid_right')
            
            if(imgs.length){
                imgs[this.i - 2].classList.remove('d-none')
            }
            // показывает правую кнопку слайдера если this.i == imgs.length - 1
            if(this.i == imgs.length  - 1){
                rig.classList.remove('d-none')
            }

            --this.i
        },
        focusFoto(e){
            const imgs = document.querySelectorAll('.profile-product__slider_img')
            const targ = e.target.closest('.profile-product__slider_img')
            const childTarg = targ.querySelector('.profile-product__slider_sfoto')
            const atr = childTarg.getAttribute('src')

            this.src = atr

            for(let i of imgs){
                i.classList.remove('active-foto')
            }

            if(targ){
                targ.classList.add('active-foto')
                
            }
            
        },
        focusParagraph(e){
            const paragraph = document.querySelectorAll('.profile-product__data_left_weight_block_p')
            const targ = e.target.closest('.profile-product__data_left_weight_block_p')

            for(let i of paragraph){
                i.classList.remove('active-paragraph')
            }
            if(targ){
                targ.classList.add('active-paragraph')
            }

        },
    }
    
}
</script>

<style>

</style>