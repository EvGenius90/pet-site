<template>
    <div class="tabs">
        <div class="tabs__tab" v-for="item of items" :key="item">
            {{ item.name }}
        </div>
    </div>
    <slot></slot>
</template>

<script>
export default {
    data(){
        return{
            items:[
            {
                name: 'Кошки',
            },
            {
                name: 'Собаки',
            },
            {
                name: 'Ветаптека',
            },
            {
                name: 'Корм',
            }
        ]
        }
    }
}
</script>

<style>

</style>