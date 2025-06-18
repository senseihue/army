<script setup lang="ts">
const { t } = useI18n({ useScope: "local" })

defineProps<{ fileUrl: string }>()
</script>

<template>
  <section class="bg-blue-command">
    <div class="container-7xl">
      <div class="p-section">
        <h4 class="mb-8 text-center text-white md:text-xl">{{ t("heading") }}</h4>

        <div v-if="fileUrl" class="flex items-center justify-center">
          <ui-button class="!px-8" rounded color="success" target="_blank" :href="fileUrl" :label="t('download')" />
        </div>
      </div>
    </div>
  </section>
</template>

<i18n lang="json">
{
  "en": {
    "heading": "Click here to download our investment offer and learn more",
    "download": "Download"
  },
  "ru": {
    "heading": "Нажмите здесь, чтобы загрузить наше инвестиционное предложение и узнать больше",
    "download": "Скачать"
  },
  "uz": {
    "heading": "Investitsion taklifimizni yuklab olish va koʻproq maʼlumot olish uchun shu yerni bosing",
    "download": "Yuklab olish"
  }
}
</i18n>
