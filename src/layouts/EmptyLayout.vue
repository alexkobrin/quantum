<template>
  <div class="empty-layout">
    <router-view />
  </div>
</template>

<style lang="css" scoped>
.empty-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;
  height: 100vh;
}
</style>
