<script lang="ts" setup>
import { useAuthService } from "~/entities/auth"

const { signIn } = useAuthService()

onMounted(() => signIn())
</script>

<template>
  <div>
    <div class="grid min-h-dvh w-full place-items-center">
      <ui-spinner size="size-32" />
    </div>
  </div>
</template>
