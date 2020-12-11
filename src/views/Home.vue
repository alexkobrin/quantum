<template>
  <div class="home">
    <section class="banner-section">
      <div class="container">
        <div class="banner-section__inner">
          <Slider />
        </div>
      </div>
    </section>
    <section class="promo-section"></section>

    <main class="main-content">
      <div class="container">
        <div class="main__row">
          <Aside />
          <div class="main__column-right">
            <!-- tabs plate -->
            <div class="tabs">
              <button class="tabs__btn tabs__btn--active">Most Popular</button>
              <button class="tabs__btn">My communities</button>
            </div>

            <!-- cards-wrapper -->
            <div class="cards-wrapper">
              <loader
                v-if="loading"
                object="#ff9633"
                color1="#ffffff"
                color2="#17fd3d"
                size="5"
                speed="2"
                bg="#343a40"
                objectbg="#999793"
                opacity="80"
                name="circular"
              ></loader>
              <!-- card -->
              <Card
                v-else
                v-for="item in cellPhones"
                @activeitem="currentItem"
                :key="item.id"
                :item="item"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Slider from "../components/Slider";
import Aside from "../components/Aside";
import Card from "../components/Card";

export default {
  data() {
    return {
      cellPhones: [],
      loading: true
    };
  },

  async mounted() {
    this.cellPhones = await this.$store.dispatch("fetchInfo");
    this.loading = false;
  },
  methods: {
    currentItem(item) {
      const currentItem = [item];
      const newItem = currentItem ? { ...currentItem, item } : null;
      console.log(newItem);
    }
  },

  components: {
    Slider,
    Aside,
    Card
  }
};
</script>
<style lang="scss" scoped>
.cards-wrapper {
  justify-content: space-between;

  .card {
    min-width: 29%;
  }
}
</style>
