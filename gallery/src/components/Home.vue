<template>
   <div class="gallery">
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                 <h1 class="display-4">Pictures gallery</h1>
                 <p class="lead">Press navbar buttons to navigate through available galleries. If you wish to magnify single picture just hover coursor over it.</p>
            </div>
        </div>

        <div id="cssLogo"></div>

        <input class="form-control" type="text" placeholder="Contact" readonly>
   </div>
</template>

<script>
export default {

     
  
        data () {
        return {

      
        
    }
  }
 
}
</script>

<style scoped>

.gallery{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

input{
    position: fixed;
    bottom: 15px;
}

.jumbotron{
    margin: 150px 0 0;
}

#cssLogo{
    margin: 100px 0 0 0;
    width: 0; 
    height: 0; 
    border-left: 90px solid transparent; 
    border-right: 90px solid transparent; 
    border-bottom: 180px solid rgb(158, 151, 151);
	-webkit-animation: textIn 2s ease-in 1s backwards;
	-moz-animation: textIn 2s ease-in 1s backwards;
	-ms-animation: textIn 2s ease-in 1s backwards;
	animation: textIn 2s ease-in 1s backwards;
}



  @-webkit-keyframes textIn{
	from{
		opacity: 0;
		-webkit-transform: scale(10);
        -moz-transform: scale(10);
	    -ms-transform: scale(10);
        transform: scale(10);

    
	}

	to{
		opacity: .9;
		-webkit-transform: scale(1);
        -moz-transform: scale(1);
	    -ms-transform: scale(1);
        transform: scale(1);

       
	}
}  


</style>
