<script setup lang="ts">
const { t } = useI18n({
  useScope: "local"
})
const modal = useModal()
</script>

<template>
  <ui-modal id="auth-error-modal" :label="t('title')">
    <div class="flex flex-col items-center gap-[30px] px-[23px] py-[15px]">
      <p class="text-justify font-normal">
        {{ t("description") }}
      </p>
      <ui-button @click="modal.hide('auth-error-modal')">Ok</ui-button>
    </div>
  </ui-modal>
</template>

<style scoped></style>

<i18n>
{
  "en": {
    "title": "User not found",
    "description": "The specified account is missing from the system or has not been activated yet. Check the correctness of the entered data or contact support."
  },
  "ru": {
    "title": "Пользователь не найден",
    "description": "Указанный аккаунт отсутствует в системе или ещё не был активирован. Проверьте правильность введённых данных или обратитесь в поддержку."
  },
  "uz": {
    "title": "Foydalanuvchi topilmadi",
    "description": "Ushbu hisob tizimda yo'q yoki hali faollashtirilmagan. Kiritilgan ma'lumotlarning to'g'riligini tekshiring yoki qo'llab-quvvatlash uchun murojaat qiling."
  }
}
</i18n>
