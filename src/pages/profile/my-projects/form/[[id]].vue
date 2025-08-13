<script setup lang="ts">
import { ProjectForm } from "~/features/profile/project"
import { ProfileHeader } from "~/features/profile"

const router = useRouter()
const saveProject = () => {
  router.push("/profile/my-projects/form")
}
</script>

<template>
  <div class="w-full">
    <profile-header icon-name="lucide:archive" :title="$t('nav.profile.my_projects')">
      <template #action>
        <div class="flex items-center gap-5">
          <ui-button class="rounded-xl" color="success" @click="saveProject">
            <span>{{ $t("actions.publish") }}</span>
          </ui-button>
          <ui-button class="rounded-xl" color="info" @click="cancel">
            <span>{{ $t("actions.cancel") }}</span>
          </ui-button>
          <ui-button class="rounded-xl" color="primary" @click="saveProject">
            <span>{{ $t("actions.add_project") }}</span>
          </ui-button>
        </div>
      </template>
    </profile-header>
    <div class="mt-2 grid w-full gap-4 rounded-2xl bg-white p-4">
      <project-form />
    </div>
  </div>
</template>

<style scoped></style>
