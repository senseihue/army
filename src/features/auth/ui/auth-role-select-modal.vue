<script setup lang="ts">
import { useAuthService } from "~/features/auth"
import { AuthSelectRadio } from "~/entities/auth/ui"

class AuthRole {
  type: "investor" | "entrepreneur" = "entrepreneur"
  residency: "resident" | "not_resident" = "resident"

  isInvestor() {
    return this.type === "investor"
  }

  isResident() {
    return this.residency === "resident"
  }
}

const modal = useModal()
const localePath = useLocalePath()

const { getRedirectUrl } = useAuthService()

const form = ref<AuthRole>(new AuthRole())

const signIn = () => {
  modal.hide("auth-role-select-modal")
  if (form.value.isResident()) getRedirectUrl(`${window.location.origin}/sso`)
  else navigateTo(localePath("/auth/sign-in"))
}

const signUp = () => {
  modal.hide("auth-role-select-modal")
  if (form.value.isInvestor()) navigateTo(localePath(`/guide/register-investor?type=${form.value.residency}`))
  else navigateTo(localePath(`/guide/register-business?type=${form.value.residency}`))
}
</script>
<template>
  <ui-modal id="auth-role-select-modal" :label="$t('labels.select_type')">
    <div class="grid grid-cols-1 gap-2 p-4 sm:grid-cols-2 sm:gap-4">
      <auth-select-radio
        v-model="form.type"
        value="investor"
        image="/img/auth/investor.png"
        :label="$t('actions.investor')"
      />

      <auth-select-radio
        v-model="form.type"
        value="entrepreneur"
        image="/img/auth/entrepreneur.png"
        :label="$t('actions.entrepreneur')"
      />

      <h2 class="text-xl font-semibold leading-8 sm:col-span-2">{{ $t("labels.select_residency") }}</h2>

      <auth-select-radio
        v-model="form.residency"
        value="resident"
        image="/img/auth/resident.png"
        :label="$t('actions.resident')"
      />

      <auth-select-radio
        v-model="form.residency"
        value="not_resident"
        image="/img/auth/not_resident.png"
        :label="$t('actions.non_resident')"
      />
    </div>

    <template #footer>
      <div class="ui-modal-footer">
        <ui-button rounded color="primary" :label="$t('actions.sign_up')" @click="signUp" />
        <ui-button rounded color="success" :label="$t('actions.sign_in')" @click="signIn" />
      </div>
    </template>
  </ui-modal>
</template>
