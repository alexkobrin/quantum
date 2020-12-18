<template>
  <div class="tabs">
    <div class="tabs-filter__inner">
      <div class="tabs-filter">
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
              <div @click="rotateIcon" class="collapsible-header">
                Color
                <i ref="iconArrow" class="material-icons">arrow_drop_up</i>
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
                    @click.prevent="applyColorFilter"
                    class="btn waves-effect applyFilter"
                    type="submit"
                  >
                    Apply Filter
                  </button>
                  <button
                    v-if="activeFilterColor != 0"
                    class="btn waves-effect clearFilter"
                    type="reset"
                    @click="clearfilterColor"
                  >
                    Clear ({{ activeFilterColor }})
                  </button>
                </form>
              </div>
            </li>
          </ul>
        </div>
        <div @click="moreFilters" class="more-filters">
          <span>More filters</span>
          <i ref="iconArrow4" class="material-icons">arrow_drop_up</i>
        </div>
      </div>
      <div ref="filtersMore" class="tabs-filter__more">
        <div class="filter-item sort">
          <ul ref="sortByFilter" class="collapsible">
            <li>
              <div @click="rotateIcon" class="collapsible-header">
                Sort By
                <i ref="iconArrow" class="material-icons">arrow_drop_up</i>
              </div>
              <div class="collapsible-body">
                <p v-for="(item, idx) in sortBy" :key="idx">
                  <label>
                    <span>{{ item.title }}</span>
                  </label>
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div class="filter-materials">
          <ul ref="materialFilter" class="collapsible">
            <li>
              <div @click="rotateIcon" class="collapsible-header">
                Material
                <i ref="iconArrow" class="material-icons">arrow_drop_up</i>
              </div>
              <div class="collapsible-body">
                <form ref="form">
                  <p v-for="(item, idx) in materials" :key="idx">
                    <label>
                      <input type="checkbox" v-model="item.checked" />
                      <span>{{ item.title }}</span>
                    </label>
                  </p>
                  <button
                    @click.prevent="applyFilter3"
                    class="btn waves-effect applyFilter"
                    type="submit"
                  >
                    Apply Filter
                  </button>
                  <button
                    v-if="activeMaterialColor != 0"
                    class="btn waves-effect clearFilter"
                    type="reset"
                    @click="clearFilterMaterial"
                  >
                    Clear ({{ activeMaterialColor }})
                  </button>
                </form>
              </div>
            </li>
          </ul>
        </div>
        <div class="filter-extra">
          <ul ref="materialFilter" class="collapsible">
            <li>
              <div class="collapsible-header">
                Some Extra Filters
                <i class="material-icons">arrow_drop_up</i>
              </div>
              <div class="collapsible-body"></div>
            </li>
          </ul>
        </div>
      </div>
      <div class="all-items"><span>{{}}</span></div>
    </div>
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
        { title: "Laptop", checked: false },
        { title: "Desktop computers", checked: false },
        { title: "Printer and scanner", checked: false }
      ],
      colors: [
        { title: "black", checked: false },
        { title: "white", checked: false },
        { title: "green", checked: false },
        { title: "red", checked: false }
      ],
      sortBy: [
        { title: "Item A-Z" },
        { title: "Item Z-A" },
        { title: "Price - lower to high " },
        { title: "Price - high to lower" }
      ],
      materials: [
        { title: "Metal", checked: false },
        { title: "Plastic", checked: false },
        { title: "Glass", checked: false },
        { title: "Ceramic", checked: false }
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
    M.Collapsible.init(this.$refs.sortByFilter, {
      alignment: "center"
    });
    M.Collapsible.init(this.$refs.materialFilter, {
      alignment: "center"
    });
  },
  methods: {
    clearfilter() {
      for (let i = 0; i < this.filterCategories.length; i++) {
        if (this.filterCategories[i].checked) {
          this.filterCategories[i].checked = false;
        }
      }
    },
    applyFilter(item) {
      let filt = this.filterCategories
        .filter(itm => itm.checked)
        .map(name => name.title.toLowerCase().replace(/\s/g, ""));
      this.$emit("filter-category", filt);
      M.Collapsible.getInstance(this.$refs.categoryFilter).close();
      this.clearfilter();
    },
    clearfilterColor() {
      for (let i = 0; i < this.colors.length; i++) {
        if (this.colors[i].checked) {
          this.colors[i].checked = false;
        }
      }
    },
    clearFilterMaterial() {
      for (let i = 0; i < this.materials.length; i++) {
        if (this.materials[i].checked) {
          this.materials[i].checked = false;
        }
      }
    },
    rotateIcon(e) {
      if (e.target.firstElementChild.style.rotate !== "180deg") {
        e.target.firstElementChild.style = "rotate : 180deg";
      } else {
        e.target.firstElementChild.style = "rotate : 0deg";
      }
    },
    moreFilters() {
      if (this.$refs.iconArrow4.style.rotate != "180deg") {
        this.$refs.filtersMore.style = "display: none";
        this.$refs.iconArrow4.style = "rotate: 180deg";
      } else {
        this.$refs.iconArrow4.style = "rotate: 0deg";
        this.$refs.filtersMore.style = "display: flex";
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
    },
    activeMaterialColor() {
      return this.materials.filter(itm => itm.checked).length;
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
.tabs-filter {
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  width: 100%;
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
.sort {
  .collapsible-body {
    span {
      cursor: pointer;
      display: inline-block;
      height: 25px;
      line-height: 25px;
      font-size: 1rem;
      &:hover {
        background-color: #808080;
        color: #fff;
        cursor: pointer;
        width: 100%;
      }
    }
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
.filter-colors,
.filter-materials {
  min-width: 160px;
}
.tabs-filter__inner {
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
}
.more-filters {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;

  &:hover {
    cursor: pointer;
  }
  span {
    line-height: 1.3;
    &:hover {
      text-decoration: underline;
    }
  }
  i {
    width: 20px;
    height: 20px;
    margin-left: 10px;
    margin-bottom: 5px;
  }
}
.tabs-filter__more {
  max-width: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;

  display: none;
}
</style>
