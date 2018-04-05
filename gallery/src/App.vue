<template>
  <div>
    <app-Header></app-Header>

    <transition name="router-anim" enter-active-class="animated flipInY" leave-active-class="animated slideOutLeft" mode="out-in">
        <router-view />
    </transition>

  
 
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Flowers from './components/Flowers.vue'
import Home from './components/Home.vue'
import Dogs from './components/Dogs.vue'
import People from './components/People.vue'

export default {

  components: {
    'app-Header': Header,
    'app-Footer': Footer,
    'home': Home,
    'flowers': Flowers,
    'dogs': Dogs,
    'people': People,
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
