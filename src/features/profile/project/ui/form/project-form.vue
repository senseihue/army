<script setup lang="ts">
import { PersonalProject } from "~/entities/profile/personal-project"
import { ProjectFileUpload, ProjectStatusSelect } from "~/features/profile/project/ui/form"
import { ProjectCategorySelect, ProjectSectorSelect } from "~/widgets/project"
import { usePersonalProjectService } from "~/features/profile/project"

const { savePersonalProject, getPersonalProject } = usePersonalProjectService()

const route = useRoute()
const { required, email, minLength } = useRule()
const { t } = useI18n({
  useScope: "local"
})

const loading = ref(false)
const mode = ref<"create" | "edit" | "view">("create")

const form = ref<PersonalProject>(new PersonalProject())
const rules = ref({
  category_id: { required },
  sector_id: { required },
  title: { required, minLength: minLength(3) },
  budget: { required },
  status: { required },
  location: { required },
  irr: { required },
  upload: { required },
  pp: { required },
  npv: { required },
  phone: { required, minLength: minLength(12) },
  email: { required, email },
  content: { required },
  presentation: { required }
})
const { hasError, vuelidate } = useValidate(form, rules)
const onSubmit = async () => {
  const isValid = await vuelidate.value.$validate()
  if (isValid) savePersonalProject(form, loading)
}

onMounted(async () => {
  if (route.query.id) {
    await getPersonalProject(Number(route.query.id), form, loading)
    if (form.value.state === "approved") {
      mode.value = "view"
    } else {
      mode.value = "edit"
    }
  } else {
    mode.value = "create"
  }
})
</script>

<template>
  <form @submit.prevent="onSubmit">
    <div>
      <project-file-upload label="" />
      <project-file-upload label="" />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 md:gap-x-5 md:gap-y-4">
      <ui-form-group v-bind="hasError('category_id')" v-slot="{ id }" :label="t('fields.category')">
        <project-category-select v-model="form.category_id" :readonly="mode === 'view'" :id />
      </ui-form-group>
      <ui-form-group v-bind="hasError('sector_id')" v-slot="{ id }" :label="t('fields.sector')">
        <project-sector-select v-model="form.sector_id" :readonly="mode === 'view'" :id />
      </ui-form-group>
      <ui-form-group v-bind="hasError('title')" v-slot="{ id }" :label="t('fields.title')">
        <ui-input v-model="form.title" :readonly="mode === 'view'" :id />
      </ui-form-group>
      <ui-form-group v-bind="hasError('budget')" v-slot="{ id }" :label="t('fields.budget', { currency: 'USD' })">
        <ui-input v-model="form.budget" type="number" :readonly="mode === 'view'" :id />
      </ui-form-group>
      <ui-form-group v-bind="hasError('status')" v-slot="{ id }" :label="t('fields.status')">
        <project-status-select v-model="form.status" :readonly="mode === 'view'" :id />
      </ui-form-group>

      <ui-form-group v-bind="hasError('location')" v-slot="{ id }" :label="t('fields.location')">
        <ui-input v-model="form.location" :readonly="mode === 'view'" :id />
      </ui-form-group>
      <ui-form-group v-bind="hasError('irr')" v-slot="{ id }" :label="t('fields.irr')">
        <ui-input v-model="form.irr" :readonly="mode === 'view'" :id />
      </ui-form-group>
      <ui-form-group v-bind="hasError('pp')" v-slot="{ id }" :label="t('fields.pp')">
        <ui-input v-model="form.pp" :readonly="mode === 'view'" :id />
      </ui-form-group>
      <ui-form-group v-bind="hasError('npv')" v-slot="{ id }" :label="t('fields.npv')">
        <ui-input v-model="form.npv" :readonly="mode === 'view'" :id />
      </ui-form-group>
      <ui-form-group v-bind="hasError('phone')" v-slot="{ id }" :label="t('fields.contact_phone')">
        <ui-mask-input
          v-model="form.phone"
          unmasked
          mask="+### (##) ### ## ##"
          name="phone"
          :readonly="mode === 'view'"
          :id
        />
      </ui-form-group>

      <ui-form-group v-bind="hasError('email')" v-slot="{ id }" :label="t('fields.contact_email')">
        <ui-input v-model="form.email" :readonly="mode === 'view'" :id />
      </ui-form-group>
      <ui-form-group class="col-span-full" v-bind="hasError('content')" v-slot="{ id }" :label="t('fields.description')">
        <tiny-editor v-model="form.content" :readonly="mode === 'view'" :id />
      </ui-form-group>

    </div>
  </form>
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
      "irr": "IRR",
      "pp": "PP",
      "npv": "NPV",
      "contact_phone": "Contact phone",
      "contact_email": "Contact email",
      "description": "Description",
      "image": "Image",
      "presentation": "Presentation"
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
      "irr": "IRR",
      "pp": "PP",
      "npv": "NPV",
      "contact_phone": "Контактный телефон",
      "contact_email": "Контактный email",
      "description": "Описание",
      "image": "Изображение",
      "presentation": "Презентация"
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
      "irr": "IRR",
      "pp": "PP",
      "npv": "NPV",
      "contact_phone": "Aloqa telefoni",
      "contact_email": "Aloqa emaili",
      "description": "Tavsif",
      "image": "Rasm",
      "presentation": "Taqdimot"
    }
  }
}
</i18n>
