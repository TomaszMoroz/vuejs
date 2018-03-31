<template>
  <div>
   <app-Header></app-Header>
  <transition name="router-anim" enter-active-class="animated fadeInDown">
     <router-view />
  </transition>

   <!-- </router-view> -->
   <app-Footer></app-Footer>
 
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Show from './components/Show.vue'
import SinglePic from './components/SinglePic.vue'
import Dogs from './components/Dogs.vue'

export default {

  components: {
    'app-Header': Header,
    'app-Footer': Footer,
    'singlePic': SinglePic,
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

@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.4.0/animate.css"



</style>
