<template>
  <div class="main__column-left">
    <nav class="navigation">
      <ul ref="collapsible" class="collapsible">
        <li>
          <div class="navigation__item collapsible-header">
            <div class="navigation__item-icon">
              <svg
                class="navigation__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="20"
                viewbox="0 0 22 20"
              >
                <path
                  d="M20 14H2V2h18zm0-14H2C.9 0 0 .9 0 2v12c0 1.1.9 2 2 2h7v2H7v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z"
                />
              </svg>
            </div>
            <div class="navigation__item-title">Elektronics</div>
          </div>
          <div class="collapsible-body">
            <div v-for="link in linksElectronik" :key="link.title" class="">
              {{ link.title }}
            </div>
          </div>
        </li>
        <li>
          <div class="navigation__item collapsible-header">
            <div class="navigation__item-icon">
              <svg
                class="navigation__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="20"
                viewbox="0 0 22 20"
              >
                <path
                  d="M20 12H2V2h18zm0-12H2C.9 0 0 .9 0 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z"
                />
              </svg>
            </div>
            <div class="navigation__item-title">Elektronics Apple</div>
          </div>
          <div class="collapsible-body">
            <div v-for="link in linksApple" :key="link.title">
              {{ link.title }}
            </div>
          </div>
        </li>
        <li>
          <div class="navigation__item collapsible-header">
            <div class="navigation__item-icon">
              <svg
                class="navigation__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="22"
                viewbox="0 0 13 22"
              >
                <path
                  d="M11 17H2V3h9zm-4.5 4c-.83 0-1.5-.67-1.5-1.5S5.67 18 6.5 18s1.5.67 1.5 1.5S7.33 21 6.5 21zm4-21H2.498A2.499 2.499 0 0 0 .002 2.5v17c0 1.38 1.117 2.5 2.497 2.5h8a2.5 2.5 0 0 0 2.5-2.5v-17a2.5 2.5 0 0 0-2.5-2.5z"
                />
              </svg>
            </div>
            <div class="navigation__item-title">Cell Phones</div>
          </div>
          <div class="collapsible-body">
            <div
              v-for="link in linksPhone"
              @click="slectedItem"
              :key="link.title"
            >
              {{ link.title }}
            </div>
          </div>
        </li>
        <li>
          <div class="navigation__item collapsible-header">
            <div class="navigation__item-icon">
              <svg
                class="navigation__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewbox="0 0 18 18"
              >
                <path
                  d="M14 4H4v10h10zm1.999 4v2h2v2h-2v2c0 1.1-.899 2-2 2h-1.998v2H9.998v-2H8v2H6v-2H4c-1.1 0-2.001-.9-2.001-2v-2H0v-2H2V8H0V6H2V4c0-1.1.9-2 2-2H6V0h2v2h1.998V0H12v2H14c1.1 0 1.999.9 1.999 2v2h2v2zM9.998 8H8v2h1.998zM12 12H6V6h6z"
                />
              </svg>
            </div>
            <div class="navigation__item-title">Computer Components</div>
          </div>
          <div class="collapsible-body">
            <span>Lorem ipsum dolor sit amet.</span>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data: () => ({
    linksElectronik: [
      {
        title: "Laptop",
        url: "/login"
      },

      {
        title: "Desktop computers",
        url: "/register"
      },
      {
        title: "Printer and scanner",
        url: "/register"
      }
    ],
    linksApple: [
      {
        title: "Apple MacBook AIR",
        url: "/login"
      },
      {
        title: "Apple MackBook Pro",
        url: "/login"
      },
      {
        title: "Apple iPad",
        url: "/login"
      },
      {
        title: "Apple iPad Pro",
        url: "/login"
      },
      {
        title: "Apple TV+",
        url: "/login"
      },
      {
        title: "Apple Watch Series 6",
        url: "/login"
      }
    ],
    linksPhone: [
      { title: "Smarthone" },
      { title: "Tablets" },
      { title: "Acsesoria GSM" }
    ]
  }),

  mounted() {
    M.Collapsible.init(this.$refs.collapsible, {
      accordion: false
    });
    M.Collapsible.getInstance(this.$refs.collapsible).open(0);
  },
  onUnmounted() {
    M.Collapsible.getInstance(this.$refs.collapsible).destroy();
  },

  methods: {
    slectedItem(e) {
      console.log(e.target);
    }
  }
};
</script>
<style lang="scss" scoped>
.navigation {
  height: auto;
  li {
    width: 100%;
  }
}
.navigation__item {
  width: 100%;
  .navigation__icon-arrow {
    rotate: -90deg;
  }
  .navigation__icon-arrow.active {
    rotate: 90deg;
  }
}
.collapsible-body {
  background-color: #fff;
  padding: 1rem;

  div {
    color: #808080;
    line-height: 3;
    padding-left: 5px;
  }
  div:hover {
    background-color: #808080;
    color: #fff;
    cursor: pointer;
  }
}
</style>
