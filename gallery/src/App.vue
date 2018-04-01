<template>
  <div>
    <app-Header></app-Header>

    <transition name="router-anim" enter-active-class="animated bounceInRight" leave-active-class="animated rotateOutDownLeft" mode="out-in">
        <router-view />
    </transition>

   <app-Footer></app-Footer>
 
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Show from './components/Show.vue'
import Home from './components/Home.vue'
import Dogs from './components/Dogs.vue'

export default {

  components: {
    'app-Header': Header,
    'app-Footer': Footer,
    'home': Home,
    'app-show': Show,
    'dogs': Dogs
  },
  
  data () {
    return {
     
    }
  }
 
}
</script>

<style>

@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.4.0/animate.css";


</style>
