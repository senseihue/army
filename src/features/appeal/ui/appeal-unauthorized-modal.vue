<script setup lang="ts">
const { hide, show } = useModal()
const loading = ref(false)

const { t } = useI18n({ useScope: "local" })

const signin = () => {
  hide("appeal-unauthorized")
  show("auth-role-select-modal")
}

const showModal = () => {
  hide("appeal-unauthorized")
  show("appeal")
}
</script>

<template>
  <ui-modal id="appeal-unauthorized" :loading :label="t('title')">
    <div class="grid grid-cols-1 gap-4 px-4 py-[15px]">
      <p>
        {{ t("description") }}
      </p>
    </div>
    <template #footer>
      <div class="flex w-full items-center justify-end gap-2 p-4">
        <ui-button color="success" type="button" :label="t('cancel')" @click="signin"></ui-button>
        <ui-button :label="t('submit')" @click="showModal"></ui-button>
      </div>
    </template>
  </ui-modal>
</template>

<style scoped></style>

<i18n>
{
  "en": {
    "submit": "Continue as a guest",
    "title": "Determine the way to file a complaint",
    "cancel": "Sign in",
    "description": "Log in to monitor the complaint status.\n If you are not registered, continue as a guest — the status will be sent to your e-mail."
  },
  "ru": {
    "submit": "Продолжить как гость",
    "title": "Определите способ подачи жалобы",
    "cancel": "Войти в кабинет",
    "description": "Войдите в систему, чтобы отслеживать статус жалобы.\n Если вы не зарегистрированы, продолжите как гость — статус будет отправлен на вашу электронную почту."
  },
  "uz": {
    "submit": "Mehmon sifatida davom etish",
    "title": "Shikoyat yuborish usulini aniqlang",
    "cancel": "Shaxsiy kabinetga kirish",
    "description": "Shikoyat holatini kuzatish uchun tizimga kiring.\n Agar siz ro'yxatdan o'tmagan bo'lsangiz, mehmon sifatida davom eting - holat elektron pochtangizga yuboriladi."
  }
}
</i18n>
