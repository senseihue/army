<script setup lang="ts">
import { useAuthService } from "~/features/auth"
import { ChangePassword } from "~/entities/auth"

const { t } = useI18n({
  useScope: "local"
})

const { changePasswordNonResident } = useAuthService()

const form = ref<ChangePassword>(new ChangePassword())
const loading = ref(false)

const { required, minLength, sameAs } = useRule()
const rules = ref({
  old_password: { required, minLength: minLength(8) },
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
  if (isValid) changePasswordNonResident(form, loading)
}
</script>

<template>
  <form class="change_password" @submit.prevent="submit">
    <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
      <ui-form-group v-bind="hasError('old_password')" v-slot="{ id }" class="col-span-full">
        <ui-password-input
          v-model="form.old_password"
          name="old_password"
          :placeholder="t('change_password.fields.old_password')"
          :id
        />
      </ui-form-group>
      <ui-form-group v-bind="hasError('password')" v-slot="{ id }" class="col-span-full">
        <ui-password-input
          v-model="form.password"
          name="password"
          :placeholder="t('change_password.fields.password')"
          :id
        />
      </ui-form-group>
      <ui-form-group v-bind="hasError('password_confirmation')" v-slot="{ id }" class="col-span-full">
        <ui-password-input
          v-model="form.password_confirmation"
          name="password_confirmation"
          :placeholder="t('change_password.fields.password_confirmation')"
          :id
        />
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
.change_password {
  @apply mx-auto grid w-full max-w-3xl gap-6;

  .title {
    @apply text-lg font-bold;
  }
}
</style>

<i18n>
{
  "en": {
    "change_password": {
      "title": "Change Password",
      "fields": {
        "email": "Email",
        "old_password": "Old password",
        "password": "Password",
        "password_confirmation": "Confirm Password"
      }
    },
    "sign_in": "Sign in",
    "submit-button": "Submit"
  },
  "ru": {
    "change_password": {
      "title": "Восстановление пароля",
      "fields": {
        "email": "Электронная почта",
        "old_password": "Старый пароль",
        "password": "Пароль",
        "password_confirmation": "Подтвердите пароль"
      }
    },
    "sign_in": "Вход в систему",
    "submit-button": "Отправить"
  },
  "uz": {
    "change_password": {
      "title": "Parolni tiklash",
      "fields": {
        "email": "Elektron pochta",
        "old_password": "Eski parol",
        "password": "Parol",
        "password_confirmation": "Parolni tasdiqlash"
      }
    },
    "sign_in": "Kirish",
    "submit-button": "Yuborish"
  }
}
</i18n>
