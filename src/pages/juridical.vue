<template>
    <div class="juridical">
        <div class="container">
            <div class="juridical__content">
                <h1 class="juridical__title">Юридическим лицам</h1>
                <div class="juridical__subtitle">
                    Зоомагазин "Сытая Морда" сотрудничает с юридическими лицами и индивидуальными предпринимателями и поставляет зоотовары организациям на разовой, а так же регулярной основе.
                </div>
                <div class="juridical__drop-down">
                    <div class="juridical__drop-down_block">
                        <div class="juridical__drop-down_menu" @click="reveal">
                            <p class="juridical__drop-down_title" >Как оформить заказ на юридическое лицо или ИП? </p>
                            <svg class="juridical__drop-down_svg" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L10.59 0.589996L6 5.17L1.41 0.589996L-6.16331e-08 2L6 8L12 2Z" fill="#333333" />
                            </svg>
                        </div>
                        <div class="juridical__drop-down_hidden">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, dolor.
                        </div>
                    </div>
                    <div class="juridical__drop-down_block">
                        <div class="juridical__drop-down_menu" @click="reveal">
                            <p class="juridical__drop-down_title">Как получить товар?</p>
                            <svg class="juridical__drop-down_svg" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L10.59 0.589996L6 5.17L1.41 0.589996L-6.16331e-08 2L6 8L12 2Z" fill="#333333" />
                            </svg>
                        </div>
                        <div class="juridical__drop-down_hidden">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, dolor sdfsdfs.
                        </div>
                    </div>
                    <div class="juridical__drop-down_block">
                        <div class="juridical__drop-down_menu" @click="reveal">
                            <p class="juridical__drop-down_title">Что нужно для получения заказа?</p>
                            <svg class="juridical__drop-down_svg" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L10.59 0.589996L6 5.17L1.41 0.589996L-6.16331e-08 2L6 8L12 2Z" fill="#333333" />
                            </svg>
                        </div>
                        <div class="juridical__drop-down_hidden">
                            Если Вы приобрели корм, средство гигиены или лекарство для животного, а затем передумали и решили его обменять или вернуть, то по закону эти товары не могут быть заменены или возвращены обратно, если они соответствуют прописанным стандартам качества и всем требованиям.
                            Если при получении доставки вы обнаружили, что доставленный товар не соответствует заказанному вами, или же у вас возникла другая претензия, вы вправе отказаться от его приобретения - достаточно вернуть товар курьеру, без оплаты его стоимости. 
                            При отказе от заказа в полном объеме оплачивается стоимость доставки – 150 руб. 
                        </div>
                    </div>
                </div>
                <div class="juridical__requisites">
                    <div class="juridical__requisites_title">Наши реквизиты</div>
                    <div class="juridical__requisites_list">
                        <ul>
                            <li>
                                <div class="juridical__requisites_bank">Юридический адрес организации</div>
                                <div>РОССИЯ, ТЮМЕНСКАЯ ОБЛ, Г ТЮМЕНЬ, УЛ ПАРФЕНОВА, 17, 9</div>
                            </li>
                            <li>
                                <div class="juridical__requisites_bank">ИНН</div>
                                <div>720325511507</div>
                            </li>
                            <li>
                                <div class="juridical__requisites_bank">ОГРН</div>
                                <div>316723200066111</div>
                            </li>
                            <li>
                                <div class="juridical__requisites_bank">Расчетный счет</div>
                                <div>40802810300000534994</div>
                            </li>
                            <li>
                                <div class="juridical__requisites_bank">Банк</div>
                                <div>АО "ТИНЬКОФФ БАНК"</div>
                            </li>
                            <li>
                                <div class="juridical__requisites_bank">Юридический адрес банка</div>
                                <div>Москва, 123060, 1-й Волоколамский проезд, д. 10, стр. 1</div>
                            </li>
                            <li>
                                <div class="juridical__requisites_bank">Корр.счет банка</div>
                                <div>30101810145250000974</div>
                            </li>
                            <li>
                                <div class="juridical__requisites_bank">ИНН банка</div>
                                <div>7710140679</div>
                            </li>
                            <li>
                                <div class="juridical__requisites_bank">БИК банка</div>
                                <div>044525974</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return{

        }
    },
    methods:{
        reveal(e){
            const dropDown = document.querySelectorAll('.juridical__drop-down_menu')
            const dropDownTitle = document.querySelectorAll('.juridical__drop-down_title')
            const dropDownSvg = document.querySelectorAll('.juridical__drop-down_svg')
            const dropDownHidden = document.querySelectorAll('.juridical__drop-down_hidden')
            for(let i of dropDown){
                if(e.target == i){
                    e.target.nextSibling.classList.toggle('dropDown')
                    i.querySelector('.juridical__drop-down_svg').classList.toggle('rotate_svg')
                }
            }

            for(let i of dropDownTitle){
                
                for(let j of dropDownSvg){
                    if(e.target == i || e.target == j){
                    const parent = e.target.parentNode
                    parent.nextSibling.classList.toggle('dropDown')
                    i.nextSibling.classList.toggle('rotate_svg')
                    }
                }
                
            }
        }
    }
}
</script>

<style>

</style>

