<script setup lang="ts">
import { ServiceTabs, ServiceList } from "~/features/service"
import { useServiceProcessStore } from "~/entities/service/process"
import { useServiceProcessService } from "~/features/service/process"
import { useServiceStepService } from "~/features/service/step"

const route = useRoute()
const router = useRouter()
const {getStepList} = useServiceStepService()
const serviceProcessStore = useServiceProcessStore()
const { items } = storeToRefs(serviceProcessStore)

const changeRoute = (category: IServiceCategory) => {
  serviceProcessStore.current = category
  getStepList()
}
</script>

<template>
  <section>
    <div class="container-7xl">
      <div class="pb-4 pt-8">
        <service-tabs :steps="items" @update="changeRoute" />
      </div>
    </div>
  </section>
</template>
