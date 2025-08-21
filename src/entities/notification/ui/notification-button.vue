<script setup lang="ts">
import { breakpointsTailwind } from "@vueuse/core"
import { useNotificationStore } from "~/entities/notification"

const modal = useModal()
const notificationStore = useNotificationStore()

const { sm } = useBreakpoints(breakpointsTailwind)

const showModal = () => modal.show("notification")
</script>

<template>
  <div v-if="sm" class="relative">
    <ui-icon-button
      variant="white"
      color="secondary"
      icon-class="text-xl"
      icon-name="solar:bell-bing-bold-duotone"
      :label="$t('labels.notifications')"
      @click="showModal"
    />
    <span
      v-if="notificationStore.record?.count"
      class="absolute -right-1 -top-1 min-w-4 rounded-full bg-danger-600 px-1 text-center text-xs text-white"
    >
      {{ notificationStore.record?.count }}
    </span>
  </div>
</template>
