<script setup lang="ts">
import { PersonalProject } from "~/entities/profile/personal-project"
import { ProjectFileUpload, ProjectStatusSelect } from "~/features/profile/project/ui/form"
import { ProjectCategorySelect, ProjectSectorSelect } from "~/widgets/project"
import { usePersonalProjectService } from "~/features/profile/project"
import ProjectRejectReason from "~/features/profile/project/ui/form/project-reject-reason.vue"
import ProjectBudget from "~/features/profile/project/ui/form/project-budget.vue"
import { helpers } from '@vuelidate/validators'
const { savePersonalProject, getPersonalProject } = usePersonalProjectService()

const route = useRoute()
const { required, email, minLength, not } = useRule()
const { t, locale } = useI18n({
  useScope: "local"
})

const loading = ref(false)
const isMount = ref(false)
const mode = ref<"create" | "edit" | "view">("create")

const form = ref<PersonalProject>(new PersonalProject())
const rules = ref({
  category_id: { required },
  sector_id: { required },
  title: {
    en: { required, minLength: minLength(3) },
    uz: { required, minLength: minLength(3) },
    ru: { required, minLength: minLength(3) }
  },
  budget: {
    not: not((v) => {
      return !v || v === 0
    }),
    required
  },
  budgets: {
    $each: helpers.forEach({
      sum: {
        required
      }
    })
  },
  status: { required },
  location: { required },
  irr: { required },
  // upload: { required },
  pp: { required },
  // npv: { required },
  phone: { required, minLength: minLength(12) },
  email: { required, email },
  content: {
    en: { required, minLength: minLength(3) },
    uz: { required, minLength: minLength(3) },
    ru: { required, minLength: minLength(3) }
  },
  presentation: {
    en: { required },
    uz: { required },
    ru: { required }
  }
})
const { hasError, vuelidate } = useValidate(form, rules)
const onSubmit = async () => {
  const isValid = await vuelidate.value.$validate()
  if (isValid) savePersonalProject(form, loading)
}

const disabled = computed(() => mode.value === "view")

onMounted(async () => {
  if (route.params.id) {
    await getPersonalProject(Number(route.params.id), form, loading)
    if (form.value.state === "approved" || form.value.state === "pending") {
      mode.value = "view"
    } else if (form.value.state === "rejected") {
      mode.value = "edit"
    }
  } else {
    mode.value = "create"
  }
  isMount.value = true
})

defineExpose({
  onSubmit,
  mode: () => mode.value
})
</script>

