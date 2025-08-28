<script setup lang="ts">
import { MainFooter, MainHeader } from "~/features/layout"
</script>

<template>
  <div class="flex min-h-dvh flex-col">
    <main-header />

    <main class="flex flex-col grow">
      <slot />
    </main>

    <main-footer />
    <toaster close-button rich-colors invert position="top-right" />
    <div id="auth-error">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium assumenda aut, dicta in ipsum mollitia odio sint unde. Aliquid consequatur deserunt dolorum ex, inventore minima nemo nostrum reprehenderit sequi veritatis.
    </div>
  </div>

</template>
