<template>
    <footer>

        <h2>{{ msg }}</h2>
    
     </footer>
</template>

<script>
export default {
  
  data () {
    return {
        msg: 'Kontakt@'
    }
  }
 
}
</script>

<style scoped>

footer{
    background: rgb(12, 37, 46);
    padding: 15px
}

h2{
    color: rgb(163, 163, 228);
    text-align: right;
    margin: auto 20px 0;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

</style>
