<script setup lang="ts">
import { HomeServiceCard } from "~/features/home"
import { useAdmissionService } from "~/features/admission"
import { useAdmissionStore } from "~/entities/admission"
const { getAdmissionList } = useAdmissionService()
const admissionStore = useAdmissionStore()
const { items, loading } = storeToRefs(admissionStore)

onMounted(getAdmissionList)
</script>

<template>
  <section>
    <div class="container-7xl">
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <home-service-card v-for="item in items" :key="item.id" :admission="item" />
      </div>
    </div>
  </section>
</template>

<style scoped></style>