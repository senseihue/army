<script setup lang="ts">
import { MainFooter, MainHeader } from "~/features/layout"
import { AuthErrorModal } from "~/entities/auth/ui"
import { AppealButtonGrid } from "~/features/appeal"
import { AuthRoleSelectModal } from "~/features/auth"
</script>

<template>
  <div class="flex min-h-dvh flex-col font-sans antialiased bg-zinc-950 max-h-sc text-zinc-100 overflow-hidden">
    <main-header />

    <main class="flex grow flex-col">
      <slot />
    </main>
<!--    <section v-if="!$route.meta.hideAppealButton" class="border-t border-[#E4E4E7]">-->
<!--      <div class="container-7xl">-->
<!--        <appeal-button-grid variant="row" />-->
<!--      </div>-->
<!--    </section>-->

<!--    <main-footer />-->
    <toaster close-button rich-colors invert position="top-right" />
    <auth-role-select-modal />

    <auth-error-modal />
  </div>
</template>
