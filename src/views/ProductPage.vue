<template>
  <div class="product-page">
    <div class="container">
      <div class="product-page__inner">
        <div class="product-page__slider"><SliderProduct /></div>
        <div class="product-page__info">Coming by</div>
      </div>
    </div>
  </div>
</template>
<script>
import SliderProduct from "../components/SliderProduct.vue";
import { mapGetters } from "vuex";
import firebase from "firebase";
export default {
  name: "ProductPage",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getItem"])
  },
  mounted() {},
  methods: {},
  components: {
    SliderProduct
  }
};
</script>
<style lang="scss">
.product-page__inner {
  display: flex;
  justify-content: space-between;
}
.product-page__slider {
  max-width: 50%;
  img {
    max-width: 530px;
    object-fit: cover;
  }
}
.splide {
  margin-bottom: 0.5rem;
}
#overlay-spinner {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 10%;
  left: -24%;
  z-index: 1000;
}
</style>
