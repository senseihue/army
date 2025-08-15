<script setup lang="ts">
import { ProjectForm, usePersonalProjectService } from "~/features/profile/project"
import { ProfileHeader } from "~/features/profile"
import { PersonalProject, usePersonalProjectStore } from "~/entities/profile/personal-project"

const router = useRouter()
const { savePersonalProject } = usePersonalProjectService()
const personalProjectStore = usePersonalProjectStore()
const loading = ref(false)
const form = ref(null)
const saveProject = () => {
  form.value.onSubmit()
}
const cancel = () => {
  personalProjectStore.dto = new PersonalProject()
  router.push("/profile/my-projects")
}
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <profile-header icon-name="lucide:archive" :title="$t('nav.profile.my_projects')">
      <template #action>
        <div class="flex items-center gap-5">
          <ui-button class="rounded-xl" color="secondary" @click.stop="cancel">
            {{ $t("actions.cancel") }}
          </ui-button>
          <ui-button class="rounded-xl" color="primary" @click.stop="saveProject">
            {{ $t("actions.save") }}
          </ui-button>
        </div>
      </template>
    </profile-header>

    <div class="mt-2 grid w-full gap-4 rounded-2xl bg-white p-4">
      <project-form ref="form" />
    </div>
  </div>
</template>

<style scoped></style>
