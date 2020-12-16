<template>
  <div class="tabs">
    <div class="filter-item">
      <ul ref="categoryFilter" class="collapsible">
        <li>
          <div @click="rotateIcon" class="collapsible-header">
            Category
            <i ref="iconArrow" class="material-icons">arrow_drop_up</i>
          </div>
          <div class="collapsible-body">
            <form ref="form">
              <p v-for="(item, idx) in filterCategories" :key="idx">
                <label>
                  <input type="checkbox" v-model="item.checked" />
                  <span>{{ item.title }}</span>
                </label>
              </p>
              <button
                @click.prevent="applyFilter"
                class="btn waves-effect applyFilter"
                type="submit"
              >
                Apply Filter
              </button>
              <button
                v-if="activeFilter != 0"
                class="btn waves-effect clearFilter"
                type="reset"
                @click="clearfilter"
              >
                Clear ({{ activeFilter }})
              </button>
            </form>
          </div>
        </li>
      </ul>
    </div>

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
    <div class="filter-colors">
      <ul ref="colorFilter" class="collapsible">
        <li>
          <div @click="rotateIcon2" class="collapsible-header">
            Color
            <i ref="iconArrow2" class="material-icons">arrow_drop_up</i>
          </div>
          <div class="collapsible-body">
            <form ref="form">
              <p v-for="(item, idx) in colors" :key="idx">
                <label>
                  <input type="checkbox" v-model="item.checked" />
                  <span>{{ item.title }}</span>
                </label>
              </p>
              <button
                @click.prevent="applyFilter"
                class="btn waves-effect applyFilter"
                type="submit"
              >
                Apply Filter
              </button>
              <button
                v-if="activeFilter != 0"
                class="btn waves-effect clearFilter"
                type="reset"
                @click="activeFilterColor"
              >
                Clear ({{ activeFilterColor }})
              </button>
            </form>
          </div>
        </li>
      </ul>
    </div>
    <div class="all-items"><span>{{}}</span></div>
  </div>
</template>
<script>
import VueSlider from "vue-slider-component";
import { mapGetters } from "vuex";

export default {
  name: "filter",
  data() {
    return {
      rangePrice: [0, 800],
      formatter2: v => `$${("" + v).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
      filterCategories: [
        { title: "Smartphones", checked: false },
        { title: "Tablets", checked: false },
        { title: "Acsesoria GSM", checked: false },
        { title: "Laptop", checked: true },
        { title: "Desktop computers", checked: false },
        { title: "Printer and scanner", checked: false }
      ],
      colors: [
        { title: "black", checked: false },
        { title: "white", checked: false },
        { title: "green", checked: false },
        { title: "red", checked: false }
      ]
    };
  },
  mounted() {
    M.Collapsible.init(this.$refs.categoryFilter, {
      alignment: "center"
    });
    M.Collapsible.init(this.$refs.colorFilter, {
      alignment: "center"
    });
    console.log(this.getInfo);
  },
  methods: {
    applyFilter() {
      let filt = this.filterCategories
        .filter(itm => itm.checked)
        .map(name => name.title);
      console.log(filt);
    },
    clearfilter() {
      for (let i = 0; i < this.filterCategories.length; i++) {
        if (this.filterCategories[i].checked) {
          this.filterCategories[i].checked = false;
        }
      }
    },
    clearfilterColor() {
      for (let i = 0; i < this.colors.length; i++) {
        if (this.colors[i].checked) {
          this.colors[i].checked = false;
        }
      }
    },
    rotateIcon() {
      if (this.$refs.iconArrow.style.rotate != "180deg") {
        this.$refs.iconArrow.style = "rotate: 180deg";
      } else {
        this.$refs.iconArrow.style = "rotate: 0deg";
      }
    },
    rotateIcon2() {
      if (this.$refs.iconArrow2.style.rotate != "180deg") {
        this.$refs.iconArrow2.style = "rotate: 180deg";
      } else {
        this.$refs.iconArrow2.style = "rotate: 0deg";
      }
    }
  },
  computed: {
    ...mapGetters(["getInfo"]),
    activeFilter() {
      return this.filterCategories.filter(itm => itm.checked).length;
    },
    activeFilterColor() {
      return this.colors.filter(itm => itm.checked).length;
    }
  },
  components: {
    VueSlider
  }
};
</script>
<style lang="scss" scoped>
.tabs {
  height: auto;
  min-height: 80px;
  padding: 0 10px;
}
.filter-range {
  margin: 30px;
  width: 200px;
  text-align: center;
  position: relative;
}

.filter-item {
  max-width: 200px;
  width: 100%;
  min-height: 40px;
}
.collapsible-header {
  height: 40px;
  line-height: 1;
  display: flex;
  justify-content: space-between;
  i {
    margin-right: 0;
    line-height: 0.5;
  }
}
.collapsible-body {
  padding: 1rem 0.5rem 0;
}

.collapsible {
  box-shadow: none;
  margin-top: 20px;
}
.applyFilter,
.clearFilter {
  width: 100%;
  display: block;
  margin: 0.5rem 0;
  background-color: #bdbdbd;
}
.filter-colors {
  min-width: 160px;
}
</style>
