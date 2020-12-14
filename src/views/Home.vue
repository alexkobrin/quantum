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
            <!-- tabs plate -->
            <div class="tabs">
              <button class="tabs__btn tabs__btn--active">Most Popular</button>
              <button class="tabs__btn">My communities</button>
              <div class="filters">
                <div class="filter-range">
                  <vue-slider
                    v-model="rangePrice"
                    :min="0"
                    :max="2000"
                    :interval="0.5"
                    :tooltip="'always'"
                    :tooltip-formatter="formatter2"
                  >
                  </vue-slider>
                </div>
              </div>
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
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";

export default {
  data() {
    return {
      dataItem: [],
      loading: true,
      rangePrice: [0, 800],
      formatter2: v => `$${("" + v).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
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
    },
    async selectedSection(itemTitle) {
      this.loading = true;
      this.dataItem = await this.$store.dispatch("fetchInfo", itemTitle);
      this.loading = false;
    }
  },
  watch: {},

  components: {
    Slider,
    Aside,
    Card,
    VueSlider
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
.tabs {
  height: 80px;
}
.filter-range {
  margin: 30px;
  width: 220px;
  text-align: center;
  position: relative;
}
</style>
