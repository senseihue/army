<script setup lang="ts">
import { ServiceList } from "~/widgets/service"
import { ServiceCategoryList } from "~/features/service/category"
</script>

<template>
  <section>
    <div class="container-7xl">
      <div class="pb-4">
        <div class="flex min-h-96 flex-col gap-4">
          <service-category-list />
          <service-list />
        </div>
      </div>
    </div>
  </section>
</template>
