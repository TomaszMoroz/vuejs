<template>
   <div class="gallery">
      <!-- <div class="container home">
           
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
           
      </div> -->
    <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Fluid jumbotron</h1>
    <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
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
    display: flex;
     justify-content: center; /* center items horizontally, in this case */
    align-items: center; 
    
}

/* .jumbotron{
    margin: 10% auto;
} */

.home{
    width: 80%;
    height: 80%;
    background: lightblue;
    margin: 150px auto 0;
}

.circle{
    background-color: lightcyan;
    border-radius: 50%;
    height: 250px;
}

</style>
