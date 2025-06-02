<script lang="ts" setup>


</script>

<template>
  <section class="relative bg-blue-bright">
    <div class="container-7xl">
      <div data-aos="fade" data-aos-delay="50" class="flex flex-col gap-8 py-16">
        <div class="text-title font-bold text-blue-midnight">
          <slot name="content"></slot>
        </div>

        <div class="mx-auto">
          <slot />
        </div>
      </div>
    </div>
  </section>
</template>
