<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import EmptyLayout from "@/layouts/EmptyLayout.vue";
import MainLayout from "@/layouts/MainLayout.vue";
export default {
  components: { EmptyLayout, MainLayout },
  computed: {
    layout() {
      return (this.$route.meta.layout || "empty") + "-layout";
    }
  },
  methods: {}
};
</script>
<style lang="scss">
@import "~materialize-css/dist/css/materialize.min.css";
@import "assets/css/main.min.css";
@import "assets/css/normalize.css";
@import "assets/css/style.css";
@import "assets/css/slick.css";
</style>
