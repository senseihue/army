<script setup lang="ts">
import { AuthRoleSelectModal } from "@/features/auth/ui"

const modal = useModal()

const showModal = () => modal.show("auth-role-select-modal")
</script>

<template>
  <client-only>
    <ui-button
      v-bind="$attrs"
      rounded
      color="success"
      class="ml-2 px-4 py-1.5 text-sm rounded-full !bg-zinc-100 !text-zinc-900 font-medium hover:!bg-zinc-200 transition-colors"
      :label="$t('labels.sign_in')"
      @click="showModal"
    />

  </client-only>
</template>
