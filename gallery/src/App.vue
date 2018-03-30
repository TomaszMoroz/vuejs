<template>
  <div>
   <app-Header></app-Header>
   <router-view></router-view>
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

<style scoped>

</style>
