<script lang="ts" setup>

</script>

<template>
  <section class="relative">
    <div class="container-7xl">
      <div class="p-section">
        <div class="why-uzbekistan-content grid grid-cols-1 gap-y-8 lg:grid-cols-2">
          <div data-aos="fade-right" data-aos-delay="150" class="left-col z-10">
            <slot name="left" />
          </div>

          <div data-aos="fade-left" data-aos-delay="150" >
            <slot name="right" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="css">
.why-uzbekistan-content {
  h1:not(.ignore-text-format),
  h2:not(.ignore-text-format),
  h3:not(.ignore-text-format),
  h4:not(.ignore-text-format),
  h5:not(.ignore-text-format),
  h6:not(.ignore-text-format) {
    @apply font-sans text-2xl font-bold text-blue-command lg:text-3xl;
  }

  p:not(.ignore-text-format) {
    @apply  text-gray-600;
  }
}

.left-col > *:not(.statistic-card) {
  @apply md:mr-12;
}
</style>
