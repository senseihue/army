<script setup lang="ts">
import { useAuthService } from "~/features/auth"
import { ResetPassword } from "~/entities/auth"

const { t } = useI18n({
  useScope: "local"
})

const { resetPasswordNonResident } = useAuthService()
const route = useRoute()

const form = ref<ResetPassword>(new ResetPassword(route.query))
const loading = ref(false)

const { required, minLength, sameAs } = useRule()
const rules = ref({
  password: { required, minLength: minLength(8) },
  password_confirmation: {
    required,
    minLength: minLength(8),
    sameAs: sameAs(
      computed(() => form.value.password),
      t("reset_password.fields.password")
    )
  }
})
const { vuelidate, hasError } = useValidate(form, rules)
const submit = async () => {
  const isValid = await vuelidate.value.$validate()
  if (isValid) resetPasswordNonResident(form, loading)
}
</script>

<template>
  <form class="reset_password" @submit.prevent="submit">
    <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
      <h3 class="title col-span-full text-center text-white">{{ t("reset_password.title") }}</h3>

      <ui-form-group v-bind="hasError('password')" v-slot="{ id }" class="col-span-full">
        <ui-password-input
          v-model="form.password"
          name="password"
          :placeholder="t('reset_password.fields.password')"
          :id
        />
      </ui-form-group>
      <ui-form-group v-bind="hasError('password_confirmation')" v-slot="{ id }" class="col-span-full">
        <ui-password-input
          v-model="form.password_confirmation"
          name="password_confirmation"
          :placeholder="t('reset_password.fields.password_confirmation')"
          :id
        />
      </ui-form-group>

<!--      <div class="col-span-full text-end">-->
<!--        <nuxt-link-locale class="text-sm text-white underline" :to="`/auth/sign-in?role=${form.role}`">-->
<!--          {{ t("sign_in") }}-->
<!--        </nuxt-link-locale>-->
<!--      </div>-->
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
.reset_password {
  @apply mx-auto grid max-w-3xl gap-6;

  .title {
    @apply text-lg font-bold;
  }
}
</style>

<i18n>
{
  "en": {
    "reset_password": {
      "title": "Reset Password",
      "fields": {
        "email": "Email",
        "password": "Password",
        "password_confirmation": "Confirm Password"
      }
    },
    "sign_in": "Sign in",
    "submit-button": "Submit"
  },
  "ru": {
    "reset_password": {
      "title": "Восстановление пароля",
      "fields": {
        "email": "Электронная почта",
        "password": "Пароль",
        "password_confirmation": "Подтвердите пароль"
      }
    },
    "sign_in": "Вход в систему",
    "submit-button": "Отправить"
  },
  "uz": {
    "reset_password": {
      "title": "Parolni tiklash",
      "fields": {
        "email": "Elektron pochta",
        "password": "Parol",
        "password_confirmation": "Parolni tasdiqlash"
      }
    },
    "sign_in": "Kirish",
    "submit-button": "Yuborish"
  }
}
</i18n>
