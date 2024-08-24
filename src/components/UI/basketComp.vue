<template>
    <div class="block-basket">
        <div class="block-basket__content" v-for="(list, index) of listBasket" :key="list">
            <div class="block-basket__content-foto">
                <img  :src="list.img" alt="" width="100">
                <div class="block-basket__content-promotion" v-if="list.promotion">{{ list.promotion }}%</div>
            </div>
            <p class="block-basket__content-descr">{{ list.descr }}</p>
            <span class="block-basket__content-counter">{{ list.counter }} шт</span>
            <div class="block-basket__content-prices">
                <span class="price" v-if="list.price">{{ list.price }} р</span>
                <span class="price-discount" v-if="list.priceDiscound" style="margin: 0;">{{ list.priceDiscound }} р</span>
                <span class="price-old" v-if="list.priceOld">{{ list.priceOld }} р</span>
            </div>
            <div>
                <img @click="deleteArray(index)" src="@/assets/icons/wastebasket.svg" alt="" width="20">
            </div>
        </div>
        <div class="block-basket__total" v-if="listBasket.length">
            <div class="block-basket__total-price">
                <p>Итого:</p>
                <span>{{ basket.price }} р</span>
            </div>
            <div class="block-basket__total-button">
                <div class="block-basket__total-button-btn">
                    Оформить заказ
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import items from '@/components/seeders/items'
import {listBasket, basket} from '@/_config'
import itemsAlias from '@/pages/_itemAlias'
import cartItem from '@/components/cartItem'

export default {
    components:{
        cartItem,
        itemsAlias
    },
    data(){
        return{
            items,
            listBasket,
            basket
        }
    },
    created(){
        const alias = this.$route.params.itemAlias
        const item = items.find(el => el.alias === alias)
        this.item = item
    },
    methods:{
        deleteArray(e){
            this.basket.price -= this.listBasket[e].qwe
            this.basket.basketCounter -= this.listBasket[e].counter
            this.listBasket.splice(e, 1)
        }
    }
}
</script>

<style>

</style>