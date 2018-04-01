<template>

   <div class="gallery">
       <h2>Routing dziala</h2>
       <button type="button" class="btn btn-secondary" @click="goHome">Home</button>
   </div>
   
</template>

<script>
export default {

      methods: {
            goHome(){

                this.$router.push('/');

            }
        },
  
        data () {
        return {

      
        
    }
  }
 
}
</script>

<style scoped>

h2{
    font-size: 30px;
    color: darkblue;
}



</style>
