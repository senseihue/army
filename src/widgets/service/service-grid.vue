<script setup lang="ts">
import { ServiceList } from "~/widgets/service"
import { ServiceCategoryList } from "~/features/service/category"
import ServiceStepList from "~/features/service/step/ui/service-step-list.vue"
</script>

<template>
  <section>
    <div class="container-7xl">
      <div class="pb-4">
        <div class="flex flex-col-reverse gap-2 lg:flex-row">
          <div class="w-full"></div>
          <div class="sticky right-0 flex w-full max-w-[272px] flex-row gap-5 lg:flex-col">
            <service-step-list />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
