<template>
  <div class="cart">
    <div class="container">
      <div class="empty-cart">
        <img :src="image" alt="" />
        <div class="cart-button">
          <router-link to="/" class="deep-orange waves-effect btn"
            >Go to the shopping</router-link
          >
        </div>
      </div>
      <CartItem />
    </div>
  </div>
</template>

<script>
import CartItem from "../components/CartItem.vue";
import image from "../assets/img/empty-cart.png";
export default {
  name: "Cart",
  data() {
    return {
      image: image
    };
  },
  components: {
    CartItem
  }
};
</script>

<style lang="scss" scoped>
.cart-button {
  margin: 20px 0;
  text-align: center;
}
</style>
