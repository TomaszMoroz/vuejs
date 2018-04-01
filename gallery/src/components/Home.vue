<template>
   <div class="gallery">
      <div class="container home">
           
           <div class="row">
               <div class="col-sm-12 col-md-3 offset-md-2 circle"></div>
               <div class="col-sm-12 col-md-3 offset-md-2 circle"></div>
           </div>
             <div class="row">
               <div class="col-sm-12 col-md-3 offset-md-2 circle"></div>
               <div class="col-sm-12 col-md-3 offset-md-2 circle"></div>
           </div>
           <div class="row">
               <div class="col-sm-12 col-md-3 offset-md-2 circle"></div>
               <div class="col-sm-12 col-md-3 offset-md-2 circle"></div>
           </div>
           
      </div>
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

.gallery{
    height: 100 vh;
}

.home{
    width: 80%;
    height: 80%;
    background: lightblue;
    margin: auto;
}

.circle{
    background-color: lightcyan;
    border-radius: 50%;
    height: 250px;
}

</style>
