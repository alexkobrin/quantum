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
            <Filters
              @filter-category="filterCategory"
              @apply-price-filter="applyPriceFilter"
              @color-filter="coloredFilters"
            />

            <div class="cards-wrapper">
             
              <!-- card -->
              <Card
                v-for="item in filteredItem"
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
import {fb} from "../firebase"
export default {
  data() {
    return {
      dataItem: [],
      filteredItem: [],
      loading: false
    };
  },

  async mounted() {},

  methods: {
    async selectedSection(itemTitle) {
      this.loading = true;
      this.dataItem = await this.$store.dispatch("fetchInfo", itemTitle);

      this.filteredItem = this.dataItem;
      this.loading = false;
    },
    async filterCategory(arrItem) {
      this.loading = true;

      if (arrItem.length === 0) {
        this.loading = false;
        this.dataItem = [];
      }
      let filterArray = [];
      for (let i = 0; i < arrItem.length; i++) {
        let result = await this.$store.dispatch("fetchInfo", arrItem[i]);
        result.map(item => {
          filterArray.push(item);
        });
        this.dataItem = [];
        this.dataItem = filterArray;
        this.loading = false;
      }
      this.filteredItem = this.dataItem;
    },
    applyPriceFilter(arr) {
      this.loading = true;
      this.filteredItem = [...this.dataItem];
      let lowerPrice = arr[0];
      let highPrice = arr[1];
      let priceRange = this.filteredItem.filter(item => {
        if (item.sale != null) {
          let discount = (item.price * item.sale) / 100;

          return (
            item.price - discount >= lowerPrice &&
            item.price - discount <= highPrice
          );
        } else {
          return item.price >= lowerPrice && item.price <= highPrice;
        }
      });
      this.filteredItem = priceRange;
      this.loading = false;
    },
    coloredFilters(arr) {
      this.loading = true;
      if (arr.length === 0) {
        this.loading = false;
      }
      let filteredColorsItem = [];
      for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        filteredColorsItem = this.dataItem.filter(item =>
          item.color.includes(arr[i])
        );
      }
      this.filteredItem = filteredColorsItem;
      console.log(filteredColorsItem);
      this.loading = false;
    }
  },
  watch: {},
  created() {
    fb.auth().onAuthStateChanged(function(user) {
  if (user) {
   console.log(user);
  } else {
   console.log('No user sign');
  }
});


  },

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
