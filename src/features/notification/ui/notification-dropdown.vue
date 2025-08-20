<script setup lang="ts">
import { useNotificationStore } from "~/entities/notification"
import { useNotificationService, NotificationItem } from "~/features/notification"

const notificationStore = useNotificationStore()
const { getNotificationList, readAll } = useNotificationService()
const { loading, items, count } = storeToRefs(notificationStore)
onMounted(() => {
  getNotificationList()
})
</script>

<template>
  <ui-dropdown>
    <div class="relative">
      <ui-icon-button
        rounded
        variant="ghost"
        color="secondary"
        icon-class="text-xl"
        icon-name="solar:bell-bing-bold-duotone"
        :label="$t('labels.notifications')"
      />
      <span
        v-if="count"
        class="absolute -right-1 -top-1 min-w-4 rounded-full bg-danger-600 px-1 text-center text-xs text-white"
      >
        {{ count }}
      </span>
    </div>

    <template #body>
      <div v-if="count > 0" class="grid divide-y overflow-y-auto dark:divide-gray-800">
        <notification-item v-for="notification in items" :key="notification.id" :notification />
      </div>

      <div v-else>
        <p class="p-4 text-center text-sm text-gray-400">{{ $t("messages.info.data_not_found") }}</p>
      </div>
    </template>
  </ui-dropdown>
</template>
