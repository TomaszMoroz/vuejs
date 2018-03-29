<template>
    <header>

        <h1>{{ title }}</h1>
    
     </header>
</template>

<script>
export default {
  
  data () {
    return {
        title: 'Nowy tytul'
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
