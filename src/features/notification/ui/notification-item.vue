<script setup lang="ts">
import { snakeCase } from "lodash-es"
import { useNotificationService } from "~/features/notification"

const props = defineProps<{ notification: INotification }>()

const { read } = useNotificationService()

const style = computed(() => {
  const record: Record<string, any> = {
    new_appeal: {
      icon: "solar:shield-warning-bold",
      background: "bg-warning-600"
    },
    appeal_forwarded: {
      icon: "solar:danger-triangle-bold",
      background: "bg-danger-600"
    },
    appeal_rejected: {
      icon: "solar:shield-check-bold",
      background: "bg-success-600"
    },
    new_appeal_response: {
      icon: "solar:alarm-bold",
      background: "bg-info-600"
    },
    new_appeal_comment: {
      icon: "solar:alarm-bold",
      background: "bg-info-600"
    }
  }

  return record[snakeCase(props.notification.type)]
})
</script>

<template>
  <a class="p-4 hover:bg-gray-100 dark:hover:bg-gray-950" target="_blank" :href="notification?.link ?? '#'">
    <div class="flex items-start gap-4" @click="read(notification.id)">
      <div class="grid h-10 w-10 shrink-0 place-items-center rounded-lg" :class="style?.background">
        <icon class="text-2xl text-white" :name="style?.icon"></icon>
      </div>

      <div class="grid gap-0.5 text-sm">
        <!--        <p class="font-medium dark:text-white">-->
        <!--          {{ notification?.title }}-->
        <!--        </p>-->

        <p class="text-xs font-medium uppercase text-gray-400">
          {{ notification?.message }}
        </p>
      </div>
    </div>
  </a>
</template>
