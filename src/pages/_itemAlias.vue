<template>
    <div class="item-alias" v-if="item">
        <div class="container">
            <div class="profile-product">
                <div class="profile-product__foto">
                    <img :src="item.img" alt="">
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
                                <div class="price-discount">
                                    <span v-if="item.priceDiscound">{{ item.priceDiscound + ' р'}}</span> 
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import items from '@/components/seeders/items.js'

export default {
    data(){
        return{
            item: null,
            counter: 0,
        }
    },
    created(){
        const alias = this.$route.params.itemAlias
        const item = items.find(el => el.alias === alias)
        this.item = item
    },
    methods:{
        addToBasket(){
        this.counter++
        },
        plus(){
            this.counter++
        },
        minus(){
            this.counter--
        }
    }
    
}
</script>

<style>

</style>