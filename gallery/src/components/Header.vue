<template>
    <header>

        <h2>Choose your <span class="badge badge-secondary"> {{ title }}</span></h2>
       
            <section>
                <router-link to='/' ><button class="btn btn-dark">Home</button></router-link>
                <router-link to='/flowers' ><button class="btn btn-outline-dark">Flowers</button></router-link> 
                <router-link to='/dogs' ><button class="btn btn-outline-dark">Dogs</button></router-link>
                <router-link to='/people' ><button class="btn btn-outline-dark">People</button></router-link>
            </section> 
    
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

section{
    margin: 5px 0;
}

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
