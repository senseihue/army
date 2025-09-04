<script setup lang="ts">
import { useAppealService } from "~/features/appeal"
import { AppealResolve } from "~/entities/appeal"

const { rejectAppeal } = useAppealService()
const { hide } = useModal()
const { required } = useRule()
const loading = ref(false)

const { t } = useI18n({ useScope: "local" })

const form = ref<AppealResolve>(new AppealResolve(false))
const rules = ref({
  reason: { required }
})
const { hasError, vuelidate } = useValidate(form, rules)

const onShown = (id: number) => {
  vuelidate.value.$reset()
  form.value.appeal_id = id
}

const submit = async () => {
  const isValid = await vuelidate.value.$validate()
  if (isValid) rejectAppeal(form, loading)
}

const cancel = () => {
  vuelidate.value.$reset()
  hide("appeal-reject")
}
</script>

<template>
  <ui-modal id="appeal-reject" size="sm" :loading :label="t('title')" @before-show="onShown">
    <form class="grid grid-cols-1 gap-4 px-4 py-[15px]" @submit.prevent="submit">
      <ui-form-group v-bind="hasError('reason')" v-slot="{ id }" :label="t('fields.comment')">
        <ui-textarea v-model="form.reason" rows="6" :id />
      </ui-form-group>
      <div class="flex w-full items-center justify-end gap-2">
        <ui-button color="secondary" :label="t('cancel')" type="button" @click="cancel"></ui-button>
        <ui-button :label="t('submit')"></ui-button>
      </div>
    </form>
  </ui-modal>
</template>

<style scoped></style>

<i18n>
{
  "en": {
    "submit": "Submit",
    "title": "The problem has not been solved",
    "cancel": "Cancel",
    "fields": {
      "comment": "Comment"
    }
  },
  "ru": {
    "submit": "Отправить",
    "title": "Проблема не решена",
    "cancel": "Отмена",
    "fields": {
      "comment": "Комментарии"
    }
  },
  "uz": {
    "submit": "Yuborish",
    "title": "Muammo hal qilinmadi",
    "cancel": "Bekor qilish",
    "fields": {
      "comment": "Izoh"
    }
  }
}
</i18n>
