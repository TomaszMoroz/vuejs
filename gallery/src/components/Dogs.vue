<template>

   <div>
       
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

div{
    margin: 150px 0 0 ;
}

h2{
    font-size: 30px;
    color: darkblue;
}



</style>
