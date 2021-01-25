<template>
  <div class="cart">
    <div class="container">
      <div v-if="!getCart.length" class="empty-cart">
        <img :src="image" alt="" />
        <div class="cart-button">
          <router-link to="/" class="deep-orange waves-effect btn"
            >Go to the shopping</router-link
          >
        </div>
      </div>
      <div v-else>
        <CartItem
          @delete-from-cart="deleteFromCart(index)"
          v-for="(item, index) in getCart"
          :key="item.id"
          :item="item"
          @increment-qtn="incrementQtnInCart(index)"
          @decrement-qtn="decrementQtnInCart(index)"
        />
        <div class="total-price">
          Total price: <span> {{ total.toFixed(2) }} $</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartItem from "../components/CartItem.vue";
import image from "../assets/img/empty-cart.png";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Cart",
  data() {
    return {
      image: image
    };
  },

  computed: {
    ...mapGetters(["getCart"]),

    total() {
      let result = [];

      for (let itm of this.getCart) {
        let discont = 0;
        if (itm.sale) {
          let diff = (itm.price * itm.sale) / 100;
          discont = itm.price - diff;
          result.push(discont * itm.quantity);
        } else {
          result.push(itm.price * itm.quantity);
        }
      }
      result = result.reduce(function(sum, el) {
        return sum + el;
      });

      return result ? result : 0;
    }
  },
  methods: {
    ...mapActions(["deleteItemFromCart", "incrementQtn", "decrementQtn"]),
    incrementQtnInCart(index) {
      this.incrementQtn(index);
    },
    decrementQtnInCart(index) {
      this.decrementQtn(index);
    },
    deleteFromCart(index) {
      this.deleteItemFromCart(index);
    }
  },
  components: {
    CartItem
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.cart-button {
  margin: 20px 0;
  text-align: center;
}
.total-price {
  background-color: #fff;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
  border-radius: 6px;
  padding: 20px;
  width: 70%;
  margin: 16px auto;
  text-align: right;
  span {
    font-weight: 700;
  }
}
</style>
