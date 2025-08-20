<script setup lang="ts">
import { useNotificationService } from "~/features/notification"

interface IProps {
  notification: INotification
}

const props = defineProps<IProps>()

const { read } = useNotificationService()

const style = computed(() => {
  const record: Record<string, any> = {
    registration: {
      icon: "solar:bell-bold-duotone",
      background: "bg-primary-600"
    },
    event_registration: {
      icon: "solar:bell-bold-duotone",
      background: "bg-secondary-600"
    },
    new_appeal: {
      icon: "solar:bell-bold-duotone",
      background: "bg-success-600"
    },
    appeal_forwarded: {
      icon: "solar:bell-bold-duotone",
      background: "bg-info-600"
    },
    appeal_rejected: {
      icon: "solar:bell-bold-duotone",
      background: "bg-gray-600"
    },
    new_appeal_response: {
      icon: "solar:bell-bold-duotone",
      background: "bg-primary-600"
    },
    new_appeal_comment: {
      icon: "solar:bell-bold-duotone",
      background: "bg-secondary-600"
    },
    new_project: {
      icon: "solar:bell-bold-duotone",
      background: "bg-success-600"
    },
    update_project: {
      icon: "solar:bell-bold-duotone",
      background: "bg-info-600"
    },
    project_rejected: {
      icon: "solar:bell-bold-duotone",
      background: "bg-gray-600"
    },
    project_approved: {
      icon: "solar:bell-bold-duotone",
      background: "bg-gray-600"
    },
    default: {
      icon: "solar:bell-bold-duotone",
      background: "bg-gray-900"
    }
  }

  return record[props.notification.type] || record["default"]
})
</script>

<template>
  <a class="p-4 hover:bg-gray-100 dark:hover:bg-gray-950" target="_blank" :href="notification.link ?? '#'">
    <div class="flex items-center gap-4" @click="read(notification.id)">
      <div v-if="style?.icon" class="grid h-10 w-10 shrink-0 place-items-center rounded-lg" :class="style?.background">
        <icon class="text-2xl text-white" :name="style?.icon" />
      </div>

      <div class="grid gap-0.5 text-sm">
        <p class="text-sm font-medium uppercase dark:text-white">
          {{ notification.message }}
        </p>

        <p class="text-xs font-medium text-gray-400">
          {{ formatDate(notification.created, "MM-DD-YYYY hh:mm:ss") }}
        </p>
      </div>
    </div>
  </a>
</template>
