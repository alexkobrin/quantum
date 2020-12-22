<template>
  <h2 class="center" @click="fetchImage">Try me</h2>
  <splide :options="primaryOptions" ref="primary">
    <splide-slide v-for="slide in slides" :key="slide.src">
      <img :src="slide.src" alt="slide.alt" />
    </splide-slide>
  </splide>

  <splide :options="secondaryOptions" ref="secondary">
    <splide-slide v-for="slide in slides" :key="slide.src">
      <img :src="slide.src" alt="slide.alt" />
    </splide-slide>
  </splide>
</template>
<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { createSlides } from "../utils/slides";

import firebase from "firebase";

export default {
  name: "Slider",
  data() {
    return {
      primaryOptions: {
        type: "fade",
        rewind: true,
        perPage: 1,
        focus: "center",
        margin: {
          bottom: "2rem"
        },
        pagination: false,
        autoplay: false,
        pauseOnHover: true,
        autoWidth: true
      },
      secondaryOptions: {
        type: "slide",
        rewind: true,
        gap: "1rem",
        pagination: false,
        fixedWidth: 110,
        fixedHeight: 70,
        cover: true,
        focus: "center",
        isNavigation: true,
        updateOnMove: true
      },
      slides: createSlides(),
      count: 0
    };
  },
  mounted() {
    console.log(createSlides());
    this.$refs.primary.sync(this.$refs.secondary.splide);
  },
  methods: {
    // async fetchImage() {
    //   let storageRef = firebase.storage().ref();
    //   let listRef = storageRef.child("image/smartphone/Asus ZenFone ZS671KS/black");
    //   listRef
    //     .listAll()
    //     .then(function (res) {
    //       console.log(res.prefixes);
    //       //   res.prefixes.forEach(function (folderRef) {
    //       //     // All the prefixes under listRef.
    //       //     console.log(folderRef);
    //       //     // You may call listAll() recursively on them.
    //       //   });
    //       res.items.forEach(function (itemRef) {
    //         // All the items under listRef.
    //         console.log(
    //           `${itemRef._delegate._location.bucket}/${itemRef._delegate._location.path} `
    //         );
    //         console.log(itemRef._delegate._location.path);
    //       });
    //     })
    //     .catch(function (error) {
    //       // Uh-oh, an error occurred!
    //     });
    //   //   try {
    //   //     const info = (
    //   //       await firebase.storage().ref("/image/tablets/YOTOPT X109/black/").once("value")
    //   //     ).val();
    //   //     console.log(info);
    //   //     return info;
    //   //   } catch (e) {
    //   //     console.log(e);
    //   //     throw e;
    //   //   }
    // },
  },
  components: {
    Splide,
    SplideSlide
  },
  props: {}
};
</script>
<style lang="scss">
.splide {
  max-width: 100%;
}
</style>
