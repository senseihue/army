<script setup lang="ts">
import { RegisterEventForm } from "~/features/forms/register-event"
import { useEventService } from "~/features/event"

const { t } = useI18n({
  useScope: "local"
})
const route = useRoute()
const {getEventById} = useEventService()

definePageMeta({
  validate: async (route) => {
    // Check if the id is made up of digits
    return typeof route.query.event_id === "string"
  }
})

const event = ref<IEvent>()
const loading = ref(false)

onMounted(async () => {
  const {content} = await getEventById(Number(route.query.event_id), loading)
  event.value = content
})
</script>

<template>
  <div class="bg-blue-midnight">
    <div class="container-7xl">
      <div class="p-section">
        <div class="mb-12 text-center">
          <h3 class="mb-4 text-3xl text-white font-bold">
            {{ event?.name }}
          </h3>
          <p class="mx-auto text-white max-w-3xl">
            {{ event?.description }}
          </p>
        </div>
        <register-event-form />
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<i18n>
{
  "en": {
    "title": "We are pleased to announce an official site visit to the Republic of Karakalpakstan, scheduled for June 13, 2025.",
    "description": "During the visit, participants will have the opportunity to meet with local government representatives and business leaders, gain valuable insights into the economic potential and business climate of Karakalpakstan"
  },
  "ru": {
    "title": "Мы рады сообщить о предстоящем официальном визите в Республику Каракалпакстан, запланированном на 13 июня 2025 года.",
    "description": "Во время визита участники смогут встретиться с представителями местных властей и бизнесменами, получить ценные сведения о экономическом потенциале и деловом климате Каракалпакстана"
  },
  "uz": {
    "title": "Biz 2025 yil 13 iyun kuni Qoraqalpog‘iston Respublikasiga rasmiy tashrif rejalashtirilganini mamnuniyat bilan e’lon qilamiz.",
    "description": "Tashrif davomida ishtirokchilar mahalliy hukumat vakillari va biznes yetakchilari bilan uchrashish, Qoraqalpog‘istonning iqtisodiy salohiyati va biznes muhitiga oid qimmatli ma’lumotlarga ega bo‘lish imkoniyatiga ega bo‘ladilar."
  }
}
</i18n>
