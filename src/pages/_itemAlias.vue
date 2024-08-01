<template>
    <div class="item-alias" v-if="item">
        <div class="container">
            <div class="profile-product">
                <div class="profile-product__foto">
                    <img class="foto" :src="item.img" alt="">
                    <div class="promotion" v-if="item.promotion">
                        {{ item.promotion + '%' }}
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
                                    <p>{{ item.weightValue1 + ' кг'}}</p>
                                    <p>{{ item.weightValue2 + ' кг'}}</p>
                                    <p>{{ item.weightValue3 + ' кг'}}</p>
                                </div>
                            </div>
                            <div class="profile-product__data_left_type">
                                <ul>
                                    <li>Тип<span>{{ item.type }}</span></li>
                                    <li>Возраст<span>{{ item.age }}</span></li>
                                    <li>Производитель<span>{{ item.Manufacturer }}</span></li>
                                </ul>
                            </div>
                        </div>
                        <div class="profile-product__data_right">
                            <div class="profile-product__data_right_purchase">
                                <div class="price-discount" style="font-size: 24px;">
                                    <span class="price-current" v-if="item.priceDiscound">{{ item.priceDiscound + ' р'}}</span> 
                                    <span class="price" v-if="item.price">{{ item.price + ' р'}}</span> 
                                    <span class="price-old" v-if="item.priceOld">{{ item.priceOld + ' р'}}</span>
                                </div>
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
        </div>
    </div>
    
</template>

<script>
import items from '@/components/seeders/items.js'
import { basket } from '@/_config';

export default {
    data(){
        return{
            item: null,
            counter: 0,
            basket,
        }
    },
    created(){
        const alias = this.$route.params.itemAlias
        const item = items.find(el => el.alias === alias)
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
        }
    }
    
}
</script>

<style>

</style>