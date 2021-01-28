<template>
  <div class="overview">
    <div class="intro">
      <div class="row h-100 justify-content align-items-center mt-2">
        <div class="col-md-6">
          <h3>Overview Page</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
            labore eum minima cum velit aspernatur corporis minus quaerat,
            magnam facilis!
          </p>
        </div>
        <div class="col-md-6">
          <div class="overview-graphic">
            <img src="../assets/svg/overview.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Overview"
};
</script>

<style lang="scss">
.overview-graphic {
  img {
    max-width: 60%;
    object-fit: cover;
  }
}
</style>
