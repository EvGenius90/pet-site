<template>
    <div class="products_cats">
        <div class="container">
            <h1>Товары для кошек</h1>
            <div class="products_cats__left-column">
                <div class="products_cats__left-column_column-price">
                    <div @click="hidden" class="products_cats__left-column_block">
                        <img class="products_cats__left-column_block_svg" src="../assets/icons/Vector_up.svg" alt="">
                        <p>Цена</p>
                    </div>
                    <div class="products_cats__left-column_opening">
                        <div style="min-height: 0">
                            <div class="products_cats__left-column_block-price">
                                <label class="products_cats__left-column_left">
                                    <input class="products_cats__left-column_input-number" type="number" v-bind:value="minValue">
                                </label>
                                <label class="products_cats__left-column_right">
                                    <input class="products_cats__left-column_input-number" type="number" v-bind:value="maxValue">
                                </label>
                            </div>
                            <div class="products_cats__left-column_slider">
                                <div class="products_cats__left-column_progress"></div>
                            </div>
                            <div class="products_cats__left-column_range-input">
                                <input @:input="range" class="range-min inp-range" min="0" max="10000" value="0" type="range">
                                <input @:input="range" class="range-max inp-range" min="0" max="10000" value="10000" type="range">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="products_cats__left-column_column-type">
                    <div class="products_cats__left-column_block" @click="hidden">
                        <img class="products_cats__left-column_block_svg" src="../assets/icons/Vector_up.svg" alt="">
                        <p>Тип</p>
                    </div>
                    <div class="products_cats__left-column_opening">
                        <div style="min-height: 0">
                            <div class="products_cats__left-column_checkboxes">
                                <input class="custom-checkbox" type="checkbox" id="Pedigree-feeds">
                                <label for="Pedigree-feeds"><p>Породные корма</p> 
                                    <span>20</span>
                                </label>
                            </div>
                            <div class="products_cats__left-column_checkboxes">
                                <input class="custom-checkbox" type="checkbox" id="Dry-food">
                                <label for="Dry-food"><p>Сухой корм</p>
                                    <span>435</span>
                                </label>
                            </div>
                            <div class="products_cats__left-column_checkboxes">
                                <input class="custom-checkbox" type="checkbox" id="Premium">
                                <label for="Premium"><p>Премиум</p>	
                                    <span>380</span>
                                </label>
                            </div>
                            <div class="products_cats__left-column_checkboxes">
                                <input class="custom-checkbox" type="checkbox" id="Holistic">
                                <label for="Holistic"><p>Холистик</p>	
                                    <span>194</span>
                                </label>
                            </div>
                            <div class="products_cats__left-column_checkboxes">
                                <input class="custom-checkbox" type="checkbox" id="Preserves">
                                <label for="Preserves"><p>Консервы</p>	
                                    <span>443</span>
                                </label>
                            </div>
                            <div class="products_cats__left-column_checkboxes">
                                <input class="custom-checkbox" type="checkbox" id="Wet-food">
                                <label for="Wet-food"><p>Влажный корм</p>	
                                    <span>294</span>
                                </label>
                            </div>
                            <div class="products_cats__left-column_checkboxes">
                                <input class="custom-checkbox" type="checkbox" id="Medicinal-food">
                                <label for="Medicinal-food"><p>Лечебный корм</p>	
                                    <span>120</span>
                                </label>
                            </div>
                            <div class="products_cats__left-column_checkboxes">
                                <input class="custom-checkbox" type="checkbox" id="Milk-substitute">
                                <label for="Milk-substitute"><p>Заменитель молока</p>
                                    <span>1</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="products_cats__left-column_column-age">
                    <div class="products_cats__left-column_block" @click="hidden">
                        <img class="products_cats__left-column_block_svg" src="../assets/icons/Vector_up.svg" alt="">
                        <p>Возраст</p>
                    </div>
                    <div class="products_cats__left-column_opening">
                        <div style="min-height: 0">
                            <div class="products_cats__left-column_checkboxes">
                                <input class="custom-checkbox" type="checkbox" id="Adults">
                                <label for="Adults"><p>Взрослые</p>
                                    <span>20</span>
                                </label>
                            </div>
                            <div class="products_cats__left-column_checkboxes">
                                <input class="custom-checkbox" type="checkbox" id="Kittens">
                                <label for="Kittens"><p>Котята</p>
                                    <span>435</span>
                                </label>
                            </div>
                            <div class="products_cats__left-column_checkboxes">
                                <input class="custom-checkbox" type="checkbox" id="elderly">
                                <label for="elderly"><p>Пожилые</p>
                                    <span>380</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="products_cats__left-column_column-appointment">
                    <div class="products_cats__left-column_block" @click="hidden">
                        <img class="products_cats__left-column_block_svg" src="../assets/icons/Vector_up.svg" alt="">
                        <p>Назначение</p>
                    </div>
                    <div class="products_cats__left-column_opening">
                        <div style="min-height: 0">
                            <div class="products_cats__left-column_checkboxes">
                                <input class="custom-checkbox" type="checkbox" id="Pregnant-women">
                                <label for="Pregnant-women"><p>Беременные и кормящие</p>
                                    <span>20</span>
                                </label>
                            </div>
                            <div class="products_cats__left-column_checkboxes">
                                <input class="custom-checkbox" type="checkbox" id="Hypoallergenic">
                                <label for="Hypoallergenic"><p>Гипоаллергенный</p>
                                    <span>435</span>
                                </label>
                            </div>
                            <div class="products_cats__left-column_checkboxes">
                                <input class="custom-checkbox" type="checkbox" id="wool">
                                <label for="wool"><p>Для шерсти и кожи</p>
                                    <span>380</span>
                                </label>
                            </div>
                            <div class="products_cats__left-column_checkboxes">
                                <input class="custom-checkbox" type="checkbox" id="Large-breeds">
                                <label for="Large-breeds"><p>Крупные породы</p>
                                    <span>194</span>
                                </label>
                            </div>
                            <div class="products_cats__left-column_checkboxes">
                                <input class="custom-checkbox" type="checkbox" id="Fatness">
                                <label for="Fatness"><p>Ожирение</p>
                                    <span>443</span>
                                </label>
                            </div>
                            <div class="products_cats__left-column_checkboxes">
                                <input class="custom-checkbox" type="checkbox" id="Sterilized">
                                <label for="Sterilized"><p>Стерилизованные</p>
                                    <span>294</span>
                                </label>
                            </div>
                            <div class="products_cats__left-column_checkboxes">
                                <input class="custom-checkbox" type="checkbox" id="joints">
                                <label for="joints"><p>Для суставов</p>
                                    <span>120</span>
                                </label>
                            </div>
                            <div class="products_cats__left-column_checkboxes">
                                <input class="custom-checkbox" type="checkbox" id="brushing-teeth">
                                <label for="brushing-teeth"><p>Для чистки зубов</p>
                                    <span>1</span>
                                </label>
                            </div>
                            <div class="products_cats__left-column_checkboxes">
                                <input class="custom-checkbox" type="checkbox" id="lumps-of-wool">
                                <label for="lumps-of-wool"><p>Против комочков шерсти</p>
                                    <span>20</span>
                                </label>
                            </div>
                            <div class="products_cats__left-column_checkboxes">
                                <input class="custom-checkbox" type="checkbox" id="sensitive-digestion">
                                <label for="sensitive-digestion">
                                        <p>С чувствительным пищеварением</p>
                                        <span>435</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div class="products_cats__right-column">
                <div class="card-wrapper" v-for="item of items" :key="item.id">
                    <card :promotion="item.promotion" :imgUrl="item.img" :desc="item.descr" :price="item.price" 
                        :priceDiscound="item.priceDiscound" :priceOld="item.priceOld" 
                        :weightValue1="item.weightValue1" :weightValue2="item.weightValue2" :weightValue3="item.weightValue3"
                        :weightValue="item.weightValue">
                    </card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import items from '@/components/seeders/items'
