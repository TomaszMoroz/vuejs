<template>

    <div>
           <div class="flex">
                <div class="gall" v-for="(hit, index) in hits" :id="index"  >
                    <img :src="hit.previewURL"   />
           
                </div>
            </div>
        
    
  </div>
    
     
</template>

<script>



export default {


     data () {
        return {
            hits: [],
      
       }

  },
  methods: {
     
  
  },
  created(){
      const text = 'flower';
      this.$http.get('https://pixabay.com/api/?key=8532214-1e1d43f1d37e37643061b9fae&q='+text+ '&image_type=photo').then(
          (data)=>{

              console.log(data)
              
              this.hits = data.body.hits.slice(0, 20);
              
             
          }
        )
  },


 
}
</script>

<style scoped>


.flex{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 900px;
    margin: 155px auto 100px;
}

.gall{
   
   width: 200px;
   height: 200px;
   margin: 5px;
   transition: all .2s ease-in-out;
    
    
}

.gall img{
    width: 200px; 
    height: 200px;
    border-radius: 10px;
}

.gall:hover{
    transform: scale(1.4);
}



</style>