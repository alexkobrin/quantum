<template>
   <div ref="carousel" class="carousel carousel-slider">
    <a class="carousel-item"  v-for="image in images " :key="image"  href="#one!">
        <img src="https://lorempixel.com/800/400/food/1"></a>
    
  
  </div>
</template>

<script>
import {st} from "../firebase"
export default {
name: 'Carousel',
 data() {
     return {
         images: []
     }
 },
 async mounted() {
    //  M.Carousel.init(this.$refs.carousel, {
    //    fullWidth: true,
    //    indicators: true})

      let listRef =   st.ref().child('image/smartphone/smarthone_1') 
     listRef.listAll()
  .then((res) => {
     res.prefixes.forEach((folderRef) => {
    });
     
  }).catch((error) => {
    // Uh-oh, an error occurred!
  });
 
 function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}

 

 

}


}
</script>

<style>

</style>