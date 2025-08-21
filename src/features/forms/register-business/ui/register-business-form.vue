<script setup lang="ts">
import { useRegisterBusinessService } from "~/features/forms/register-business"
import { RegisterBusiness } from "~/entities/forms/register-business"
import Multiselect from "@vueform/multiselect"

const { t } = useI18n({
  useScope: "local"
})

const { createRegistration } = useRegisterBusinessService()
const aboutUs: ISelect[] = [
  { label: t("additional-information.options.about_us.google"), value: "google" },
  { label: t("additional-information.options.about_us.linkedin"), value: "linkedin" },
  { label: t("additional-information.options.about_us.instagram"), value: "instagram" },
  { label: t("additional-information.options.about_us.telegram"), value: "telegram" },
  { label: t("additional-information.options.about_us.forum"), value: "forum" },
  { label: t("additional-information.options.about_us.other"), value: "other" }
]

const form = ref<RegisterBusiness>(new RegisterBusiness())
const loading = ref(false)
const route = useRoute()

const { required, email, minLength, requiredIf } = useRule()
const rules = ref({
  company_name: { required },
  tin: {
    requiredIf: requiredIf(computed(() => form.value.is_resident))
  },
  legal_address: { required },
  website: { required },

  pin: {
    requiredIf: requiredIf(computed(() => form.value.is_resident))
  },
  name: { required },
  surname: { required },
  phone: { required, minLength: minLength(12) }, // Assuming mobile should be at least 9 characters long
  email: {
    required,
    email
  },
  source: { required },
  comments: { required }

})
const { vuelidate, hasError } = useValidate(form, rules)
const submit = async () => {
  const isValid = await vuelidate.value.$validate()
  if (isValid) createRegistration(form, loading)
}

onMounted(() => {
  if (route.query.type && route.query.type !== "resident") {
    form.value.is_resident = false
  }
})
</script>

<template>
  <form class="register-business-form" @submit.prevent="submit">
    <div class="grid gap-4 sm:grid-cols-2">
      <h3 class="title col-span-full bg-blue-bondi text-white">{{ t("company-information.title") }}:</h3>
      <ui-form-group v-bind="hasError('company_name')" v-slot="{ id }">
        <ui-input
          v-model="form.company_name"
          name="company_name"
          :id
          :placeholder="t('company-information.fields.company-name')"
        />
      </ui-form-group>

      <ui-form-group v-if="form.is_resident" v-bind="hasError('tin')" v-slot="{ id }">
        <ui-input v-model="form.tin" name="tin" :id :placeholder="t('company-information.fields.tin')" />
      </ui-form-group>

      <ui-form-group v-bind="hasError('legal_address')" v-slot="{ id }">
        <ui-input
          v-model="form.legal_address"
          name="legal_address"
          :id
          :placeholder="t('company-information.fields.legal-address')"
        />
      </ui-form-group>
      <ui-form-group v-bind="hasError('website')" v-slot="{ id }">
        <ui-input v-model="form.website" name="website" :placeholder="t('company-information.fields.website')" :id />
      </ui-form-group>

      <ui-form-group v-slot="{ id }" class="col-span-full">
        <ui-checkbox
          v-model="form.is_resident"
          name="is_resident"
          label-class="text-white"
          :label="t('company-information.fields.is_resident')"
          :id
        />
      </ui-form-group>
    </div>

    <div class="grid gap-4 sm:grid-cols-2">
      <h3 class="title col-span-full bg-blue-command text-white">{{ t("applicant.title") }}:</h3>
      <ui-form-group v-bind="hasError('name')" v-slot="{ id }">
        <ui-input v-model="form.name" name="name" :placeholder="t('applicant.fields.name')" :id />
      </ui-form-group>
      <ui-form-group v-bind="hasError('surname')" v-slot="{ id }">
        <ui-input v-model="form.surname" name="surname" :placeholder="t('applicant.fields.surname')" :id />
      </ui-form-group>
      <ui-form-group v-bind="hasError('phone')" v-slot="{ id }">
        <ui-mask-input
          v-model="form.phone"
          unmasked
          mask="+### (##) ### ## ##"
          name="phone"
          :placeholder="t('applicant.fields.mobile')"
          :id
        />
      </ui-form-group>
      <ui-form-group v-bind="hasError('email')" v-slot="{ id }">
        <ui-input v-model="form.email" type="email" name="email" :placeholder="t('applicant.fields.email')" :id />
      </ui-form-group>
      <ui-form-group v-if="form.is_resident" v-bind="hasError('pin')" v-slot="{ id }">
        <ui-input v-model="form.pin" :id :placeholder="t('company-information.fields.pin')" />
      </ui-form-group>
    </div>

    <div class="grid gap-4 sm:grid-cols-2">
      <h3 class="title col-span-full bg-blue-bondi text-white">{{ t("additional-information.title") }}:</h3>
      <ui-form-group v-bind="hasError('source')" v-slot="{ id }">
        <multiselect
          v-model="form.source"
          name="source"
          :placeholder="t('additional-information.fields.find-type')"
          :options="aboutUs"
          :id
          @change="form.source_variant = ''"
        />
      </ui-form-group>
      <ui-form-group v-bind="hasError('comments')" v-slot="{ id }">
        <ui-input
          v-model="form.comments"
          name="comments"
          :id
          :placeholder="t('additional-information.fields.comments')"
        />
      </ui-form-group>
      <ui-form-group v-bind="hasError('source_variant')" v-if="form.source === 'other'" v-slot="{ id }">
        <ui-input
          v-model="form.source_variant"
          name="source_variant"
          :id
          :placeholder="t('additional-information.fields.aboutUsOther')"
        />
      </ui-form-group>
    </div>

    <div class="mt-6 flex items-center justify-center">
      <ui-button
        class="w-full sm:w-auto"
        rounded
        size="lg"
        type="submit"
        color="success"
        :loading
        :label="t('submit-button')"
      />
    </div>
  </form>
</template>

<style>
.register-business-form {
  @apply mx-auto grid max-w-3xl gap-6;

  .title {
    @apply mt-4 rounded-3xl px-6 py-3 text-center font-bold;
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
        "website": "Website",
        "is_resident": "I am a resident of the Republic of Uzbekistan",
        "pin": "PINOI"
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
    "additional-information": {
      "title": "Additional Information",
      "fields": {
        "find-type": "How did you find out about us?",
        "comments": "Comments",
        "aboutUsOther": "Write your variant here"
      },
      "options": {
        "about_us": {
          "google": "Google",
          "linkedin": "LinkedIn",
          "instagram": "Instagram",
          "telegram": "Telegram",
          "forum": "Forum",
          "other": "Other"
        }
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
        "website": "Веб-сайт",
        "is_resident": "Я являюсь резидентом Республики Узбекистан",
        "pin": "ПИНФЛ"
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
    "additional-information": {
      "title": "Дополнительная информация",
      "fields": {
        "find-type": "Как вы узнали о нас?",
        "comments": "Комментарии",
        "aboutUsOther": "Напишите ваш вариант здесь"
      }
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
        "website": "Veb-sayt",
        "is_resident": "Men O'zbekiston Respublikasi rezidentiman",
        "pin": "PINFL"
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
    "additional-information": {
      "title": "Qo'shimcha ma'lumotlar",
      "fields": {
        "find-type": "Biz haqimizda qanday ma'lumot oldingiz?",
        "comments": "Izohlar",
        "aboutUsOther": "Bu yerda o'z variantingizni yozing"
      }
    },

    "submit-button": "Ro'yxatdan o'tish"
  }
}
</i18n>
