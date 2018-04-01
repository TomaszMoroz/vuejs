<template>
    <header>

        <h1>Galerie <span class="badge badge-secondary"> {{ title }}</span></h1>
        <hr>
        <router-link to='/'>Home</router-link> <router-link to='/bteriers'>Dogs</router-link> <router-link to='/test'>Test</router-link> 
    
     </header>
</template>

<script>
export default {
  
  data () {
    return {
        title: 'ZDJEC'
    }
  }
 
}
</script>

<style scoped>

header{
    background: lightblue;
    padding: 10px
}

h1{
    color: darkblue;
    text-align: center;
}

</style>
