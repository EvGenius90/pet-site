<template>
    <div class="products_cats">
        <div class="container">
            <h1>Товары для кошек</h1>
            <div class="products_cats__left-column">
                <p>Цена</p>
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
                    <input @:input="range" class="range-max inp-range" min="0" max="10000" value="8000" type="range">
                </div>
                
            </div>
            <div class="products_cats__right-column">
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
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
        }
    }
}
</script>

<style>

</style>