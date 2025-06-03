<script setup lang="ts">

const { t } = useI18n({
  useScope: 'local',
})
</script>

<template>
  <section class="register-investor">
    <div class="container-7xl p-section">
      <div class="py-12 text-center text-white">
        <h3 class="mb-2 text-3xl font-semibold">
          {{ t('title') }}
        </h3>
        <div class="mx-auto max-w-3xl">
          <p>
            {{ t('description') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>

<i18n>
{
  "en": {
    "title": "Welcome to the Investor Portal!",
    "description": "By registering, you will get access to exclusive investment opportunities and forums tailored to your interests. Please fill out the form below to start the registration process."
  }
}
</i18n>
