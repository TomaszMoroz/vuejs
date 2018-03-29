<template>
    <div id="showsth">
        

        

       <div id="flex">
            <div  class="gal" > 
          <img :src="hit.previewURL" width="700px" height="700px" />
         </div>
       </div>
     
    </div>
 
</template>

<script>
export default {


    
  
  data () {
    return {
       hits: [],
       showGrid: true
    }
  },
  methods: {

  },
  created(){
      this.$http.get('https://pixabay.com/api/?key=8532214-1e1d43f1d37e37643061b9fae&q=bullterrier&image_type=photo').then(
          (data)=>{
              
              this.hits = data.body.hits.slice(0, 10);
              console.log(this.hits)
          
          }
          )
  }
 
}
</script>

<style scoped>

#showsth{
    max-width: 1000px;
  
    margin: 0 auto;
}

#flex{
      display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.gal{
   
   
    margin: 5px;
    
}
    

</style>