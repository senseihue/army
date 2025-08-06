<script setup lang="ts">
import { useAuthService } from '../auth.service'

const localePath = useLocalePath()
const modal = useModal()

const { getRedirectUrl } = useAuthService()

const form = ref<{ type: 'investor' | 'entrepreneur', residency: 'resident' | 'not_resident' }>({ type: "investor", residency: "resident" })

const signIn = () => {
    modal.hide("auth-role-select-modal")
    if (form.value.residency === "resident") getRedirectUrl(`${window.location.origin}/sso`)
    else navigateTo(localePath('/auth/sign-in'))
}

const signUp = () => {
    modal.hide("auth-role-select-modal")
    if (form.value.type === 'investor') navigateTo(localePath('/guide/register-investor'))
    else navigateTo(localePath('/guide/register-business'))

}

</script>
<template>
    <ui-modal id="auth-role-select-modal">
        <div class="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4 p-4">
            <!-- TYPE -->
            <h2 class="text-xl text-left sm:text-center sm:col-span-2">{{ $t('labels.select_type') }}</h2>

            <label for="investor">
                <input v-model="form.type" type="radio" value="investor" id="investor" class="hidden">
                <div class="flex flex-row sm:justify-center items-center gap-4 sm:gap-2 sm:flex-col border-2 border-blue-light rounded-lg p-4 sm:p-10 cursor-pointer"
                    :class="form.type === 'investor' && '!border-blue-midnight'">
                    <img src="~/public/img/auth/investor.png" alt="Investor">
                    <p>{{ $t('actions.investor') }}</p>
                </div>
            </label>

            <label for="entrepreneur">
                <input v-model="form.type" type="radio" value="entrepreneur" id="entrepreneur" class="hidden">
                <div class="flex flex-row sm:justify-center items-center gap-4 sm:gap-2 sm:flex-col border-2 border-blue-light rounded-lg p-4 sm:p-10 cursor-pointer"
                    :class="form.type === 'entrepreneur' && '!border-blue-midnight'">
                    <img src="~/public/img/auth/entrepreneur.png" alt="Entrepreneur">
                    <p>{{ $t('actions.entrepreneur') }}</p>
                </div>
            </label>

            <!-- RESIDENT -->
            <h2 class="text-xl text-left sm:text-center sm:col-span-2 mt-4">{{ $t('labels.select_residency') }}</h2>

            <label for="resident">
                <input v-model="form.residency" type="radio" value="resident" id="resident" class="hidden">
                <div class="flex flex-row sm:justify-center items-center gap-4 sm:gap-2 sm:flex-col border-2 border-blue-light rounded-lg p-4 sm:p-10 cursor-pointer"
                    :class="form.residency === 'resident' && '!border-blue-midnight'">
                    <img src="~/public/img/auth/resident.png" alt="Resident">
                    <p>{{ $t('actions.resident') }}</p>
                </div>
            </label>

            <label for="not_resident">
                <input v-model="form.residency" type="radio" value="not_resident" id="not_resident" class="hidden">
                <div class="flex flex-row sm:justify-center items-center gap-4 sm:gap-2 sm:flex-col border-2 border-blue-light rounded-lg p-4 sm:p-10 cursor-pointer"
                    :class="form.residency === 'not_resident' && '!border-blue-midnight'">
                    <img src="~/public/img/auth/not-resident.png" alt="Not-resident">
                    <p>{{ $t('actions.non_resident') }}</p>
                </div>
            </label>
        </div>
        <template #footer="{ hide }">
            <div class="w-full flex justify-center gap-2 py-4">
                <ui-button :label="$t('actions.sign_in')" color="success" @click="signIn" />
                <ui-button :label="$t('actions.sign_up')" color="primary" @click="signUp" />
            </div>
        </template>
    </ui-modal>
</template>