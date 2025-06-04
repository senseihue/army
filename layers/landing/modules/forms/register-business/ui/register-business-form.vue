<script setup lang="ts">
import { RegisterBusiness } from "#layers/landing/modules/forms/register-business"

const { t } = useI18n({
  useScope: "local"
})

const form = ref<RegisterBusiness>(new RegisterBusiness())

const { required, email, minLength } = useRule()
const rules = ref({
  companyName: { required },
  tin: { required },
  legalAddress: { required },
  website: { required },

  name: { required },
  surname: { required },
  mobile: { required, minLength: minLength(12) }, // Assuming mobile should be at least 9 characters long
  email: {
    required,
    email
  },

  projectName: { required },
  projectPurpose: { required },
  totalInvestment: {
    required
  },
  ownContribution: {
    required
  },

  file: {
    required
    // Add file validation rules if needed
  }
})
const { vuelidate, hasError } = useValidate(form, rules)
const submit = async () => {
  const isValid = await vuelidate.value.$validate()
  if (isValid) {
    // Handle form submission logic here
    console.log("Form submitted:", form.value)
  } else {
    console.error("Form validation failed")
  }
}
</script>

<template>
  <form class="register-business-form" @submit.prevent="submit">
    <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
      <h3 class="title col-span-full">{{ t("company-information.title") }}:</h3>
      <ui-form-group
        v-bind="hasError('companyName')"
        v-slot="{ id }"
        :label="t('company-information.fields.company-name')"
      >
        <ui-input v-model="form.companyName" name="companyName" :id />
      </ui-form-group>

      <ui-form-group v-bind="hasError('tin')" v-slot="{ id }" :label="t('company-information.fields.tin')">
        <ui-input v-model="form.tin" name="tin" :id />
      </ui-form-group>

      <ui-form-group
        v-bind="hasError('legalAddress')"
        v-slot="{ id }"
        :label="t('company-information.fields.legal-address')"
      >
        <ui-input v-model="form.legalAddress" name="legalAddress" :id />
      </ui-form-group>
      <ui-form-group v-bind="hasError('website')" v-slot="{ id }" :label="t('company-information.fields.website')">
        <ui-input v-model="form.website" name="website" :id />
      </ui-form-group>
    </div>

    <hr />

    <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
      <h3 class="title col-span-full">{{ t("applicant.title") }}:</h3>
      <ui-form-group v-bind="hasError('name')" v-slot="{ id }" :label="t('applicant.fields.name')">
        <ui-input v-model="form.name" name="name" :id />
      </ui-form-group>
      <ui-form-group v-bind="hasError('surname')" v-slot="{ id }" :label="t('applicant.fields.surname')">
        <ui-input v-model="form.surname" name="surname" :id />
      </ui-form-group>
      <ui-form-group v-bind="hasError('mobile')" v-slot="{ id }" :label="t('applicant.fields.mobile')">
        <ui-mask-input v-model="form.mobile" unmasked mask="+### (##) ### ## ##" name="phone" :id />
      </ui-form-group>
      <ui-form-group v-bind="hasError('email')" v-slot="{ id }" :label="t('applicant.fields.email')">
        <ui-input v-model="form.email" type="email" name="email" :id />
      </ui-form-group>
    </div>

    <hr />

    <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
      <h3 class="title col-span-full">{{ t("project-information.title") }}:</h3>
      <ui-form-group
        v-bind="hasError('projectName')"
        v-slot="{ id }"
        :label="t('project-information.fields.project-name')"
      >
        <ui-input v-model="form.projectName" name="projectName" :id />
      </ui-form-group>
      <ui-form-group
        v-bind="hasError('projectPurpose')"
        v-slot="{ id }"
        :label="t('project-information.fields.project-purpose')"
      >
        <ui-input v-model="form.projectPurpose" name="projectPurpose" :id />
      </ui-form-group>
      <ui-form-group
        v-bind="hasError('totalInvestment')"
        v-slot="{ id }"
        :label="t('project-information.fields.total-investment')"
      >
        <ui-input v-model="form.totalInvestment" name="totalInvestment" :id />
      </ui-form-group>
      <ui-form-group
        v-bind="hasError('ownContribution')"
        v-slot="{ id }"
        :label="t('project-information.fields.own-contribution')"
      >
        <ui-input v-model="form.ownContribution" name="ownContribution" :id />
      </ui-form-group>
    </div>

    <hr />

    <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
      <h3 class="title col-span-full">
        {{ t("file.title") }}
      </h3>
      <ui-form-group v-bind="hasError('file')" v-slot="{ id }" class="col-span-full">
        <ui-file-input v-model="form.file" name="file" :id :placeholder="t('file.placeholder')" />
      </ui-form-group>
    </div>

    <div class="mt-6 flex items-center justify-center">
      <ui-button class="w-full sm:w-auto" rounded size="lg" type="submit" color="success" :label="t('submit-button')" />
    </div>
  </form>
