<template>
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
                  </a>
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
                <img src="../assets/img/payment/amazon_icon.png" alt="Amazon" />
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
</template>

<script>
export default {
  name: "Footer"
};
</script>
<style lang="scss" scoped>
.nav-footer {
  background-color: transparent;
  box-shadow: none;
  a {
    &:hover {
      background-color: transparent;
    }
  }
}
</style>
