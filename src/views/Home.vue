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
          <Aside @selected-section="selectedSection" />
          <div class="main__column-right">
            <Filters @filter-category="filterCategory" />

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
                v-for="item in dataItem"
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

import Filters from "../components/Filters";
import "vue-slider-component/theme/default.css";

export default {
  data() {
    return {
      dataItem: [],
      loading: false
    };
  },

  async mounted() {
    // this.cellPhones = await this.$store.dispatch("fetchInfo");
    // this.loading = false;
  },

  methods: {
    currentItem(item) {
      const currentItem = [item];
      const newItem = currentItem ? { ...currentItem, item } : null;
    },
    async selectedSection(itemTitle) {
      this.loading = true;
      this.dataItem = await this.$store.dispatch("fetchInfo", itemTitle);
      this.loading = false;
    },
    async filterCategory(arrItem) {
      this.loading = true;
      for (let i = 0; i < arrItem.length; i++) {
        let result = await this.$store.dispatch("fetchInfo", arrItem[i]);
        if (result == null) {
          this.loading = false;
        } else {
          result.map(item => this.dataItem.push(item));
          this.loading = false;
        }
      }
    }
  },
  watch: {},

  components: {
    Slider,
    Aside,
    Card,

    Filters
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
