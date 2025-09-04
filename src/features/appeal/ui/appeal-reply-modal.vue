<script setup lang="ts">
import { AppealReply, useAppealService } from "~/features/appeal"
import { useAppealReplyStore } from "~/entities/appeal"

const { getAppealReplyList, disconnect } = useAppealService()
const appealReplyStore = useAppealReplyStore()
const { params } = storeToRefs(appealReplyStore)
const loading = ref(false)

const { t } = useI18n({ useScope: "local" })

const onShown = (id: number) => {
  params.value.appeal_id = id
  getAppealReplyList(loading)
}
</script>

<template>
  <ui-modal @close="disconnect" id="appeal-reply" size="sm" :loading :label="t('title_unauthorized')" @shown="onShown">
    <appeal-reply />
  </ui-modal>
</template>

<style scoped></style>

<i18n>
{
  "en": {
    "submit": "Submit",
    "title": "Describe the problem",
    "title_unauthorized": "Please enter your name and email",
    "next": "Next",
    "cancel": "Cancel",
    "fields": {
      "name": "Name",
      "email": "Email",
      "type": "Scope of the problem",
      "topic": "Scope of the problem",
      "region": "Region",
      "comment": "Comment"
    }
  },
  "ru": {
    "submit": "Отправить",
    "title": "Опишите проблему",
    "title_unauthorized": "Пожалуйста, введите ваше имя и email",
    "next": "Далее",
    "cancel": "Отмена",
    "fields": {
      "name": "Имя",
      "email": "Email",
      "type": "Тип проблемы",
      "topic": "Сфера проблемы",
      "region": "Регион",
      "comment": "Комментарии"
    }
  },
  "uz": {
    "submit": "Yuborish",
    "title": "Muammoni tasvirlab bering",
    "title_unauthorized": "Iltimos, ismingizni va elektron pochtangizni kiriting",
    "next": "Keyingi",
    "cancel": "Bekor qilish",
    "fields": {
      "name": "Ism",
      "email": "Email",
      "type": "Muammo turi",
      "topic": "Muammo sohasi",
      "region": "Hudud",
      "comment": "Izoh"
    }
  }
}
</i18n>
