<script setup lang="ts">
import {Admission, useAdmissionStore} from "~/entities/admission"
import { useAdmissionService } from "~/features/admission"
import { KinshipSelect } from "~/widgets/references/kinship"
import UiDatePicker from "@vuepic/vue-datepicker"
import {storeToRefs} from "pinia";
import {SchoolsSelect} from "~/widgets/references/school";
import UiSelect from "@vueform/multiselect"
import {RegionSelect} from "~/widgets/references/region";

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
  // test_region_id: { required },
  // test_district_id: { required },
  // test_language_id: { required },
  school_id: { required },
  // speciality_id: { required }
})

const { hasError, vuelidate } = useValidate(form, rules)

const { t } = useI18n({ useScope: "local" })

const onShown = () => {
  form.value = {
    "season_id": 16,
    "offer_id": 16,
    "test_region_id": 16,
    "test_district_id": 16,
    "test_language_id": 16,
    "school_id": 16,
    "speciality_id": 16
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
    <form class="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 py-[15px]" @submit.prevent>
      <ui-form-group v-bind="hasError('school_id')" v-slot="{ id }" :label="t('labels.kinship')">
        <ui-select autocomplete="off"
                   append-to-body
                   :filter-results="false" :options="current?.season.schools" value-prop="id" label="title" v-model="form.school_id" :id></ui-select>
      </ui-form-group>
      <ui-form-group v-bind="hasError('test_region_id')" v-slot="{ id }" :label="t('labels.region')">
        <region-select v-model="form.test_region_id" :id />
      </ui-form-group>
      <ui-form-group v-bind="hasError('first_name')" v-slot="{ id }" :label="t('labels.first_name')">
        <ui-input v-model="form.first_name" :id></ui-input>
      </ui-form-group>
      <ui-form-group v-bind="hasError('last_name')" v-slot="{ id }" :label="t('labels.last_name')">
        <ui-input v-model="form.last_name" :id></ui-input>
      </ui-form-group>
      <ui-form-group v-bind="hasError('middle_name')" v-slot="{ id }" :label="t('labels.middle_name')">
        <ui-input v-model="form.middle_name" :id></ui-input>
      </ui-form-group>
      <ui-form-group v-bind="hasError('pin')" v-slot="{ id }" :label="t('labels.pin')">
        <ui-input v-model="form.pin" :id></ui-input>
      </ui-form-group>
      <ui-form-group v-bind="hasError('birth_date')" v-slot="{ id }" :label="t('labels.birth_date')">
        <ui-date-picker
            v-model="form.birth_date"
            model-type="yyyy-MM-dd"
            format="dd-MM-yyyy"
            auto-apply
            teleport
            position="left"
            :id
        ></ui-date-picker>
      </ui-form-group>
      <ui-form-group v-bind="hasError('birth_place')" v-slot="{ id }" :label="t('labels.birth_place')">
        <ui-input v-model="form.birth_place" :id></ui-input>
      </ui-form-group>
      <ui-form-group v-bind="hasError('work_place')" v-slot="{ id }" :label="t('labels.work_place')">
        <ui-input v-model="form.work_place" :id></ui-input>
      </ui-form-group>
      <ui-form-group v-bind="hasError('address')" v-slot="{ id }" :label="t('labels.address')">
        <ui-input v-model="form.address" :id></ui-input>
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
