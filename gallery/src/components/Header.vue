<template>
    <header>

        <h2>Choose your <span class="badge badge-secondary"> {{ title }}</span></h2>
       
            <router-link to='/' ><button class="btn btn-outline-dark">Home</button></router-link>
            <router-link to='/bteriers' ><button class="btn btn-outline-dark">Flowers</button></router-link> 
            <router-link to='/test' ><button class="btn btn-outline-dark">Dogs</button></router-link> 
    
     </header>
</template>

<script>
export default {
    
  
  data () {
    return {
        title: 'GALLERY'
    }
  },

 
}
</script>

<style scoped>

header{
    background: rgb(188, 191, 192);
    padding: 5px;
    float: left;
}

h2{
    color: rgb(113, 113, 122);
    text-align: center;
    display: inline-block;
    float: right;
}



</style>
