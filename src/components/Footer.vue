<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__inner">
                <div class="footer__higher">
                    <form class="footer__higher-form form" action="#">
                        <label for="email">Узнавайте о новых скидках и спецпредложениях:</label>
                        <input type="email" name="email" id="email" placeholder="Ваш E-mail" required>
                        <button class="footer__button" disabled>Подписаться</button>
                    </form>
                    <div class="socials">
                        <a href="https://vk.com"><i class='bx bxl-vk'></i></a>
                        <a href="https://facebook.com"><i class='bx bxl-facebook' ></i></a>
                        <a href="https://instagram.com"><i class='bx bxl-instagram' ></i></a>
                    </div>
                </div>
                <div class="footer__line"></div>
                <div class="footer__lower">
                    <ul>
                        <li v-for="footerLower of footerLower" :key="footerLower">
                            <a :href="footerLower.url">{{ footerLower.title }}</a>
                        </li>
                        <a :href="promotions.url">
                            <li class="footer__lower-promotions">{{ promotions.title }}</li>
                        </a>
                        <a href="#">
                            <li>Статьи</li>
                        </a>
                        <a :href="vetclinic.url">
                            <li class="footer__lower-clinic">{{ vetclinic.title }}</li>
                        </a>
                    </ul>
                    <div class="footer__lower-countersline">
                        <p>© 2015-2019 Интернет-магазин зоотоваров «Сытая Морда»</p>
                        <p>Стоимость товаров на сайте не являеся публичой офертой</p>
                        <p>Условия соглашения</p>
                        <div class="footer__lower-countersline-phone">
                            <img :src="icons.phone.url" alt="phone">
                            <p class="footer__lower-countersline-phone-number">+7 (3452) 59-49-45</p>
                            <p class="footer__lower-countersline-phone-call-back call-back"><a class="call" href="#">Заказать звонок</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>

import { icons, footerLower, promotions, vetclinic } from '@/_config'

export default {
    data(){
        return{
            icons,
            footerLower,
            promotions,
            vetclinic
        }
    }
}
</script>

<style></style>