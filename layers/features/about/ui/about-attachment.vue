<script setup lang="ts">
const { t } = useI18n({ useScope: "local" })
</script>

<template>
  <section class="bg-blue-midnight">
    <div class="container-7xl">
      <div class="p-section">
        <div class="flex flex-col md:flex-row md:items-center md:justify-center gap-8">
          <ui-button
            rounded
            download
            color="success"
            target="_blank"
            href="https://dev-portal.miit.uz/uploads/ipa-team-structure.pdf"
            :label="t('structure')"
          />

          <ui-button color="success" rounded to="/contacts" :label="t('vacancy')" />

          <ui-button
            rounded
            color="success"
            target="_blank"
            href="https://lex.uz/docs/6121273"
            :label="t('regalement')"
          />

          <ui-button
            rounded
            download
            color="success"
            target="_blank"
            href="https://dev-portal.miit.uz/uploads/files/results-of-the-work.pdf"
            :label="t('result')"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<i18n lang="json">
{
  "en": {
    "structure": "Organizational structure",
    "vacancy": "Vacancy",
    "regalement": "Regalement on gov purchases",
    "result": "Result of the work"
  },
  "ru": {
    "structure": "Организационная структура",
    "vacancy": "Вакансии",
    "regalement": "Регламент о государственных закупках",
    "result": "Результаты работ"
  },
  "uz": {
    "structure": "Tashkiliy tuzilma",
    "vacancy": "Bo'sh ish o'rinlari",
    "regalement": "Davlat xaridlari reglamenti",
    "result": "Faoliyat natijalari"
  }
}
</i18n>