import Card from '@/components/UI/card'

export default {
    components: { Card  },

    data(){
        return{
            items: items,
            minValue: '',
            maxValue: ''
        }
    },
    methods:{
        range(){
            const rangee = document.querySelectorAll('.inp-range'),
            progress = document.querySelector('.products_cats__left-column_progress')

            let priceGap = 1000

            let minVal = parseInt(rangee[0].value)
            let maxVal = parseInt(rangee[1].value)

            if(maxVal - minVal < priceGap){

                if((minVal + priceGap) > maxVal){
                    rangee[0].value = maxVal - priceGap
                }

            }
            else{
                progress.style.left = (minVal / 10000) * 100 + '%'
                progress.style.right = 100 - (maxVal / 10000) * 100 + '%'
            }

            this.minValue = minVal
            this.maxValue = maxVal
        },
        hidden(e){
            // Если клик был по блоку, то блок открывается или закрывается 
            if(e.target.closest('.products_cats__left-column_block')){

                // переменная соседнего элемента
                const opening = e.target.closest('.products_cats__left-column_block').nextElementSibling
                // переменная дочерней svg
                const childSvg = e.target.closest('.products_cats__left-column_block').querySelector('.products_cats__left-column_block_svg')

                // Разворачивает SVG
                childSvg.classList.toggle('rotate_svg')
                // Открывает или закрывает блок
                opening.classList.toggle('hidden-column')
            }
        }
    }
}
</script>

<style>

</style>