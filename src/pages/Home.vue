<template>

    <div class="slider">
        <div class="container">
            <div class="slider__inner">
                <div class="slider__arrow-L">
                    <img :src="icons.arrowLeft.url" alt="">
                </div>
                <div class="slider__arrow-R">
                    <img :src="icons.arrowRight.url" alt="">
                </div>
                <div class="slide">
                    <div class="slider__text">
                        <h1>Лохматость сильно повысится!</h1>
                        <p>Скидка 20% на все шампуни для котеек.</p>
                        <div class="button-slider">
                            <a href="#">Смотреть шампуни</a>
                            <img :src="icons.vectorRight.url" alt="vector">
                        </div>
                    </div>
                    <img :src="pictures.cat.url" alt="">
                </div>
                <div class="slide d-none">
                    <div class="slider__text">
                        <h2>
                            Мы любим животных, поэтому вы можете на нас положиться
                        </h2>
                    </div>
                    <img :src="pictures.imgSlide.url" alt="">
                </div>
            </div>
        </div>
    </div>

</template>

<script>

import { pictures, icons } from '@/_config'

export default {
    data(){
        return{
            pictures,
            icons
        }
    }
}
</script>

<style>

</style>