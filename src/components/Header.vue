<template>
  <header class="header">
    <div class="header__container">
      <div class="header__logo">
        <router-link to="/"> <div class="logo">QUANTUM</div></router-link>
      </div>
      <form class="header__search" @submit.prevent="submitHandler">
        <div class="header__search-input-wrapper">
          <div class="input-field inline">
            <input
              id="email_inline"
              v-model.trim="searchProduct"
              type="text"
              placeholder="Search your products..."
              
            />

           <!-- <span
              v-else-if="
                $v.searchProduct.$dirty && $v.searchProduct.minLength.$invalid
              "
              class="helper-text"
            >
              Request must contain at least 5 symbols.
            </span> -->
          </div>
        </div>
        <a
          ref="dropdown"
          class="dropdown-trigger waves-effect waves-blue lighten-4"
          href="#"
          data-target="dropdown1"
          >{{ dropdownSelected }}
          <i class="material-icons">arrow_drop_down</i></a
        >
        <ul id="dropdown1" class="dropdown-content">
          <li>
            <a href="#!" data="Mobile" @click="selected">
              <i class="material-icons">call</i>Mobile</a
            >
          </li>
          <li>
            <a ref="Tablet" href="#!" data="Tablet" @click="selected">
              <i class="material-icons">devices</i>Tablet</a
            >
          </li>
          <li>
            <a href="#!" data="Laptop" @click="selected"
              ><i class="material-icons">view_module</i>Laptop</a
            >
          </li>
        </ul>
        <div class="header__search-button-wrapper">
          <button class="header__search-button" type="submit">
            <img src="../assets/img/icons/search-icon.svg" alt="" />
          </button>
        </div>
      </form>
      <div class="header__links">
        <!-- cart-link -->
        <router-link to="/cart" class="header-link header-link--notify">
          <span class="header-link__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewbox="0 0 21 20"
            >
              <path
                d="M16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2c1.099 0 2-.9 2-2s-.901-2-2-2zM4.008 18c0 1.1.89 2 1.99 2 1.102 0 2-.9 2-2s-.898-2-2-2c-1.1 0-1.99.9-1.99 2zM14.55 9H7.53l-.13-.27L5.16 4h12.15zM3.27 0H0v2H2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96C4 14.1 4.9 15 6 15h12v-2H6.42a.256.256 0 0 1-.25-.25l.03-.12L7.1 11h7.45c.75 0 1.409-.41 1.75-1.03l3.861-7.01-.16-.96H4.21z"
              />
            </svg>
          </span>
          <span v-if="$store.getters.getCart.length" class="header-link__text"
            >{{ $store.getters.getCart.length }} Items</span
          >
        </router-link>

        <!-- wishlist-link -->
        <a href="#" class="header-link">
          <span class="header-link__icon">
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
          </span>
          <span class="header-link__text">Wish List</span>
        </a>

        <!-- user-link -->
        <a href="#" class="header-link">
          <span class="header-link__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewbox="0 0 16 16"
            >
              <path
                d="M16 13v3H0v-3c0-2.66 5.33-4 8-4s8 1.34 8 4zm-4.002-9c0 2.21-1.789 4-3.998 4a3.997 3.997 0 0 1-4-4c0-2.21 1.788-4 4-4 2.21 0 3.998 1.79 3.998 4zm-10.1 9v1.1H14.1V13c0-.64-3.13-2.1-6.1-2.1-2.968 0-6.1 1.46-6.1 2.1zM5.9 4a2.101 2.101 0 0 0 4.202 0A2.101 2.101 0 0 0 5.9 4z"
              />
            </svg>
          </span>
          <span class="header-link__text">Sing in</span>
        </a>
      </div>
    </div>
    <div class="header__nav">
      <div class="header-nav">
        <div class="header-nav__categories">
          <a href="#" class="header-mega-menu-link">
            <span class="header-mega-menu-link__icon"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="12"
                viewbox="0 0 18 12"
              >
                <path d="M18 0v2H0V0zM0 5h18v2H0zm0 5h18v2H0z" /></svg
            ></span>
            <span class="header-mega-menu-link__text">All Categories</span>
          </a>
        </div>
        <div class="header-nav__deals">
          <a href="#" class="header-nav__link">
            <a href="#" class="header-nav__link">Super Deals</a>
            <a href="#" class="header-nav__link">Featured Brands</a>
            <a href="#" class="header-nav__link">Collections</a>
            <a href="#" class="header-nav__link">Bestselling</a>
          </a>
        </div>
        <!-- header-nav__select -->
        <div class="header-nav__select">
          <!-- item -->
          <div class="header-nav__select-item">
            <div class="nav-dropdown">
              <a href="#" class="nav-dropdown__title">
                {{ currencySelected }}
                <div class="nav-dropdown__title-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="5"
                    viewbox="0 0 8 5"
                  >
                    <path d="M3.998 5L8 2.5V.104L3.998 2.62 0 0v2.5z" />
                  </svg>
                </div>
              </a>
              <div class="nav-dropdown__dropdown">
                <a
                  href="#"
                  class="nav-dropdown__dropdown-item"
                  @click="selectedCurrency"
                  >RUR</a
                >
                <a
                  href="#"
                  class="nav-dropdown__dropdown-item"
                  @click="selectedCurrency"
                  >UAN</a
                >
                <a
                  href="#"
                  class="nav-dropdown__dropdown-item"
                  @click="selectedCurrency"
                  >USD</a
                >
              </div>
            </div>
          </div>
          <!-- // item -->
          <!-- item -->
          <div class="header-nav__select-item">
            <div class="nav-dropdown">
              <a href="#" class="nav-dropdown__title">
                {{ selectedlanguage }}
                <div class="nav-dropdown__title-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="5"
                    viewbox="0 0 8 5"
                  >
                    <path d="M3.998 5L8 2.5V.104L3.998 2.62 0 0v2.5z" />
                  </svg>
                </div>
              </a>
              <div class="nav-dropdown__dropdown">
                <a
                  href="#"
                  class="nav-dropdown__dropdown-item"
                  @click="selectedLanguages"
                  >English</a
                >
                <a
                  href="#"
                  class="nav-dropdown__dropdown-item"
                  @click="selectedLanguages"
                  >Russian</a
                >
                <a
                  href="#"
                  class="nav-dropdown__dropdown-item"
                  @click="selectedLanguages"
                  >Polish</a
                >
              </div>
            </div>
          </div>
          <!-- // item -->
        </div>
        <!-- // header-nav__select -->
      </div>
    </div>
  </header>
