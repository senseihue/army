<script setup lang="ts">

interface IProps {
  autoSelect?: boolean
  fetchOnOpen?: boolean
  oferta: IOffer
}

defineProps<IProps>()
const model = defineModel<boolean>()

const { t } = useI18n({ useScope: "local" })
</script>

<template>
  <div class="flex items-center gap-2">
    <ui-checkbox v-model="model" class="!w-max"></ui-checkbox>
    <div v-html="t('offer_link', { title: oferta?.title, slug: oferta?.slug })"></div>
  </div>
</template>

<i18n>
{
  "ru": {
    "offer_link": "Согласен с условиями оферты <a href=\"/offer/{ slug }\" target=\"_blank\" class=\"text-blue-700 underline\">{ title }</a>"
  },
  "oz": {
    "offer_link": "<a href=\"/offer/{ slug }\" target=\"_blank\" class=\"text-blue-700 underline\">{ title }</a> oferta shartlariga roziman"
  },
  "uz": {
    "offer_link": "<a href=\"/offer/{ slug }\" target=\"_blank\" class=\"text-blue-700 underline\">{ title }</a> оферта шартларига розиман"
  }
}
</i18n>
