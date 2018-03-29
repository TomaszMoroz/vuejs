<template>
    <header>

        <h1>Galerie <span class="badge badge-secondary">{{ title }}</span></h1>
    
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
