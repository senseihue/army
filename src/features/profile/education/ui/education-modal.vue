<script setup lang="ts">
import { Appeal } from "~/entities/appeal"
import { useAppealService, AppealTopicSelect, AppealTypeSelect } from "~/features/appeal"
import { TerritorySelect } from "~/features/territory"

const { createAppeal, getAppeal } = useAppealService()
const { $session } = useNuxtApp()
const { loggedIn } = $session || {}

const { required, email, requiredIf } = useRule()

const modal = useModal()

const editing = ref(false)
const loading = ref(false)
const unauthorized = ref(false)
const form = ref<Appeal>(new Appeal())
const rules = ref({
  type_id: { required },
  topic_id: { required },
  region_id: { required },
  text: { required },
  full_name: { requiredIf: requiredIf(computed(() => unauthorized.value)) },
  email: { requiredIf: requiredIf(computed(() => unauthorized.value)), email }
})

const { hasError, vuelidate } = useValidate(form, rules)

const { t } = useI18n({ useScope: "local" })

const onShown = (id: number) => {
  if (id) {
    editing.value = true
    getAppeal(id, form, loading)
  } else {
    editing.value = false
    form.value = new Appeal()
    vuelidate.value.$reset()
    unauthorized.value = !loggedIn.value
  }
}
const submit = async () => {
  const valid = await vuelidate.value.$validate()
  if (valid) await createAppeal(form, loading)
}

const next = async () => {
  await vuelidate.value.email.$validate()
  await vuelidate.value.full_name.$validate()
  if (hasError("full_name").invalid || hasError("email").invalid) {
    return
  } else {
    unauthorized.value = false
  }
}

const cancel = () => {
  vuelidate.value.$reset()
  modal.hide("appeal")
}

const label = computed(() => (unauthorized.value ? t("title_unauthorized") : t("title")))
</script>

<template>
  <ui-modal id="personal-education" :loading :label @shown="onShown">
    <form class="grid grid-cols-1 gap-4 px-4 py-[15px]" @submit.prevent>
      <template v-if="unauthorized">
        <ui-form-group v-bind="hasError('full_name')" v-slot="{ id }" :label="t('fields.name')">
          <ui-input v-model="form.full_name" :id></ui-input>
        </ui-form-group>
        <ui-form-group v-bind="hasError('email')" v-slot="{ id }" :label="t('fields.email')">
          <ui-input v-model="form.email" :id></ui-input>
        </ui-form-group>
      </template>
      <template v-else>
        <ui-form-group v-bind="hasError('topic_id')" v-slot="{ id }" :label="t('fields.type')">
          <appeal-topic-select v-model="form.topic_id" :disabled="editing" :id></appeal-topic-select>
        </ui-form-group>
        <ui-form-group v-bind="hasError('type_id')" v-slot="{ id }" :label="t('fields.topic')">
          <appeal-type-select
            v-model="form.type_id"
            :disabled="editing"
            :parent-id="form.topic_id"
            :id
          ></appeal-type-select>
        </ui-form-group>
        <ui-form-group v-bind="hasError('region_id')" v-slot="{ id }" :label="t('fields.region')">
          <territory-select v-model="form.region_id" :disabled="editing" :id></territory-select>
        </ui-form-group>
        <ui-form-group v-bind="hasError('text')" v-slot="{ id }" :label="t('fields.comment')">
          <ui-textarea v-model="form.text" rows="8" :disabled="editing" :id></ui-textarea>
        </ui-form-group>
        <ui-form-group v-if="editing && form.reject_reason" :label="t('fields.reson')">
          <ui-textarea v-model="form.reject_reason" rows="8" :disabled="true"></ui-textarea>
        </ui-form-group>
      </template>
    </form>
    <template #footer>
      <div class="flex w-full items-center justify-end gap-2 p-4">
        <ui-button color="secondary" :label="t('cancel')" @click="cancel"></ui-button>
        <template v-if="!editing">
          <ui-button v-if="unauthorized" :label="t('next')" @click="next"></ui-button>
          <ui-button v-else :label="t('submit')" @click="submit"></ui-button>
        </template>
      </div>
    </template>
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
      "comment": "Comment",
      "reason": "Reason for rejection"
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
      "comment": "Комментарии",
      "reason": "Причина закрытия"
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
      "comment": "Izoh",
      "reason": "Rad etish sababi"
    }
  }
}
</i18n>
