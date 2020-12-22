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
export default {
  name: "ProductPage",
  computed: {
    ...mapGetters(["getItem"])
  },
  mounted() {},
  methods: {
    test() {
      console.log("Hell");
    }
  },
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
</style>
