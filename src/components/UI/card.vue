<template>
    <div class="card">
        <div class="promotion" v-if="promotion">
            {{ promotion + '%' }}
        </div>
        <a href="#">
            <div v-if="imgUrl">
                <img :src="imgUrl" alt="">
            </div>
            <p class="card__desc">{{ desc }}</p>
        </a>
        <div class="card__footer" >
            <p class="price-discount"><span v-if="priceDiscound">{{ priceDiscound + 'р'}}</span> <span class="price" v-if="price">{{ price + 'р'}}</span> <span class="price-old" v-if="priceOld">{{ priceOld + 'р'}}</span></p>
            <div class="card__btn">
                В корзину
            </div>
            <div class="card__footer_buy-click">
                <a href="#" class="one-click">Купить в 1 клик</a>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    props:{
        name:{
            type: String,
            required: true
        },
        imgUrl:{
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
        }
    }
}
</script>

<style>

</style>