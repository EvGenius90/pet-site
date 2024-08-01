<template>
    <div class="block-basket" v-for="item of items" :key="item.id">
        <div class="block-basket__content">
            
        </div>
    </div>
</template>

<script>
import items from '@/components/seeders/items'
import itemsAlias from '@/pages/_itemAlias'

export default {
    data(){
        return{
            items
        }
    },
    components:{
        itemsAlias
    },
}
</script>

<style>

</style>