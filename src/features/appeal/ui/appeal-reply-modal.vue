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
  <ui-modal @close="disconnect" id="appeal-reply" size="sm" :loading :label="t('title')" @shown="onShown">
    <appeal-reply />
  </ui-modal>
</template>

<style scoped></style>

<i18n>
{
  "en": {
    "submit": "Submit",
    "title": "Discussion of the complaint"
  },
  "ru": {
    "submit": "Отправить",
    "title": "Обсуждение жалобы"
  },
  "uz": {
    "submit": "Yuborish",
    "title": "Shikoyatni muhokama qilish"
  }
}
</i18n>
