<script setup lang="ts">
import { RegisterBusinessForm } from "#layers/landing/modules/forms/register-business/ui"

const { t } = useI18n({
  useScope: "local"
})
</script>

<template>
  <section class="register-investor bg-blue-midnight">
    <div class="container-7xl p-section">
      <register-business-form />
    </div>
  </section>
</template>

<style scoped></style>

<i18n>
{
  "en": {
    "title": "Welcome to the Investor Portal!",
    "description": "By registering, you will get access to exclusive investment opportunities and forums tailored to your interests. Please fill out the form below to start the registration process."
  },
  "ru": {
    "title": "Добро пожаловать в Портал Инвестора!",
    "description": "Зарегистрировавшись, вы получите доступ к эксклюзивным инвестиционным возможностям и форумам, соответствующим вашим интересам. Пожалуйста, заполните форму ниже, чтобы начать процесс регистрации."
  },
  "uz": {
    "title": "Investorlar portaliga xush kelibsiz!",
    "description": "Ro'yxatdan o'tish orqali siz o'zingizning qiziqishlaringizga moslashtirilgan eksklyuziv investitsiya imkoniyatlari va forumlariga kirish huquqiga ega bo'lasiz. Roʻyxatdan oʻtish jarayonini boshlash uchun quyidagi shaklni toʻldiring."
  }
}
</i18n>
