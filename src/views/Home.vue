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
          model: "ZS671KS ",
          title: "Asus ZenFone",
          image:
            "https://firebasestorage.googleapis.com/v0/b/quantum-market.appspot.com/o/image%2Fsmartphone%2FAsus%20ZenFone%20ZS671KS%2Fblack%2Fblack%201.png?alt=media&token=08d73beb-d3b9-415d-a17b-26448414a5c2",
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
          image:
            "https://firebasestorage.googleapis.com/v0/b/quantum-market.appspot.com/o/image%2Fsmartphone%2FHUAWEI%20%20P%20SMART%202021%2Fgreen%2FP%20SMART%202021.png?alt=media&token=43bd3ba6-3e00-44dc-bf2d-3b0aaf10f2f9",
          sale: "5",
          price: "180",
          color: ["green"],
          rating: "4.0",
          totalvote: "18"
        },
        {
          id: "3",
          model: "P 40",
          title: "HUAWEI",
          image:
            "https://firebasestorage.googleapis.com/v0/b/quantum-market.appspot.com/o/image%2Fsmartphone%2FHuawei%20P40%20%2Fblack%2Fp40.png?alt=media&token=ea4e6180-0c95-49e4-8e2b-818fd27767bb",
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
          image:
            "https://firebasestorage.googleapis.com/v0/b/quantum-market.appspot.com/o/image%2Fsmartphone%2Fsamsung%20Galaxy%20A51%2Fblack%2Fblack.png?alt=media&token=20c2cbad-1f89-4b63-ada8-7ea71eae9899",
          sale: "",
          price: "459",
          color: ["black", "white", "blue"],
          rating: "4.5",
          totalvote: "18"
        }
      ]
    };
  },
  mounted() {
    console.log(this.$store.state.info.hello);
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
