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
              <Card v-for="item in cellPhones" :key="item.id" :item="item" />
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
<style lang="scss" scoped>
.cards-wrapper {
  justify-content: space-between;

  .card {
    width: 32%;
  }
}
</style>
