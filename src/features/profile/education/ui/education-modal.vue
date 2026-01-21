<script setup lang="ts">
import { PersonalEducation } from "~/entities/profile/personal-education"
import { usePersonalEducationService } from "~/features/profile/education"
import { SchoolsSelect, SchoolTypeSelect } from "~/widgets/references"
import UiDatePicker from "@vuepic/vue-datepicker"

const { saveEducation } = usePersonalEducationService()

const { required, requiredIf } = useRule()

const modal = useModal()

const editing = ref(false)
const loading = ref(false)
const form = ref<PersonalEducation>(new PersonalEducation())
const rules = ref({
  school_id: { required },
  school_type_id: { required },
  start_date: { required },
  diploma_number: { requiredIf: requiredIf(computed(() => form.value.end_date?.length > 0)) },
  diploma_date: { requiredIf: requiredIf(computed(() => form.value.end_date?.length > 0)) }
})

const { hasError, vuelidate } = useValidate(form, rules)

const { t } = useI18n({ useScope: "local" })

const onShown = (data: IPersonalEducation) => {
  if (data?.id) {
    editing.value = true
    form.value = data
  } else {
    editing.value = false
    form.value = new PersonalEducation()
    vuelidate.value.$reset()
  }
}
const submit = async () => {
  const valid = await vuelidate.value.$validate()
  if (valid) await saveEducation(form, loading)
}

const cancel = () => {
  vuelidate.value.$reset()
  modal.hide("appeal")
}

const label = computed(() => (editing.value ? t("actions.edit") : t("actions.add")))
</script>

<template>
  <ui-modal id="personal-education" :loading :label @shown="onShown">
    <form class="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 py-[15px]" @submit.prevent>
      <ui-form-group v-bind="hasError('school_type_id')" v-slot="{ id }" :label="t('fields.school_type')">
        <school-type-select v-model="form.school_type_id" :id></school-type-select>
      </ui-form-group>
      <ui-form-group v-bind="hasError('school_id')" v-slot="{ id }" :label="t('fields.school')">
        <schools-select v-model="form.school_id" :type_id="form.school_type_id" :id></schools-select>
      </ui-form-group>
      <ui-form-group v-bind="hasError('start_date')" v-slot="{ id }" :label="t('fields.start_date')">
        <ui-date-picker
          v-model="form.start_date"
          model-type="yyyy-MM-dd"
          format="dd-MM-yyyy"
          auto-apply
          teleport
          position="left"
          :id
        ></ui-date-picker>
      </ui-form-group>
      <ui-form-group v-slot="{ id }" :label="t('fields.end_date')">
        <ui-date-picker
          v-model="form.end_date"
          model-type="yyyy-MM-dd"
          format="dd.MM.yyyy"
          teleport
          position="left"
          clearable
          :id
        ></ui-date-picker>
      </ui-form-group>
      <template v-if="form.end_date">
        <ui-form-group v-bind="hasError('diploma_date')" v-slot="{ id }" :label="t('fields.diploma_date')">
          <ui-date-picker
            v-model="form.diploma_date"
            model-type="yyyy-MM-dd"
            format="dd.MM.yyyy"
            teleport
            position="left"
            :id
          />
        </ui-form-group>
        <ui-form-group v-bind="hasError('diploma_number')" v-slot="{ id }" :label="t('fields.diploma_number')">
          <ui-input v-model="form.diploma_number" :id />
        </ui-form-group>
      </template>
    </form>
    <template #footer>
      <div class="flex w-full items-center justify-end gap-2 p-4">
        <ui-button color="secondary" :label="t('cancel')" @click="cancel"></ui-button>
        <ui-button :label="t('submit')" @click="submit"></ui-button>
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
      "school": "Educational institution",
      "start_date": "Start date",
      "end_date": "End date",
      "diploma_date": "Diploma date",
      "diploma_number": "Diploma number"

    }
  },
  "ru": {
    "submit": "Отправить",
    "title": "Опишите проблему",
    "title_unauthorized": "Пожалуйста, введите ваше имя и email",
    "next": "Далее",
    "cancel": "Отмена",
    "fields": {
      "school": "Учебное заведение",
      "start_date": "Дата начала",
      "end_date": "Дата окончания",
      "diploma_date": "Дата получения диплома",
      "diploma_number": "Номер диплома"
    }
  },
  "uz": {
    "submit": "Yuborish",
    "title": "Muammoni tasvirlab bering",
    "title_unauthorized": "Iltimos, ismingizni va elektron pochtangizni kiriting",
    "next": "Keyingi",
    "cancel": "Bekor qilish",
    "fields": {
      "school": "Educational institution",
      "start_date": "Boshlanish sanasi",
      "end_date": "Tugash sanasi",
      "diploma_date": "Diplom sanasi",
      "diploma_number": "Diplom raqami"
    }
  }
}
</i18n>
