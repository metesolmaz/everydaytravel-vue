<template>
    <div id="app" >
      <NavBar />
      <transition name="page" mode="out-in">
        <router-view></router-view>
      </transition>

      <Footer/>
    </div>
</template>

<style>
  .page-enter,page-leave{
    opacity:0;
  }
  .page-enter-active,page-leave-active{
     transition: all 0.3s;
  }
</style>

<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Footer
  }
}
</script>