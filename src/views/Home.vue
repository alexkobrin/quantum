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
              <!-- card -->
              <div class="card">
                <!-- card__header -->
                <div class="card__header">
                  <div class="card__sale">SALE 10%</div>
                  <div class="card__icon-btns">
                    <button class="card__icon-btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="10"
                        viewbox="0 0 18 10"
                      >
                        <path
                          d="M0 6V4h2v2zm0 4V8h2v2zm0-8V0h2v2zm4 4V4h14v2zm0 4V8h14v2zM4 0h14v2H4z"
                        />
                      </svg>
                    </button>
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
                  <img
                    src="../assets/img/phones/phone1.png"
                    alt="Asus ZenFone Go ZB452KG (black and white)"
                  />
                </div>
                <h4 class="card__title">
                  Asus ZenFone Go ZB452KG (black and white)
                </h4>
                <div class="card__rating">
                  <img
                    class="card__rating-star"
                    src="../assets/img/icons/star_icon.svg"
                    alt=""
                  />
                  <img
                    class="card__rating-star"
                    src="../assets/img/icons/star_icon.svg"
                    alt=""
                  />
                  <img
                    class="card__rating-star"
                    src="../assets/img/icons/star_icon.svg"
                    alt=""
                  />
                  <img
                    class="card__rating-star"
                    src="../assets/img/icons/star_half_icon.svg"
                    alt=""
                  />
                  <img
                    class="card__rating-star"
                    src="../assets/img/icons/star_border_icon.svg"
                    alt=""
                  />
                  <div class="card__rating-value">12</div>
                </div>
                <div class="card__footer">
                  <div class="card__price">$ 384.4</div>
                  <button class="card__cart">
                    <svg
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
              <Card v-for="item in cellPhones" :key="item.id" :item="item" />
            </div>
          </div>
        </div>
      </div>
    </main>

    <footer class="footer">
      <div class="footer-top-wrapper">
        <div class="container">
          <div class="footer__row">
            <div class="footer__logo">
              <div class="logo">QUANTUM</div>
            </div>
            <div class="footer__nav">
              <nav class="nav-footer">
                <ul class="nav-footer__list">
                  <li class="nav-footer__list-item">
                    <a
                      class="nav-footer__link nav-footer__link--dropdown"
                      href="#"
                    >
                      Shop
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="8"
                          height="5"
                          viewbox="0 0 8 5"
                        >
                          <path d="M3.998 5L8 2.5V.104L3.998 2.62 0 0v2.5z" />
                        </svg>
                      </span>
                    </a>
                    <!-- <ul>
                                        <li>
                                            <a href="#">Some item</a>
                                        </li>
                                        <li>
                                            <a href="#">Some item</a>
                                        </li>
                                        <li>
                                            <a href="#">Some item</a>
                                        </li>
                                    </ul> -->
                  </li>
                  <li class="nav-footer__list-item">
                    <a class="nav-footer__link" href="#">Journal</a>
                  </li>
                  <li class="nav-footer__list-item">
                    <a class="nav-footer__link" href="#">About</a>
                  </li>
                  <li class="nav-footer__list-item">
                    <a class="nav-footer__link" href="#">Contacts</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="footer__socials">
              <div class="social">
                <a href="#" class="social__item">
                  <svg
                    width="11"
                    height="20"
                    viewox="0 0 11 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11 0H8C5.23858 0 3 2.23858 3 5V8H0V12H3V20H7V12H10L11 8H7V5C7 4.44772 7.44772 4 8 4H11V0Z"
                    />
                  </svg>
                </a>
                <a href="#" class="social__item">
                  <svg
                    width="20"
                    height="17"
                    viewbox="0 0 20 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M20 0.00932958C19.1294 0.6234 18.1656 1.09307 17.1455 1.40024C16.024 0.110728 14.2167 -0.341476 12.6201 0.267924C11.0234 0.877323 9.97709 2.41869 10 4.12751V5.0366C6.75515 5.12074 3.68366 3.57476 1.81818 0.91842C1.81818 0.91842 -1.81818 9.10024 6.36364 12.7366C4.49139 14.0075 2.26105 14.6447 0 14.5548C8.18182 19.1002 18.1818 14.5548 18.1818 4.10024C18.181 3.84701 18.1566 3.59442 18.1091 3.34569C19.0369 2.43069 19.6917 1.27543 20 0.00932958Z"
                    />
                  </svg>
                </a>
                <a href="#" class="social__item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="12"
                    viewbox="0 0 16 12"
                  >
                    <path
                      d="M6 9.26V2.73L12 6zM16 2c0-1.1-.9-2-2-2H2C.9 0 0 .9 0 2v8c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="footer__row footer__row--copyright">
          <div class="footer__copyright">
            <div class="copyright">
              <div class="copyright__item">© 2019. Quantum UI kit</div>
              <div class="copyright__item">
                <a href="#">Privacy Policy</a>
              </div>
              <div class="copyright__item">
                <a href="#">Terms of Use</a>
              </div>
            </div>
          </div>
          <div class="footer__payment">
            <div class="payments">
              <div class="payments__text">Accepted payment methods</div>
              <div class="payments__icons">
                <a class="payments__icon" href="#">
                  <img
                    src="../assets/img/payment/amazon_icon.png"
                    alt="Amazon"
                  />
                </a>
                <a class="payments__icon" href="#">
                  <img
                    src="../assets/img/payment/pay_pal_icon.png"
                    alt="PayPal"
                  />
                </a>
                <a class="payments__icon" href="#">
                  <img
                    src="../assets/img/payment/master_сard.png"
                    alt="MasterCard"
                  />
                </a>
                <a class="payments__icon" href="#">
                  <img src="../assets/img/payment/visa_icon.png" alt="Visa" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Slider from "../components/Slider";
