<script lang="ts" setup>
const route = useRoute()

onMounted(() => {
  const { code, state } = <Record<string, string>>route.query

  if (!code || !state) throw createError({ statusCode: 404, statusMessage: 'Bad request' })

  const url = new URL(<string>state)
  url.searchParams.append('code', <string>code)
  window.location.replace(url)
})
</script>

<template>
  <div>
    <div class="grid min-h-dvh w-full place-items-center">
      <ui-spinner size="size-32" />
    </div>
  </div>
</template>
