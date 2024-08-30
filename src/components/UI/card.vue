<template>
    <div class="card">
        <div class="promotion" v-if="promotion">
            {{ promotion + '%' }}
        </div>
        <RouterLink v-if=link :to="link">
            <div v-if="imgUrl">
                <img class="" :src="imgUrl" alt="">
            </div>
            <div v-else>
                <img :src="noImg" alt="">
            </div>
            <p class="card__desc">{{ desc }}</p>
        </RouterLink>
        <div class="select-block" v-if="weightValue1">
            <select class="select" name="choice" >
                <option value="">{{ weightValue1 + ' кг'}}</option>
                <option value="" selected>{{ weightValue2 + ' кг'}}</option>
                <option value="">{{ weightValue3 + ' кг'}}</option>
            </select>
            <img src="@/assets/icons/select.svg" alt="">
        </div>
        <div class="card__footer" >
            <p class="price-discount">
                <span v-if="priceDiscound">{{ priceDiscound + ' р'}}</span> 
                <span class="price" v-if="price">{{ price + ' р'}}</span> 
                <span class="price-old" v-if="priceOld">{{ priceOld + ' р'}}</span>
            </p>
            <div class="card__btn" @click="addToBasket">
                В корзину
            </div>
            <div class="card__footer_buy-click" @click="modalWindow">
                <a href="#" class="one-click">Купить в 1 клик</a>
            </div>
        </div>
    </div>
</template>

<script>
import items from '@/components/seeders/items.js'
import { basket, listBasket, links } from '@/_config'

export default {
    data(){
        return{
            item: null,
            items,
            counter: 0,
            qwe: 0,
            basket,
            listBasket,
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
    methods:{
        addToBasket(){
            // увеличивает кол-во товарв в корзине на один
            this.counter++
            // увеличивает кол-во товара в корзине на один
            this.basket.basketCounter++

            if(this.priceDiscound){
                this.basket.price += this.priceDiscound
                this.qwe = this.counter * this.priceDiscound
            }
            else{
                this.basket.price += this.price
                this.qwe = this.counter * this.price
            }
            
            
            // this.numberBasketArray++

            this.listBasket.push({
                img: this.imgUrl,
                descr: this.desc,
                counter: this.counter,
                price: this.price,
                priceDiscound: this.priceDiscound,
                priceOld: this.priceOld,
                promotion: this.promotion,
                qwe: this.qwe, // переменная содержащая сумму денег данного товара добавленного в корзину
                totalPrice: this.basket.totalPrice,
                alias: this.alias
            })
            
        },
        modalWindow(){
            const modal = document.querySelector('.dark-fon')
            modal.classList.remove('d-none')
            document.body.style.overflow = 'hidden'
            
        },
    },
    props:{
        name:{
            type: String,
            required: true
        },
        imgUrl:{
            type: String
        },
        noImg:{
            type: String
        },
        desc:{
            type: String,
            required: true
        },
        price:{
            type: String,
        },
        priceDiscound:{
            type: String
        },
        priceOld:{
            type: String
        },
        promotion:{
            type: String
        },
        weight:{
            type: String
        },
        weightValue1:{
            type: String
        },
        weightValue2:{
            type: String
        },
        weightValue3:{
            type: String
        },
        link:{
            type: String
        },
        category:{
            type: String
        },
    },
}
</script>