import Aside from "../components/Aside";
import Card from "../components/Card";
export default {
  data() {
    return {
      cellPhones: [
        {
          id: "1",
          model: "Go ZB452KG",
          title: "Asus ZenFone",
          image: "",
          sale: "10",
          price: "384.4",
          color: ["black", "white"],
          rating: "5",
          totalvote: "10"
        },
        {
          id: "2",
          model: "P SMART 2021",
          title: "HUAWEI",
          image: "",
          sale: "5",
          price: "180",
          color: ["green"],
          rating: "4.5",
          totalvote: "18"
        },
        {
          id: "3",
          model: "P 40",
          title: "HUAWEI",
          image: "",
          sale: "5",
          price: "180",
          color: ["black"],
          rating: "4.5",
          totalvote: "18"
        },
        {
          id: "4",
          model: "Galaxy A51",
          title: "SAMSUNG",
          image: {
            black: [
              "https://firebasestorage.googleapis.com/v0/b/quantum-market.appspot.com/o/image%2Fsmartphone%2Fsamsung%20Galaxy%20A51%2Fblack%2Fblack3.png?alt=media&token=290ae671-e9d3-4b6e-a11b-1cefbfcc1cff",
              "https://firebasestorage.googleapis.com/v0/b/quantum-market.appspot.com/o/image%2Fsmartphone%2Fsamsung%20Galaxy%20A51%2Fblack%2Fblack.png?alt=media&token=20c2cbad-1f89-4b63-ada8-7ea71eae9899",
              "https://firebasestorage.googleapis.com/v0/b/quantum-market.appspot.com/o/image%2Fsmartphone%2Fsamsung%20Galaxy%20A51%2Fblack%2Fblack3.png?alt=media&token=290ae671-e9d3-4b6e-a11b-1cefbfcc1cff"
            ],
            blue: [
              "https://firebasestorage.googleapis.com/v0/b/quantum-market.appspot.com/o/image%2Fsmartphone%2Fsamsung%20Galaxy%20A51%2Fblue%2Fblue.png?alt=media&token=f4dc9bc4-c804-4799-bd70-0b2d780d5e6b",
              "https://firebasestorage.googleapis.com/v0/b/quantum-market.appspot.com/o/image%2Fsmartphone%2Fsamsung%20Galaxy%20A51%2Fblue%2Fblue2.png?alt=media&token=70c07cce-5a47-439e-902d-631405f93e17",
              "https://firebasestorage.googleapis.com/v0/b/quantum-market.appspot.com/o/image%2Fsmartphone%2Fsamsung%20Galaxy%20A51%2Fblue%2Fblue3.png?alt=media&token=4845f701-8828-44a2-9151-3f841f4178a2"
            ],
            white: [
              "https://firebasestorage.googleapis.com/v0/b/quantum-market.appspot.com/o/image%2Fsmartphone%2Fsamsung%20Galaxy%20A51%2Fwhite%2Fwhite.png?alt=media&token=a958533b-4231-48e0-9b14-a92594aee8ca",
              "https://firebasestorage.googleapis.com/v0/b/quantum-market.appspot.com/o/image%2Fsmartphone%2Fsamsung%20Galaxy%20A51%2Fwhite%2Fwhite2.png?alt=media&token=23c9337d-bc5a-4e9f-94b5-8f28564c7b73",
              "https://firebasestorage.googleapis.com/v0/b/quantum-market.appspot.com/o/image%2Fsmartphone%2Fsamsung%20Galaxy%20A51%2Fwhite%2Fwhite3.png?alt=media&token=b521ebee-b29b-4fce-b894-04095f1fb3c9"
            ]
          },
          sale: "",
          price: "459",
          color: ["black", "white", "blue"],
          rating: "4.5",
          totalvote: "18"
        }
      ]
    };
  },
  components: {
    Slider,
    Aside,
    Card
  }
};
</script>
<style lang="scss" scoped></style>
