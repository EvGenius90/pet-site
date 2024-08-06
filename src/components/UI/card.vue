<template>
    <div class="card">
        <div class="promotion" v-if="promotion">
            {{ promotion + '%' }}
        </div>
        <RouterLink v-if=link :to="link">
            <div v-if="imgUrl">
                <img :src="imgUrl" alt="">
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
        }
    }
}
</script>

<style>

</style>