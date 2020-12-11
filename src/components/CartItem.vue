<template>
  <div>
    <div class="cart-item">
      <div class="cart-item__inner">
        <div class="cart-item__img"><img :src="item.image" alt="" /></div>
        <div class="cart-item__title">
          <h4>{{ item.title }}</h4>
          <p class="model">Model: {{ item.model }}</p>
        </div>

        <button
          @click="decrement"
          :class="{ disabledBtn: item.quantity == 1 }"
          class="cart-item__btn waves-effect waves-orange"
        >
          -
        </button>

        <div class="cart-item__qtn">
          <span>Quantity: {{ item.quantity }} </span>
        </div>

        <button
          @click="increment"
          class="cart-item__btn waves-effect waves-orange"
        >
          +
        </button>

        <div class="cart-item__price">{{ item.price }}$</div>
        <button
          @click="deleteFromCart"
          class="delete-btn waves-effect waves-orange"
        >
          Delete
        </button>
      </div>
      <div class="cart-item__all">
        <h4>
          Price with <span>sale {{ item.sale }}% </span> {{ discont }}$
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  data() {
    return {};
  },

  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    increment() {
      this.$emit("increment-qtn");
    },
    decrement() {
      this.$emit("decrement-qtn");
    },
    deleteFromCart() {
      this.$emit("delete-from-cart");
    }
  },
  mounted() {},
  computed: {
    discont() {
      let discont = (this.item.price * this.item.sale) / 100;
      return Math.round(
        (this.item.price - discont) * this.item.quantity
      ).toFixed(2);
    }
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
  width: 200px;
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
  width: 200px;
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
.disabledBtn {
  cursor: not-allowed !important;
  background-color: #fff !important;
}

.model {
  margin-top: 1rem;
}
.cart-item__btn {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #bdbdbd;
  position: relative;
  cursor: pointer;
  border: none;
  color: #fff;
}
.delete-btn {
  width: 60px;
  height: 40px;
  border-radius: 10%;
  border: none;
  margin-left: 2rem;
  background-color: #bdbdbd;
  color: #fff;
}
.cart-item__all {
  h4 {
    text-align: right;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.43;
    margin-bottom: 1rem;
    span {
      color: red;

      text-transform: uppercase;
    }
  }
}
</style>
