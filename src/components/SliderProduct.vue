<template>
  <h2 class="center" @click="fetchSliderImages">Try me</h2>
  <div v-for="slide in slides" :key="slide.src">{{ slide.src }}</div>

  f

  <splide :options="primaryOptions" ref="primary">
    <splide-slide v-for="slide in slides" :key="slide.src">
      <img :src="slide.src" alt="slide.alt" />
    </splide-slide>
  </splide>

  <splide :options="secondaryOptions" ref="secondary">
    <splide-slide v-for="(slide, idx) in slides" :key="idx">
      <img :src="slide.src" alt=" " />
    </splide-slide>
  </splide>
</template>
<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { createSlides } from "../utils/slides";
import { mapGetters } from "vuex";
import firebase from "firebase";

export default {
  name: "Slider",
  computed: {
    ...mapGetters(["getSliderImage", "getItem"])
  },
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

  methods: {
    fetchSliderImages() {
      let storageRef = firebase.storage().ref();
      let listRef = storageRef.child(
        `image/${this.getItem.part}/${this.getItem.id}/${this.getItem.color[0]}`
      );
      let array = [];
      listRef.listAll().then(async function(res) {
        for (let i = 0; i < res.items.length; i++) {
          let path = await res.items[i].getDownloadURL();
          array.push({
            src: path
          });
        }
      });
      this.$store.dispatch("addedSliderImage", array);
    }
  },
  mounted() {
    this.fetchSliderImages();

    this.$refs.primary.sync(this.$refs.secondary.splide);
  },

  components: {
    Splide,
    SplideSlide
  }
};
</script>
<style lang="scss">
.splide {
  max-width: 100%;
}
</style>
