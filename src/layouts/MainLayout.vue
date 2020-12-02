<template>
  <div class="main-layout">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  name: "MainLayout",
  components: {
    Header
  }
};
</script>
