<script setup lang="ts">
const { t } = useI18n({
  useScope: "local"
})
const modal = useModal()
const title = ref("")
const message = ref("")

const shown = ({ title: _title, message: _message }: IModal["error-modal"]) => {
  title.value = _title
  message.value = _message
}

const close = () => {
  modal.hide("error-modal")
}
</script>

<template>
  <ui-modal id="error-modal" :label="$t(title)" @shown="shown">
    <div class="flex flex-col items-center gap-[30px] px-[23px] py-[15px]">
      <p class="text-justify font-normal">
        {{ $t(message) }}
      </p>
      <ui-button @click="close">Ok</ui-button>
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
