<script setup lang="ts">
import { ProfileHeader } from "~/features/profile"
import { ProjectGrid } from "~/features/profile/project"
definePageMeta({
  protected: true
})

const router = useRouter()

const changeRoute = () => {
  router.push("/profile/my-projects/form")
}
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <profile-header icon-name="lucide:archive" :title="$t('nav.profile.my_projects')">
      <template #action>
        <ui-button class="rounded-xl" color="primary" variant="flat" @click="changeRoute">
          <span>{{ $t("actions.add_project") }}</span>
        </ui-button>
      </template>
    </profile-header>
    <div class="mt-2 grid w-full gap-4 rounded-2xl bg-white p-4">
      <project-grid />
    </div>
  </div>
</template>

<style scoped></style>
