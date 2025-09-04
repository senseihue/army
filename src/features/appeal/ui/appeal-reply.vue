<script setup lang="ts">
import { AppealReplyItem, useAppealService } from "~/features/appeal"
import { AppealReply, useAppealReplyStore, useAppealStore } from "~/entities/appeal"

const { sendAppealReply, observe } = useAppealService()
const appealReplyStore = useAppealReplyStore()
const appealStore = useAppealStore()
const { t } = useI18n({ useScope: "local" })

const { sentinel, items  } = storeToRefs(appealReplyStore)
const { current } = storeToRefs(appealStore)

const loading = ref(false)

const { required } = useRule()
const form = ref<AppealReply>(new AppealReply())
const rules = ref({
  response: { required }
})
const { vuelidate } = useValidate(form, rules)
const send = async () => {
  const isValid = await vuelidate.value.$validate()
  if (isValid) sendAppealReply(form, loading)
}

onMounted(observe)
</script>

<template>
  <div class="appeal-reply">
    <div class="appeal-reply__list">
      <template v-if="items.length > 0">
        <appeal-reply-item v-for="reply in items" :key="reply.id" :reply />
        <div ref="sentinel"></div>
      </template>
      <div v-else class=" grow w-full py-12 text-center ">
        <p class="font-semibold text-blue-midnight">
          {{ t("empty_appeals") }}
        </p>
      </div>
    </div>

    <form v-if="current?.status === 'reviewed'" class="appeal-reply__input" @submit.prevent="send">
      <ui-input v-model="form.response" class="w-full" size="sm"></ui-input>
      <ui-icon-button variant="ghost" icon-class="w-6 h-6" icon-name="lucide:send" :loading />
    </form>
  </div>
</template>

<style>
.appeal-reply {
  @apply p-4;

  &__list {
    @apply flex max-h-[400px] min-h-[400px] w-full flex-col-reverse gap-4 overflow-y-auto;
  }

  &__input {
    @apply mt-4 flex w-full items-center gap-2;

    .ui-input {
    }
  }
}
</style>
<i18n>
{
  "en": {
    "empty_appeals": "You haven't left any complaints or suggestions yet."
  },
  "ru": {
    "empty_appeals": "Вы еще не оставили никаких жалоб или предложений."
  },
  "uz": {
    "empty_appeals": "Siz hali hech qanday shikoyat yoki taklif qoldirmadingiz."
  }
}
</i18n>
