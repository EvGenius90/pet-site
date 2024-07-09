<template>
    <div class="container">
        <div class="articles__content">
            <h1>Статьи</h1>
            <compArticles/>
        </div>
    </div>
</template>

<script>
import compArticles from '../components/compArticles.vue'

export default {
    components: { compArticles },
    data(){
        return{
            
        }
    }
}
</script>

<style>

</style>