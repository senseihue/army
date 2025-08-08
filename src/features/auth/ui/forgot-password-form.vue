<script setup lang="ts">
import { PurposeOfContactSelect, useContactUsService } from "~/features/forms/contact-us"
import { ContactUs } from "~/entities/forms/contact-us"
import { ForgotPassword, SignIn , useAuthService} from "~/entities/auth"

const { t } = useI18n({
  useScope: "local"
})

const { sendNewPasswordNonResident } = useAuthService()

const form = ref<ForgotPassword>(new ForgotPassword())
const loading = ref(false)

const { required, email } = useRule()
const rules = ref({
  email: { required, email }
})
const { vuelidate, hasError } = useValidate(form, rules)
const submit = async () => {
  const isValid = await vuelidate.value.$validate()
  if (isValid) sendNewPasswordNonResident(form, loading)
}
</script>

<template>
  <form class="forgot_password" @submit.prevent="submit">
    <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
      <h3 class="title col-span-full text-center text-white">{{ t("forgot_password.title") }}</h3>

      <ui-form-group v-bind="hasError('email')" v-slot="{ id }" class="col-span-full">
        <ui-input v-model="form.email" name="email" :placeholder="t('forgot_password.fields.email')" :id />
      </ui-form-group>

      <div class="col-span-full text-end">
        <nuxt-link-locale class="text-sm text-white underline" to="/auth/sign-in">
          {{ t("sign_in") }}
        </nuxt-link-locale>
      </div>
    </div>

    <div class="mt-6 flex items-center justify-center">
      <ui-button
        class="w-full min-w-[215px] sm:w-auto"
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
.forgot_password {
  @apply mx-auto grid max-w-3xl gap-6;

  .title {
    @apply text-lg font-bold;
  }
}
</style>

<i18n>
{
  "en": {
    "forgot_password": {
      "title": "Sign in",
      "fields": {
        "email": "Email"
      }
    },
    "sign_in": "Sign in",
    "submit-button": "Submit"
  },
  "ru": {
    "forgot_password": {
      "title": "Вход в систему",
      "fields": {
        "email": "Электронная почта"
      }
    },
    "sign_in": "Вход в систему",
    "submit-button": "Отправить"
  },
  "uz": {
    "forgot_password": {
      "title": "Kirish",
      "fields": {
        "email": "Elektron pochta"
      }
    },
    "sign_in": "Kirish",
    "submit-button": "Yuborish"
  }
}
</i18n>
