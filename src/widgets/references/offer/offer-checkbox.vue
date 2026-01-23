<script setup lang="ts">
import { useOfferApi } from "~/features/references/offer"

interface IProps {
  autoSelect?: boolean
  fetchOnOpen?: boolean
}

const props = defineProps<IProps>()
const model = defineModel<boolean>()

const { t } = useI18n({ useScope: "local" })
const offerApi = useOfferApi()

const offer = ref<IOffer>({
  id: 1,
  title: "Sample Offer",
  slug: "asdd"
})

onMounted(() => {
  offerApi.getOfferList()
})
</script>

<template>
  <div class="flex items-center gap-2">
    <ui-checkbox v-model="model" class="!w-max"></ui-checkbox>
    <a target="_blank" title="View details in new tab" :href="`/offer/${offer.slug}`">
      <p v-html="t('offer_link', { title: offer.title })" class=""></p>
    </a>
  </div>
</template>

<i18n>
{
  "ru": {
    "offer_link": "Согласен с условиями оферты <span class=\"text-blue-700 underline\">{ title }</span>"
  },
  "uz": {
    "offer_link": "<span class=\"text-blue-700 underline\">{ title }</span> oferta shartlariga roziman"
  }
}
</i18n>
