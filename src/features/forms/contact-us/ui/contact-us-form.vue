<script setup lang="ts">
import { PurposeOfContactSelect, useContactUsService } from "~/features/forms/contact-us"
import { ContactUs } from "~/entities/forms/contact-us"

const { t } = useI18n({
  useScope: "local"
})

const { createRegistration } = useContactUsService()

const form = ref<ContactUs>(new ContactUs())
const loading = ref(false)

const { required, email, minLength } = useRule()
const rules = ref({
  name: { required },
  last_name: { required },
  email: { required, email },
  phone: { required, minLength: minLength(12) },
  website: { required },
  country: { required },
  designation: { required },
  message: { required },
  purpose: { required },
  company_name: { required }
})
const { vuelidate, hasError } = useValidate(form, rules)
const submit = async () => {
  const isValid = await vuelidate.value.$validate()
  if (isValid) createRegistration(form, loading)
}
</script>

<template>
  <form class="register-business-form" @submit.prevent="submit">
    <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
      <h3 class="title col-span-full">{{ t("contact-us.title") }}:</h3>
      <ui-form-group v-bind="hasError('purpose')" v-slot="{ id }" :label="t('contact-us.fields.purpose')">
        <purpose-of-contact-select v-model="form.purpose" name="purpose" :id />
      </ui-form-group>

      <ui-form-group v-bind="hasError('name')" v-slot="{ id }" :label="t('contact-us.fields.name')">
        <ui-input v-model="form.name" name="name" :id />
      </ui-form-group>

      <ui-form-group v-bind="hasError('last_name')" v-slot="{ id }" :label="t('contact-us.fields.last-name')">
        <ui-input v-model="form.last_name" name="last_name" :id />
      </ui-form-group>
      <ui-form-group v-bind="hasError('company_name')" v-slot="{ id }" :label="t('contact-us.fields.company-name')">
        <ui-input v-model="form.company_name" name="company_name" :id />
      </ui-form-group>
      <ui-form-group v-bind="hasError('designation')" v-slot="{ id }" :label="t('contact-us.fields.designation')">
        <ui-input v-model="form.designation" name="designation" :id />
      </ui-form-group>
      <ui-form-group v-bind="hasError('website')" v-slot="{ id }" :label="t('contact-us.fields.website')">
        <ui-input v-model="form.website" name="website" :id />
      </ui-form-group>
      <ui-form-group v-bind="hasError('country')" v-slot="{ id }" :label="t('contact-us.fields.country')">
        <ui-input v-model="form.country" name="country" :id />
      </ui-form-group>
      <ui-form-group v-bind="hasError('email')" v-slot="{ id }" :label="t('contact-us.fields.email')">
        <ui-input v-model="form.email" type="email" name="email" :id />
      </ui-form-group>
      <ui-form-group v-bind="hasError('phone')" v-slot="{ id }" :label="t('contact-us.fields.phone')">
        <ui-mask-input v-model="form.phone" unmasked mask="+### (##) ### ## ##" :id />
      </ui-form-group>

      <ui-form-group
        v-bind="hasError('message')"
        v-slot="{ id }"
        class="col-span-full"
        :label="t('contact-us.fields.message')"
      >
        <ui-textarea v-model="form.message" name="message" :id />
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
    @apply text-lg font-bold;
  }
}
</style>

<i18n>
{
  "en": {
    "contact-us": {
      "title": "Company Information",
      "fields": {
        "company-name": "Company Name",
        "website": "Website",
        "name": "Name",
        "last-name": "Last Name",
        "email": "Email",
        "phone": "Phone",
        "designation": "Designation",
        "purpose": "Purpose of Contact",
        "country": "Country",
        "message": "Message"
      }
    },
    "submit-button": "Submit"
  },
  "ru": {
    "contact-us": {
      "title": "Основная информация",
      "fields": {
        "company-name": "Название компании",
        "website": "Веб-сайт",
        "name": "Имя",
        "last-name": "Фамилия",
        "email": "Электронная почта",
        "phone": "Телефон",
        "designation": "Должность",
        "purpose": "Цель обращения",
        "country": "Страна",
        "message": "Сообщение"
      }
    },
    "submit-button": "Отправить"
  },
  "uz": {
    "contact-us": {
      "title": "Kompaniya ma'lumotlar",
      "fields": {
        "company-name": "Kompaniya nomi",
        "website": "Veb-sayt",
        "name": "Ism",
        "last-name": "Familiya",
        "email": "Elektron pochta",
        "phone": "Telefon",
        "designation": "Lavozim",
        "purpose": "Aloqa maqsadi",
        "country": "Mamlakat",
        "message": "Xabar"
      }
    },
    "submit-button": "Yuborish"
  }
}
</i18n>
