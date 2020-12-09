<template>
  <div>
    <!-- <loader
      object="#ff9633"
      color1="#ffffff"
      color2="#17fd3d"
      size="6"
      speed="3.6"
      bg="#343a40"
      objectbg="#999793"
      opacity="80"
      disableScrolling="false"
      name="spinning"
    ></loader> -->
    <div class="cart-item">
      <div class="cart-item__inner">
        <div class="cart-item__img"><img src="" alt="" /></div>
        <div class="cart-item__title">
          <h4></h4>
        </div>
        <div class="cart-item__info">
          <p>Some text</p>
        </div>
        <div class="cart-item__price">$39.00</div>
      </div>
      <div class="cart-item__all">
        <h4>Price with shipping $ 39.00</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  data() {
    return {
      itemCart: {},
      loading: true
    };
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.$props.item = this.itemCart;
      this.loading = false;
    }, 3000);
  },
  components: {}
};
</script>
<style lang="scss">
.cart-item {
  background-color: #fff;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
  border-radius: 6px;
  padding: 20px;
  width: 70%;
  margin: 16px auto;
}
.cart-item__img {
  width: 150px;
  height: 220px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.cart-item__title {
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  color: #666666;
}
.cart-item__inner {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  flex-direction: row;
  padding-bottom: 10px;
  margin-bottom: 20px;
  align-items: center;
}
.cart-item__all {
  h4 {
    text-align: right;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.43;
  }
}
</style>
