<script setup lang="ts">
import { useAuthService } from "~/features/auth"
import { AuthSelectRadio } from "~/entities/auth/ui"

class AuthRole {
    type: "investor" | "entrepreneur" = 'entrepreneur'
    residency: "resident" | "not_resident" = "resident"
}

const localePath = useLocalePath()
const modal = useModal()

const { getRedirectUrl } = useAuthService()

const form = ref<AuthRole>(new AuthRole())

const signIn = () => {
    modal.hide("auth-role-select-modal")
    if (form.value.residency === "resident") getRedirectUrl(`${window.location.origin}/sso`)
    else navigateTo(localePath("/auth/sign-in"))
}

const signUp = () => {
    modal.hide("auth-role-select-modal")
    if (form.value.type === "investor") navigateTo(localePath(`/guide/register-investor?type=${form.value.type}`))
    else navigateTo(localePath(`/guide/register-business?type=${form.value.residency}`))
}
</script>
<template>
    <ui-modal id="auth-role-select-modal">
        <div class="grid grid-cols-1 gap-2 p-4 sm:grid-cols-2 sm:gap-4">
            <!-- TYPE -->
            <h2 class="text-left text-xl sm:col-span-2 sm:text-center">{{ $t("labels.select_type") }}</h2>

            <!-- TODO: Create reusable component for radio buttons -->
            <auth-select-radio 
                v-model="form.type" 
                value="investor" 
                logo="/img/auth/investor.png"
                :label="$t('actions.investor')" 
            >
            </auth-select-radio>
            <auth-select-radio 
                v-model="form.type" 
                value="entrepreneur" 
                logo="/img/auth/entrepreneur.png"
                :label="$t('actions.entrepreneur')" 
            />
            <!-- <label for="investor">
                <input v-model="form.type" id="investor" class="hidden" type="radio" value="investor" />
                <div class="flex cursor-pointer flex-row items-center gap-4 rounded-lg border-2 border-blue-light p-4 sm:flex-col sm:justify-center sm:gap-2 sm:p-10"
                    :class="form.type === 'investor' && '!border-blue-midnight'">
                    <img src="~/public/img/auth/investor.png" alt="Investor" />
                    <p>{{ $t("actions.investor") }}</p>
                </div>
            </label>

            <label for="entrepreneur">
                <input v-model="form.type" id="entrepreneur" class="hidden" type="radio" value="entrepreneur" />
                <div class="flex cursor-pointer flex-row items-center gap-4 rounded-lg border-2 border-blue-light p-4 sm:flex-col sm:justify-center sm:gap-2 sm:p-10"
                    :class="form.type === 'entrepreneur' && '!border-blue-midnight'">
                    <img src="~/public/img/auth/entrepreneur.png" alt="Entrepreneur" />
                    <p>{{ $t("actions.entrepreneur") }}</p>
                </div>
            </label> -->

            <!-- RESIDENT -->
            <h2 class="mt-4 text-left text-xl sm:col-span-2 sm:text-center">{{ $t("labels.select_residency") }}</h2>

             <auth-select-radio 
                v-model="form.residency" 
                value="resident" 
                logo="/img/auth/resident.png"
                :label="$t('actions.resident')" 
            />
             <auth-select-radio 
                v-model="form.residency" 
                value="not_resident" 
                logo="/img/auth/not_resident.png"
                :label="$t('actions.non_resident')" 
            />
            <!-- <label for="resident">
                <input v-model="form.residency" id="resident" class="hidden" type="radio" value="resident" />
                <div class="flex cursor-pointer flex-row items-center gap-4 rounded-lg border-2 border-blue-light p-4 sm:flex-col sm:justify-center sm:gap-2 sm:p-10"
                    :class="form.residency === 'resident' && '!border-blue-midnight'">
                    <img src="~/public/img/auth/resident.png" alt="Resident" />
                    <p>{{ $t("actions.resident") }}</p>
                </div>
            </label>

            <label for="not_resident">
                <input v-model="form.residency" id="not_resident" class="hidden" type="radio" value="not_resident" />
                <div class="flex cursor-pointer flex-row items-center gap-4 rounded-lg border-2 border-blue-light p-4 sm:flex-col sm:justify-center sm:gap-2 sm:p-10"
                    :class="form.residency === 'not_resident' && '!border-blue-midnight'">
                    <img src="~/public/img/auth/not_resident.png" alt="Not-resident" />
                    <p>{{ $t("actions.non_resident") }}</p>
                </div>
            </label> -->
        </div>
        <template #footer="{ hide }">
            <div class="flex w-full justify-center gap-2 py-4">
                <ui-button color="success" :label="$t('actions.sign_in')" @click="signIn" />
                <ui-button color="primary" :label="$t('actions.sign_up')" @click="signUp" />
            </div>
        </template>
    </ui-modal>
</template>
