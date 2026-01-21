<script setup lang="ts">
import {  MainHeader } from "~/features/layout"
import { AuthErrorModal } from "~/entities/auth/ui"
import { AuthRoleSelectModal } from "~/features/auth"
</script>

<template>
  <div class="max-h-sc flex min-h-dvh flex-col overflow-hidden font-sans">
    <main-header />

    <main class="flex grow flex-col bg-[#F1F5F9]">
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
