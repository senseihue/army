<script lang="ts" setup>
</script>

<template>
  <section class="relative">
    <div class="container-7xl">
      <div class="p-section">
        <div class="why-uzbekistan-gallery grid grid-cols-1 gap-8 lg:grid-cols-2">
          <slot />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="css">
.why-uzbekistan-gallery {
  div {
    @apply h-full w-full overflow-hidden;
  }

  img {
    @apply h-full w-full object-cover object-center transition duration-500 hover:scale-110;
  }
}
</style>