</template>

<style>
.register-business-form {
  @apply mx-auto grid max-w-3xl gap-6;

  .title {
    @apply text-lg font-bold;
  }
}
</style>

<i18n>
{
  "en": {
    "company-information": {
      "title": "Company Information",
      "fields": {
        "company-name": "Company Name",
        "tin": "TIN",
        "legal-address": "Legal Address",
        "website": "Website"
      }
    },
    "applicant": {
      "title": "Applicant",
      "fields": {
        "name": "Name",
        "surname": "Surname",
        "mobile": "Mobile",
        "email": "Email"
      }
    },
    "project-information": {
      "title": "Project Information",
      "fields": {
        "project-name": "Project Name",
        "project-purpose": "Project Purpose",
        "total-investment": "Total Investment (in USD)",
        "own-contribution": "Own Contribution (in USD)"
      }
    },
    "file": {
      "title": "Attach the file",
      "placeholder": "Drag and drop or upload file"
    },
    "submit-button": "Register"
  },
  "ru": {
    "company-information": {
      "title": "Основная информация",
      "fields": {
        "company-name": "Название компании",
        "tin": "ИНН",
        "legal-address": "Юридический адрес",
        "website": "Веб-сайт"
      }
    },
    "applicant": {
      "title": "Заявитель",
      "fields": {
        "name": "Имя",
        "surname": "Фамилия",
        "mobile": "Мобильный телефон",
        "email": "Электронная почта"
      }
    },
    "project-information": {
      "title": "Информация о проекте",
      "fields": {
        "project-name": "Название проекта",
        "project-purpose": "Цель проекта",
        "total-investment": "Общая сумма необходимиых инвестиций (в долларах США)",
        "own-contribution": "Собственный средства (в долларах США)"
      }
    },
    "file": {
      "title": "Прикрепите файл",
      "placeholder": "Перетащите файл или загрузите его"
    },
    "submit-button": "Зарегистрироваться"
  },
  "uz": {
    "company-information": {
      "title": "Kompaniya ma'lumotlar",
      "fields": {
        "company-name": "Kompaniya nomi",
        "tin": "STIR",
        "legal-address": "Yuridik manzil",
        "website": "Veb-sayt"
      }
    },
    "applicant": {
      "title": "Murojaatchi:",
      "fields": {
        "name": "Ism",
        "surname": "Familiya",
        "mobile": "Mobil telefon",
        "email": "Elektron pochta"
      }
    },
    "project-information": {
      "title": "Loyiha ma'lumotlari",
      "fields": {
        "project-name": "Loyiha nomi",
        "project-purpose": "Loyiha maqsadi",
        "total-investment": "Talab etilayotan investitsiya miqdori (AQSH dollarida)",
        "own-contribution": "Shundan o'z mablag'i (AQSH dollarida)"
      }
    },
    "file": {
      "title": "Fayl yuklash",
      "placeholder": "Faylni tashlash yoki yuklash"
    },
    "submit-button": "Ro'yxatdan o'tish"
  }
}
</i18n>
