<template>
  <div class="wrapper">
    <Header/>
    <main class="main">
        <router-view/>
    </main>
    <Footer/>
  </div>
</template>

<script>

import Header from './components/Header'
import Footer from './components/Footer'


export default {
  components: { Header, Footer },
}

</script>

<style>

</style>
