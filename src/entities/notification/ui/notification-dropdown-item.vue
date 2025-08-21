<script setup lang="ts">
import { useNotificationStore } from "~/entities/notification"

const modal = useModal()
const notificationStore = useNotificationStore()

const showModal = () => modal.show("notification")
</script>

<template>
  <ui-dropdown-item @click="showModal">
    <icon class="text-lg" name="ph:bell-fill" />
    <span>{{ $t("labels.notifications") }}</span>

    <ui-badge
      v-if="notificationStore.record?.count"
      class="ml-auto min-w-5"
      rounded
      color="danger"
      :label="notificationStore.record?.count"
    />
  </ui-dropdown-item>
</template>
