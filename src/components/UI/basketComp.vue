<template>
    <div class="block-basket ">
        <div class="block-basket__content" v-for="asd of qwe" :key="asd">
            <div class="block-basket__content-foto">
                <img  :src="asd.img" alt="" width="100">
                <div class="block-basket__content-promotion" v-if="asd.promotion">{{ asd.promotion }}%</div>
            </div>
            <p class="block-basket__content-descr">{{ asd.descr }}</p>
            <span class="block-basket__content-counter">{{ asd.counter }} шт</span>
            <div class="block-basket__content-prices">
                <span>{{ asd.price }}</span>
                <span>{{ asd.priceDiscound }}</span>
                <span>{{ asd.priceOld }}</span>
            </div>
            <div>
                <img src="@/assets/icons/wastebasket.svg" alt="" width="20">
            </div>
        </div>
    </div>
</template>

<script>
import items from '@/components/seeders/items'
import {qwe} from '@/_config'
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
            qwe
        }
    },
}
</script>

<style>

</style>