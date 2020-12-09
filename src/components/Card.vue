<template>
  <div class="card">
    <!-- card__header -->
    <div class="card__header">
      <div v-if="item.sale" class="card__sale">SALE {{ item.sale }}%</div>
      <div class="card__icon-btns">
        <button class="card__icon-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="19"
            viewbox="0 0 20 19"
          >
            <path
              d="M10.1 15.55l-.1.1-.1-.1C5.14 11.24 2 8.39 2 5.5 2 3.5 3.5 2 5.5 2c1.54 0 3.038.99 3.569 2.36h1.871C11.46 2.99 12.96 2 14.5 2c2.002 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.898 10.05zM14.5 0c-1.74 0-3.41.81-4.5 2.09C8.912.81 7.24 0 5.5 0 2.42 0 0 2.42 0 5.5c0 3.78 3.4 6.86 8.55 11.54L10 18.35l1.451-1.32C16.6 12.36 20 9.28 20 5.5 20 2.42 17.58 0 14.5 0z"
            />
          </svg>
        </button>
      </div>
    </div>
    <!-- // card__header -->
    <div class="card__img">
      <img :src="item.image" alt="Asus ZenFone Go ZB452KG (black and white)" />
    </div>
    <!-- <router-link to="/item.page" >-->

    <h4 @click="activeItem(item)" class="card__title">{{ title }}</h4>
    <!-- </router-link
    > -->

    <div class="card__rating">
      <star-rating
        :star-size="25"
        :increment="0.5"
        :rating="item.rating"
      ></star-rating>
      /{{ item.totalvote }}
    </div>
    <div class="card__footer">
      <div
        class="card__price"
        :style="item.sale ? { textDecoration: 'line-through' } : null"
      >
        ${{ item.price }}
      </div>
      <div v-if="item.sale" class="card__price-discont">${{ discont }}</div>
      <button class="card__cart">
        <svg
          @click="selectedItem"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewbox="0 0 20 20"
        >
          <path
            d="M6 16c1.1 0 1.999.9 1.999 2s-.9 2-2 2C4.9 20 4.01 19.1 4.01 18S4.9 16 6 16zM-.001 0H3.27l.939 2H19c.549 0 .997.45.997 1 0 .17-.039.34-.12.48l-3.58 6.49c-.338.62-.997 1.03-1.749 1.03H7.1l-.9 1.63-.029.12c0 .14.11.25.25.25h11.578v2H6c-1.1 0-2-.9-2-2 0-.35.089-.68.249-.96L5.6 9.59 2 2H0zM16 16c1.1 0 1.998.9 1.998 2S17.1 20 16 20s-1.989-.9-1.989-2 .89-2 1.99-2z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
export default {
  name: "Card",
  data() {
    return {};
  },
  methods: {
    setRating(rating) {
      this.rating = rating;
    },
    activeItem(item) {
      this.$emit("activeitem", item);
    },
    selectedItem() {
      this.$store.dispatch("addCount");
    }
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  mounted() {},
  computed: {
    title() {
      return this.item.title + " " + this.item.model;
    },
    discont() {
      let discont = (this.item.price * this.item.sale) / 100;
      return this.item.price - discont;
    }
  },

  components: {
    StarRating
  }
};
</script>
<style lang="scss">
.card {
  padding: 10px 10px 15px;
}
.card__icon-btns {
  margin-left: auto;
}
.card__sale {
  color: red;
  line-height: 2;
}
.card__img {
  height: 250px;
  margin-bottom: 1rem;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}
.card__header {
  margin-bottom: 1rem;
}
.card__title {
  margin-bottom: 1rem;
  &:hover {
    color: blue;
  }
}
.card__rating-star {
  margin-bottom: 1rem;
}
.card__footer {
  display: flex;
  justify-content: space-around;
}
.card__rating {
  height: 30px;
}
.star-rating {
  width: 100%;
  height: 100%;
}
.card__price-discont {
  color: red;
  font-weight: 700;
}
</style>
