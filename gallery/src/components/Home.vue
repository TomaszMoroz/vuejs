<template>
   <div class="gallery">
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
     justify-content: center; 
    align-items: center; 
    
}





</style>
