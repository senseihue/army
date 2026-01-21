<script setup lang="ts">
import { useAuthService } from "~/features/auth"
import { SignIn } from "~/entities/auth"

const { t } = useI18n({ useScope: "local" })
const route = useRoute()
const { signInNonResident } = useAuthService()

const form = ref<SignIn>(new SignIn(route.query))
const loading = ref(false)

const { required, email } = useRule()
const rules = ref({
  email: { required, email },
  password: { required }
})

const { vuelidate, hasError } = useValidate(form, rules)

const submit = async () => {
  const isValid = await vuelidate.value.$validate()
  if (isValid) await signInNonResident(form, loading)
}
</script>

<template>
  <form class="register-business-form" @submit.prevent="submit">
    <div class="grid gap-4 sm:grid-cols-1 sm:gap-6">
      <h3 class="title col-span-full text-center text-white">{{ t("sign_in.title") }}</h3>

      <ui-form-group v-bind="hasError('email')" v-slot="{ id }" class="col-span-full">
        <ui-input v-model="form.email" name="email" :placeholder="t('sign_in.fields.email')" :id />
      </ui-form-group>

      <ui-form-group v-bind="hasError('password')" v-slot="{ id }" class="col-span-full">
        <ui-password-input v-model="form.password" name="password" :placeholder="t('sign_in.fields.password')" :id />
      </ui-form-group>

      <div class="col-span-full text-end">
        <nuxt-link-locale class="text-sm text-white underline" :to="`/auth/forgot-password?role=${form.role}`">
          {{ t("forgot_password") }}
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
    "sign_in": {
      "title": "Sign in",
      "fields": {
        "password": "Password",
        "email": "Email"
      }
    },
    "forgot_password": "Forgot your password?",
    "submit-button": "Submit"
  },
  "ru": {
    "sign_in": {
      "title": "Вход в систему",
      "fields": {
        "password": "Пароль",
        "email": "Электронная почта"
      }
    },
    "forgot_password": "Забыли пароль?",
    "submit-button": "Отправить"
  },
  "uz": {
    "sign_in": {
      "title": "Kirish",
      "fields": {
        "password": "Parol",
        "email": "Elektron pochta"
      }
    },
    "forgot_password": "Parolingizni unutdingizmi?",
    "submit-button": "Yuborish"
  }
}
</i18n>