</template>

<script>
// import { required, minLength } from "vuelidate/lib/validators";

export default {
  name: "Header",
  data: () => ({
    dropdownSelected: "CATEGORY",
    searchProduct: "",
    currencySelected: "USD",
    selectedlanguage: "English"
  }),
  validations: {
     
  },
  components: {},
  created() {
    M.Dropdown.init(this.$refs.dropdown, {
      alignment: "center"
    });
  },
  methods: {
    selected(e) {
      this.dropdownSelected = e.target.attributes["data"].value.toUpperCase();
      console.log(this.dropdownSelected.toLowerCase());
    },
    selectedCurrency(e) {
      this.currencySelected = e.target.innerText.toUpperCase();
    },
    selectedLanguages(e) {
      this.selectedlanguage = e.target.innerText.toUpperCase();
    },
    submitHandler() {
      // if (this.$v.searchProduct.$invalid) {
      //   this.$v.searchProduct.$touch();
      //   return;
      // }
    }
  }
};
</script>
<style lang="scss" scoped>
.header__nav {
  border-top: none;
}
.header-nav {
  border: 2px solid #f5f5f5;
  border-bottom: none;
}

.header__search {
  .dropdown-trigger {
    color: #808080;
    height: 100%;
    border-right: 2px solid #f5f5f5;
    font-size: 14px;
    max-width: 120px;
    display: inline-block;
    width: 100%;
    padding-top: 16px;
    padding-left: 5px;
    position: relative;
    i {
      position: absolute;
      top: 12px;
      right: 5px;
    }
  }

  .dropdown-content {
    top: -46.8px;
    a {
      display: flex;
    }
    i {
      font-size: 20px;
    }
  }
  .input-field {
    padding: 0 5px;
    margin-top: 35px;
    width: 100%;
    color: #808080;
  }
  .helper-text {
    color: red;
    margin-top: -13px;
  }
}
</style>
