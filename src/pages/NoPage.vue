<template>
    <div class="not-found">
        <div class="not-found__content">
            <img class="not-found__img" :src="pictures.noPage.url" alt="">
            <h2>Страница не найдена</h2>
            <div class="not-found__btn">
                <router-link to="/">
                    <img :src="icons.btnArrowRigth.url" alt="">
                    <p>Вернуться назад</p>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { pictures, icons } from '@/_config';

export default {
    data(){
        return{
            pictures, icons
        }
    }
}
</script>

<style>

</style>