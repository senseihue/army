<script setup lang="ts">
import { Admission, useAdmissionStore } from "~/entities/admission"
import { useAdmissionService } from "~/features/admission"
import { KinshipSelect } from "~/widgets/references/kinship"
import UiDatePicker from "@vuepic/vue-datepicker"
import { storeToRefs } from "pinia"
import { SchoolsSelect } from "~/widgets/references/school"
import UiSelect from "@vueform/multiselect"
import { RegionSelect } from "~/widgets/references/region"
import { DistrictSelect } from "~/widgets/references/district"
import { LanguageSelect } from "~/widgets/references/language"
import SpecialitySelect from "~/widgets/speciality/speciality-select.vue"

const { saveAdmission } = useAdmissionService()

const { required, requiredIf } = useRule()

const modal = useModal()
const admissionStore = useAdmissionStore()
const { current } = storeToRefs(admissionStore)

const editing = ref(false)
const loading = ref(false)
const form = ref<Admission>(new Admission())
const rules = ref({
  season_id: { required },
  // offer_id: { required },
  test_region_id: { required },
  test_district_id: { required },
  test_language_id: { required },
  school_id: { required },
  speciality_id: { required }
})

const { hasError, vuelidate } = useValidate(form, rules)

const { t } = useI18n({ useScope: "local" })

const onShown = () => {
  form.value = {
    offer_id: 16,
  }
  form.value.season_id = current.value?.season.id
}
const submit = async () => {
  const valid = await vuelidate.value.$validate()
  if (valid) {
    await saveAdmission(form, loading)
  }
}

const cancel = () => {
  vuelidate.value.$reset()
  modal.hide("admission")
}

const label = computed(() => (editing.value ? t("actions.edit") : t("actions.add")))
</script>

<template>
  <ui-modal id="admission" :loading :label @shown="onShown">
    <form class="grid grid-cols-1 gap-4 px-4 py-[15px] md:grid-cols-2" @submit.prevent>
      <ui-form-group v-bind="hasError('school_id')" v-slot="{ id }" :label="t('labels.kinship')">
        <ui-select
          v-model="form.school_id"
          autocomplete="off"
          append-to-body
          value-prop="id"
          label="title"
          :filter-results="false"
          :options="current?.season.schools"
          :id
        ></ui-select>
      </ui-form-group>
      <ui-form-group v-bind="hasError('test_region_id')" v-slot="{ id }" :label="t('labels.region')">
        <region-select v-model="form.test_region_id" :id />
      </ui-form-group>
      <ui-form-group v-bind="hasError('test_district_id')" v-slot="{ id }" :label="t('labels.district')">
        <district-select v-model="form.test_district_id" :id />
      </ui-form-group>
      <ui-form-group v-bind="hasError('test_language_id')" v-slot="{ id }" :label="t('labels.language')">
        <language-select v-model="form.test_language_id" :id />
      </ui-form-group>
      <ui-form-group v-bind="hasError('speciality_id')" v-slot="{ id }" :label="t('labels.speciality')">
        <speciality-select :school-id="form.school_id" v-model="form.speciality_id" :id />
      </ui-form-group>
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
    "cancel": "Cancel"
  },
  "ru": {
    "submit": "Отправить",
    "title": "Опишите проблему",
    "title_unauthorized": "Пожалуйста, введите ваше имя и email",
    "next": "Далее",
    "cancel": "Отмена"
  },
  "uz": {
    "submit": "Yuborish",
    "title": "Muammoni tasvirlab bering",
    "title_unauthorized": "Iltimos, ismingizni va elektron pochtangizni kiriting",
    "next": "Keyingi",
    "cancel": "Bekor qilish"
  }
}
</i18n>
