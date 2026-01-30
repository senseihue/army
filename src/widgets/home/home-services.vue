<script setup lang="ts">
import { HomeServiceCard } from "~/features/home"
import { useAdmissionService } from "~/features/admission"
import { useAdmissionStore } from "~/entities/admission"

const { t } = useI18n({
  useScope: "local"
})
const { getAdmissionList } = useAdmissionService()
const admissionStore = useAdmissionStore()
const { items } = storeToRefs(admissionStore)

onMounted(getAdmissionList)
</script>

<template>
  <section>
    <div class="container-7xl">
      <div class="mx-auto mb-12 max-w-2xl text-center">
        <h2 class="text-foreground mb-4 font-serif text-3xl font-bold md:text-4xl">
          {{ t("title") }}
        </h2>
        <p class="text-muted-foreground text-lg">{{ t("description") }}</p>
      </div>
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <home-service-card v-for="item in items" :key="item.id" :admission="item" />
      </div>
    </div>
  </section>
</template>

<i18n>
{
  "oz": {
    "title": "Xizmatlarimiz",
    "description": "Fuqarolar quyidagi xizmatlardan foydalanishlari mumkin"
  },
  "uz": {
    "title": "Хизматларимиз",
    "description": "Фуқаролар қуйидаги хизматлардан фойдаланишлари мумкин"
  },
  "ru": {
    "title": "Наши услуги",
    "description": "Граждане могут воспользоваться следующими услугами"
  }
}
</i18n>
