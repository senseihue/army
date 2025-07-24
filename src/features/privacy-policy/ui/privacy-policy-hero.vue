<script setup lang="ts">
const { t } = useI18n({ useScope: "local" })
</script>

<template>
  <section>
    <div class="container-7xl">
      <div class="p-section">
        <div>
          <h3 class="mb-8 text-2xl font-bold text-blue-command lg:text-3xl">
            {{ t("heading") }}
          </h3>

          <p class="whitespace-pre-line text-gray-700 text-justify">{{ t("text") }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>

<i18n>
{
  "en": {
    "heading": "Privacy Policy",
    "text": "Any use (reproduction, publication, copying, reprinting, distribution, translation, broadcasting, processing and other methods of distribution) of the materials of the Investment Portal - Invest.gov.uz, without indicating the original source and a link to the Portal is strictly prohibited."
  },
  "ru": {
    "heading": "Политика Конференциальности",
    "text": "Любое использование (воспроизведение, публикация, копирование, перепечатка, распространение, перевод, трансляция, обработка и другие способы распространения) материалов Инвестиционного портала - Invest.gov.uz без указания первоисточника и ссылки на Портал строго запрещено."
  },
  "uz": {
    "heading": "Maxfiylik Siyosati",
    "text": "Investitsiya portali materiallaridan har qanday foydalanish (ko'paytirish, nashr etish, nusxalash, qayta chop etish, tarqatish, tarjima qilish, translyatsiya qilish, qayta ishlash va tarqatishning boshqa usullari) - Invest.gov.uz, asl manba va portalga havolani ko'rsatmasdan qat'iyan man etiladi."
  }
}
</i18n>
