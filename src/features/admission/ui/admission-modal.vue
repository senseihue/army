<script setup lang="ts">
import { Admission, useAdmissionStore } from "~/entities/admission"
import { useAdmissionService } from "~/features/admission"
import { storeToRefs } from "pinia"
import { SchoolsSelect } from "~/widgets/references/school"
import UiSelect from "@vueform/multiselect"
import { RegionSelect } from "~/widgets/references/region"
import { DistrictSelect } from "~/widgets/references/district"
import { LanguageSelect } from "~/widgets/references/language"
import SpecialitySelect from "~/widgets/speciality/speciality-select.vue"
import { OfferCheckbox } from "~/widgets/references/offer"
import useAuthCallback from "~/shared/composables/use-auth-callback"

const { $session, $toast } = useNuxtApp()
const { profile } = $session || {}
const modal = useModal()

const { saveAdmission } = useAdmissionService()
const admissionStore = useAdmissionStore()
const { current } = storeToRefs(admissionStore)
const { required, not, requiredIf } = useRule()

const specialitySelect = ref(null)
const loading = ref(false)
const form = ref<Admission>(new Admission())
const rules = ref({
  season_id: { required },
  social_status_id: { required },
  offer_accepted: {
    not: not((value: boolean) => {
      return !value
    })
  },
  test_region_id: { required },
  test_district_id: { required },
  test_language_id: { required },
  school_id: { required },
  speciality_id: { required }
})

const { hasError, vuelidate } = useValidate(form, rules)

const { t } = useI18n({ useScope: "local" })

const onShown = () => {
  form.value.season_id = current.value?.season.id
}

const submit = async () => {
  const valid = await vuelidate.value.$validate()
  if (valid) {
    await useAuthCallback(
      async () => {
        const ageValid = await validateAgeRequirement()
        if (ageValid) {
          await saveAdmission(form, loading)
          vuelidate.value.$reset()
        } else $toast.error("messages.error.age_requirement_not_met")
      },
      () => {
        $toast.error(t("messages.error.something_went_wrong"))
      }
    )
  }
}

const validateAgeRequirement = async () => {
  const socialStatus = current.value?.season.social_statuses.find((status) => status.id === form.value.social_status_id)
  if (!socialStatus) return Promise.reject(false)
  const age = new Date().getFullYear() - new Date(profile.value?.person.birth_date).getFullYear()
  return Promise.resolve(age >= socialStatus.pivot.age_min && age <= socialStatus.pivot.age_max)
}

const cancel = () => {
  vuelidate.value.$reset()
  modal.hide("admission")
}
</script>

<template>
  <ui-modal id="admission" :loading :label="t('labels.send_application')" @shown="onShown">
    <form class="grid grid-cols-1 gap-4 px-4 py-[15px] md:grid-cols-2" @submit.prevent>
      <ui-form-group v-bind="hasError('social_status_id')" v-slot="{ id }" :label="t('labels.personal_status')">
        <ui-select
          v-model="form.social_status_id"
          autocomplete="off"
          append-to-body
          value-prop="id"
          label="title"
          :filter-results="false"
          :options="current?.season.social_statuses"
          :id
        ></ui-select>
      </ui-form-group>
      <ui-form-group v-bind="hasError('school_id')" v-slot="{ id }" :label="t('labels.admission_place')">
        <schools-select v-model="form.school_id" :season-id="form.season_id" :id></schools-select>
      </ui-form-group>
      <ui-form-group v-bind="hasError('test_region_id')" v-slot="{ id }" :label="t('labels.admission_region')">
        <region-select v-model="form.test_region_id" :id />
      </ui-form-group>
      <ui-form-group v-bind="hasError('test_district_id')" v-slot="{ id }" :label="t('labels.admission_region')">
        <district-select v-model="form.test_district_id" :id />
      </ui-form-group>
      <ui-form-group v-bind="hasError('test_language_id')" v-slot="{ id }" :label="t('labels.admission_language')">
        <language-select v-model="form.test_language_id" :id />
      </ui-form-group>
      <ui-form-group v-bind="hasError('speciality_id')" v-slot="{ id }" :label="t('labels.speciality')">
        <speciality-select
          v-model="form.speciality_id"
          ref="specialitySelect"
          :school-id="form.school_id"
          :season-id="form.season_id"
          :id
        />
      </ui-form-group>
      <ui-form-group v-slot="{ id }" class="col-span-full">
        <offer-checkbox
          v-model="form.offer_accepted"
          class="col-span-full"
          :oferta="current?.season?.offer"
          :class="{
            'text-danger-600 dark:text-danger-400': hasError('offer_accepted').invalid
          }"
          :id
        />
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
