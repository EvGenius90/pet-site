<template>
    <div class="container">
        <div class="about">
            <img class="about__image" src="../assets/imgs/Frame 483.png" alt="">
            <div class="about__tabs tabss">
                <div class="tabs__inner">
                    <nav class="tabs__items">
                        <input class="tabs__radio" type="radio" name="select" id="tab_01" >
                        <label class="tabs__label" for="tab_01">Команда магазина</label>
                        
                        <div class="tabs__block">
                            <img src="../assets/imgs/Frame 485.png" alt="">
                            <img src="../assets/imgs/Frame 486.png" alt="">
                            <img src="../assets/imgs/Frame 487.png" alt="">
                            <img src="../assets/imgs/Frame 488.png" alt="">
                            <img src="../assets/imgs/Frame 489.png" alt="">
                            <img src="../assets/imgs/Frame 490.png" alt="">
                            <img src="../assets/imgs/Frame 491.png" alt="">
                            <img src="../assets/imgs/Frame 492.png" alt="">
                            <img src="../assets/imgs/Frame 493.png" alt="">
                            <img src="../assets/imgs/Frame 494.png" alt="">
                            <img src="../assets/imgs/Frame 495.png" alt="">
                            <img src="../assets/imgs/Frame 496.png" alt="">
                            <img src="../assets/imgs/Frame 497.png" alt="">
                            <img src="../assets/imgs/Frame 498.png" alt="">
                            <img src="../assets/imgs/Frame 499.png" alt="">
                            <img src="../assets/imgs/Frame 501.png" alt="">
                            <img src="../assets/imgs/Frame 502.png" alt="">
                            <img src="../assets/imgs/Frame 503.png" alt="">
                        </div>
                        
                        <input class="tabs__radio" type="radio" name="select" id="tab_02">
                        <label class="tabs__label" for="tab_02">Команда ветклиники</label>
                        
                        <div class="tabs__block">
                            <img src="../assets/imgs/Frame 485.png" alt="">
                            <img src="../assets/imgs/Frame 486.png" alt="">
                            <img src="../assets/imgs/Frame 487.png" alt="">
                            <img src="../assets/imgs/Frame 488.png" alt="">
                            <img src="../assets/imgs/Frame 489.png" alt="">
                        </div>
                        <hr>
                    </nav>
                    
                </div>
                <div class="about__information">
                    <div class="about__characteristics">
                        <p><span>7 лет</span> <br> работаем для вас</p>
                        <p><span>8000</span> <br> Постоянных <br> клиентов</p>
                        <p><span>2 часа</span> <br> Среднее время доставки</p>
                        <p><span>17</span> <br> Неравнодушных к зверятам сотрудников</p>
                    </div>
                    <div class="about__history">
                        <h2>Как мы появились</h2>
                        <ul>
                            «При посещении множества зоомагазинов города, я столкнулся с проблемой дефицита в Тюмени лучших брендов. Из 20 видов можно купить в лучшем случае 5 или 6. С доставкой из других городов масса проблем: долгая и платная доставка,
                            "заморочки" транспортными компаниями,
                            истекающие сроки годности.
                            Это подтолкнуло меня к открытию магазина зоотоваров, который смог бы закрывать все те проблемы, с которыми я сам столкнулся. Сейчас здесь есть все, чего хотел я сам:
                            <li>огромное разнообразие кормов от лучших в мире производителей</li>
                            <li>бесплатная доставка по городу и возможность самовывоза из розничной точки.</li>
                            <li>гибкая система лояльности, благодаря которой мы завоевали огромную популярность среди покупателей»</li>
                        </ul>
                    </div>
                </div>
                <div class="about__slider">
                    <div class="about__slider_left" @click="left">
                        <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.01791 8.4521L8.55199 0.917334L9.96875 2.33423L2.43468 9.86899L1.01791 8.4521Z" fill="#FE9015"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.44367 7.02563L9.96673 14.5721L8.54688 15.9861L1.02381 8.43957L2.44367 7.02563Z" fill="#FE9015"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3556 9.45874L2.35547 9.45874L2.35547 7.45874L20.3556 7.45874L20.3556 9.45874Z" fill="#FE9015"/>
                        </svg>
                    </div>
                    <div class="about__slider_right" @click="right">
                        <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9821 7.54807L12.448 15.0826L11.0312 13.6658L18.5653 6.13121L19.9821 7.54807Z" fill="#FE9015"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.5563 8.97437L11.0333 1.42785L12.4531 0.013916L19.9761 7.56043L18.5563 8.97437Z" fill="#FE9015"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.644443 6.54126L18.6445 6.54126L18.6445 8.54126L0.644444 8.54126L0.644443 6.54126Z" fill="#FE9015"/>
                        </svg>
                    </div>
                    <div class="about__slider_inner">
                        <img class="about__slider_img opas" src="../assets/imgs/15 1.png" alt="">
                        <img class="about__slider_img " src="../assets/imgs/15 1.png" alt="">
                        <img class="about__slider_img opas" src="../assets/imgs/15 1.png" alt="">
                        <img class="about__slider_img opas" src="../assets/imgs/15 1.png" alt="">
                        <img class="about__slider_img opas" src="../assets/imgs/15 1.png" alt="">
                    </div>
                </div>
                <div class="about__video">
                    <h2>Видеоэкскурсия по магазину</h2>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            offset: -980,
            num: 0
        }
    },
    methods:{
        left(){
            let slider = document.querySelector('.about__slider_inner')
            let img = document.querySelectorAll('.about__slider_img')

            if(this.offset >= 0){
                this.offset = -980
                this.num = 0
                img[this.num + 1].classList.remove('opas')
            }

            img[this.num].classList.remove('opas')
            img[this.num + 1].classList.add('opas')
            --this.num

            this.offset += 980

            slider.style.left = this.offset + 'px'
        },
        right(){
            let slider = document.querySelector('.about__slider_inner')
            let img = document.querySelectorAll('.about__slider_img')

            if (this.offset <= -3920) {
                this.offset = -2940
                this.num = 2
                img[this.num + 2].classList.remove('opas')
            }
            
            img[this.num + 2].classList.remove('opas')
            img[this.num + 1].classList.add('opas')
            ++this.num
            
            this.offset -= 980

            slider.style.left = this.offset + 'px'
        }
    }
}
</script>

<style>

</style>