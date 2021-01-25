<template>
  <splide>
    <splide-slide :options="options">
      <img src="../assets/img/carousel/slide-01.jpg" />
    </splide-slide>
    <splide-slide>
      <img src="../assets/img/carousel/slide-01.jpg" />
    </splide-slide>
    <splide-slide>
      <img src="../assets/img/carousel/slide-01.jpg" />
    </splide-slide>
  </splide>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
export default {
  name: "Slider",
  data() {
    return {
      options: {
        autoplay: true,
        pauseOnHover: true,
        autoWidth: true,
        fixedHeight: "400px",
        arrows: true
      }
    };
  },
  components: {
    Splide,
    SplideSlide
  },
  props: {},
  methods: {}
};
</script>
<style lang="scss">
.splide {
  max-width: 100%;
}
</style>
