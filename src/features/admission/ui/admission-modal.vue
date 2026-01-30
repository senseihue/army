<script setup lang="ts">
import { Admission, useAdmissionSchoolStore } from "~/entities/admission"
import { useAdmissionService } from "~/features/admission"
import { storeToRefs } from "pinia"
import { RegionSelect } from "~/widgets/references/region"
import { DistrictSelect } from "~/widgets/references/district"
import { LanguageSelect } from "~/widgets/references/language"
import { SpecialitySelect } from "~/widgets/references/speciality"
import useAuthCallback from "~/shared/composables/use-auth-callback"
import { useEducationStore } from "~/entities/profile/education"

const { $session, $toast } = useNuxtApp()
const { profile } = $session || {}
const modal = useModal()
const route = useRoute()

const educationStore = useEducationStore()

const { items } = storeToRefs(educationStore)

const { saveAdmission } = useAdmissionService()
const admissionSchoolStore = useAdmissionSchoolStore()
const { current } = storeToRefs(admissionSchoolStore)
const { required } = useRule()

const _specialitySelect = ref(null)
const loading = ref(false)
const form = ref<Admission>(new Admission())

const handleValidationSpeciality = (value: any) => {
  const options = _specialitySelect.value?.options() || []
  return !(options && options.length > 0 && !value)
}
const rules = ref({
  // offer_accepted: {
  //   not: not((value: boolean) => {
  //     return !value
  //   })
  // },
  test_region_id: { required },
  test_district_id: { required },
  test_language_id: { required },
  speciality_id: { requiredIf: handleValidationSpeciality }
})

const { hasError, vuelidate } = useValidate(form, rules)

const { t } = useI18n({ useScope: "local" })

const onShown = () => {
  form.value.season_id = Number(route.params.season_id)
  form.value.school_id = Number(current.value?.id)
  form.value.social_status_id = Number(route.query.social_status_id)
}

const submit = async () => {
  const valid = await vuelidate.value.$validate()
  if (valid) {
    if (items.value.length < 1) {
      modal.show("error-modal", {
        title: t("messages.error.education_requirement"),
        message: t("messages.error.education_requirement_description")
      })
      return
    }
    await useAuthCallback(
      async () => {
        await saveAdmission(form, loading)
        vuelidate.value.$reset()
      },
      () => {
        $toast.error(t("messages.error.age_restriction"))
      }
    )
  }
}

const cancel = () => {
  vuelidate.value.$reset()
  modal.hide("admission")
}

const cleanDistrict = () => {
  form.value.test_district_id = undefined
}
</script>

<template>
  <ui-modal id="admission" :loading :label="t('labels.send_application')" @shown="onShown" @hide="vuelidate.$reset">
    <form class="grid grid-cols-1 gap-4 px-4 py-[15px] md:grid-cols-2" @submit.prevent>
      <ui-form-group v-bind="hasError('test_region_id')" v-slot="{ id }" :label="t('labels.admission_region')">
        <region-select v-model="form.test_region_id" :id @update:model-value="cleanDistrict" />
      </ui-form-group>
      <ui-form-group v-bind="hasError('test_district_id')" v-slot="{ id }" :label="t('labels.admission_test_district')">
        <district-select v-model="form.test_district_id" :region-id="form.test_region_id" :id />
      </ui-form-group>
      <ui-form-group v-bind="hasError('test_language_id')" v-slot="{ id }" :label="t('labels.admission_language')">
        <language-select v-model="form.test_language_id" :id />
      </ui-form-group>
      <ui-form-group v-bind="hasError('speciality_id')" v-slot="{ id }" :label="t('labels.speciality')">
        <speciality-select
          v-model="form.speciality_id"
          ref="_specialitySelect"
          :school-id="form.school_id"
          :season-id="form.season_id"
          :id
        />
      </ui-form-group>
      <div v-if="items?.length < 1" class="col-span-full mt-2 flex flex-col items-center gap-4">
        <p>{{ t("labels.empty_education") }}</p>
        <ui-button icon-name="lucide:plus" :label="$t('actions.add')" @click="modal.show('education')"></ui-button>
      </div>
    </form>
    <template #footer>
      <div class="flex w-full items-center justify-end gap-2 p-4">
        <ui-button color="secondary" :label="t('actions.cancel')" @click="cancel"></ui-button>
        <ui-button :label="t('actions.send')" @click="submit"></ui-button>
      </div>
    </template>
  </ui-modal>
</template>

<style scoped></style>

<i18n>
{
  "ru": {
    "submit": "Отправить",
    "title": "Опишите проблему",
    "title_unauthorized": "Пожалуйста, введите ваше имя и email",
    "next": "Далее",
    "cancel": "Отмена"
  },
  "oz": {
    "submit": "Юбориш",
    "next": "Keyingi",
    "cancel": "Bekor qilish"
  },
  "uz": {
    "submit": "Yuborish",
    "next": "Keyingi",
    "cancel": "Bekor qilish"
  }
}
</i18n>