<template>
  <div v-if="!isMount" class="grid min-h-96 w-full place-items-center">
    <ui-spinner size="size-32" />
  </div>
  <template v-else>
    <project-reject-reason :state="form.state" :reason="form.reject_reason" />
    <form @submit.prevent="onSubmit">
      <div class="mb-[50px] flex flex-wrap items-end justify-around gap-4">
        <project-file-upload v-model="form.upload" :disabled :size-limit="10" :label="$t('labels.image')" />
        <ui-input-with-language
          v-model="form.presentation"
          v-slot="{ id, handle, model }"
          :errors="{
            en: hasError(`presentation.en`),
            uz: hasError(`presentation.uz`),
            ru: hasError(`presentation.ru`)
          }"
        >
          <project-file-upload
            content-type="application"
            :id
            :disabled
            :size-limit="25"
            :model-value="model"
            :label="$t('labels.presentation')"
            @update:model-value="handle"
          />
        </ui-input-with-language>
      </div>
      <div class="grid grid-cols-1 gap-x-3 gap-y-2 md:grid-cols-2 md:gap-x-5 md:gap-y-4">
        <ui-form-group v-bind="hasError('category_id')" v-slot="{ id }" required :label="t('fields.category')">
          <project-category-select v-model="form.category_id" :disabled="disabled" :id />
        </ui-form-group>
        <ui-form-group v-bind="hasError('sector_id')" v-slot="{ id }" required :label="t('fields.sector')">
          <project-sector-select v-model="form.sector_id" :disabled="disabled" :id />
        </ui-form-group>
        <ui-input-with-language
          v-model="form.title"
          v-slot="{ id, handle, model }"
          required
          :errors="{
            en: hasError(`title.en`),
            uz: hasError(`title.uz`),
            ru: hasError(`title.ru`)
          }"
          :label="t('fields.title')"
        >
          <ui-input :model-value="model" :readonly="disabled" :id @update:model-value="handle" />
        </ui-input-with-language>
        <ui-form-group
          v-bind="hasError('budget')"
          v-slot="{ id }"
          required
          :label="t('fields.budget', { currency: 'USD' })"
        >
          <ui-input v-model="form.budget" type="number" :readonly="disabled" :id />
        </ui-form-group>
        <ui-form-group v-bind="hasError('status')" v-slot="{ id }" required :label="t('fields.status')">
          <project-status-select v-model="form.status" :readonly="disabled" :id />
        </ui-form-group>

        <ui-form-group v-bind="hasError('location')" v-slot="{ id }" required :label="t('fields.location')">
          <ui-input v-model="form.location" :readonly="disabled" :id />
        </ui-form-group>
        <project-budget
          v-model:ids="form.deleted_budgets"
          v-bind="hasError('budgets')"
          v-model="form.budgets"
          class="col-span-full"
          :label="t('fields.budgets')"
        />
        <!--        <ui-form-group v-bind="hasError('irr')" v-slot="{ id }" required :label="t('fields.irr')">-->
        <!--          <ui-input v-model="form.irr" :readonly="disabled" :id />-->
        <!--        </ui-form-group>-->
        <!--        <ui-form-group v-bind="hasError('pp')" v-slot="{ id }" required :label="t('fields.pp')">-->
        <!--          <ui-input v-model="form.pp" :readonly="disabled" :id />-->
        <!--        </ui-form-group>-->
        <!--      <ui-form-group v-bind="hasError('npv')" v-slot="{ id }" required :label="t('fields.npv')">-->
        <!--        <ui-input v-model="form.npv" :readonly="disabled" :id />-->
        <!--      </ui-form-group>-->
        <ui-form-group v-bind="hasError('phone')" v-slot="{ id }" required :label="t('fields.contact_phone')">
          <ui-mask-input
            v-model="form.phone"
            unmasked
            mask="+### (##) ### ## ##"
            name="phone"
            :readonly="disabled"
            :id
          />
        </ui-form-group>

        <ui-form-group v-bind="hasError('email')" v-slot="{ id }" required :label="t('fields.contact_email')">
          <ui-input v-model="form.email" :readonly="disabled" :id />
        </ui-form-group>
        <ui-input-with-language
          v-slot="{ id, handle, model }"
          v-model="form.content"
          class="col-span-full"
          required
          :errors="{
            en: hasError(`content.en`),
            uz: hasError(`content.uz`),
            ru: hasError(`content.ru`)
          }"
          :label="t('fields.description')"
        >
          <client-only>
            <lazy-tiny-editor :model-value="model" :disabled="disabled" :id @update:model-value="handle" />
          </client-only>
        </ui-input-with-language>
      </div>
    </form>
  </template>
</template>

<style scoped></style>

<i18n>
{
  "en": {
    "fields": {
      "category": "Category",
      "sector": "Sector",
      "title": "Project title",
      "budget": "Budget ({ currency })",
      "status": "Status",
      "location": "Location (Latitude, Longitude)",
      "irr": "Turnover (in USD)",
      "pp": "Term (in years)",
      "npv": "NPV",
      "contact_phone": "Contact phone",
      "contact_email": "Contact email",
      "description": "Description",
      "image": "Image",
      "presentation": "Presentation",
      "budgets": "Net cash flow by years (in USD)"
    }
  },
  "ru": {
    "fields": {
      "category": "Категория",
      "sector": "Сектор",
      "title": "Название проекта",
      "budget": "Бюджет ({ currency })",
      "status": "Статус",
      "location": "Местоположение (Широта, Долгота)",
      "irr": "Оборот (в USD)",
      "pp": "Срок (в годах)",
      "npv": "NPV",
      "contact_phone": "Контактный телефон",
      "contact_email": "Контактный email",
      "description": "Описание",
      "image": "Изображение",
      "presentation": "Презентация",
      "budgets": "Чистый поток наличности по годам (в USD)"
    }
  },
  "uz": {
    "fields": {
      "category": "Kategoriya",
      "sector": "Sektor",
      "title": "Loyiha nomi",
      "budget": "Byudjet ({ currency })",
      "status": "Holat",
      "location": "Joylashuv (Kenglik, Uzunlik)",
      "irr": "Tovar aylanmasi (USD)",
      "pp": "Muddat (yillarda)",
      "npv": "NPV",
      "contact_phone": "Aloqa telefoni",
      "contact_email": "Aloqa emaili",
      "description": "Tavsif",
      "image": "Rasm",
      "presentation": "Taqdimot",
      "budgets": "Yillik sof naqd pul oqimi (USD)"
    }
  }
}
</i18n>
