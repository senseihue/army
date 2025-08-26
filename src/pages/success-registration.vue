<script setup lang="ts">
const { t } = useI18n({ useScope: "local" })
</script>

<template>
  <section class="flex grow bg-blue-midnight">
    <div class="container-7xl p-section">
      <div class="mx-auto flex h-full max-w-[644px] flex-col items-center justify-center md:gap-11">
        <h3 class="mb-4 text-center text-3xl font-bold text-white">{{ t("title") }}</h3>
        <ui-button to="/" class="min-w-[232px]" rounded size="lg" color="success">
          {{t("back_home")}}
        </ui-button>
      </div>
    </div>
  </section>
</template>

<i18n>
{
  "en": {
    "title": "Thank you for registering!  You will receive an email confirming your registration. Please follow the instructions to confirm your email address.",
    "back_home": "Back to home"
  },
  "ru": {
    "title": "Спасибо за регистрацию!  Вы получите письмо с подтверждением регистрации. Пожалуйста, следуйте инструкциям, чтобы подтвердить свой адрес электронной почты.",
    "back_home": "На главную"
  },
  "uz": {
    "title": "Ro'yxatdan o'tganingiz uchun tashakkur!  Siz ro'yxatdan o'tganingizni tasdiqlovchi elektron pochta xabarini olasiz. Iltimos",
    "back_home": "Bosh sahifaga"
  }
}
</i18n>
