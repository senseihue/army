<script setup lang="ts">
// import VuePdfEmbed from "vue-pdf-embed"

// const modal = useModal()

import useAuthCallback from "~/shared/composables/use-auth-callback"

const { $toast } = useNuxtApp()
const { t } = useI18n()
const router = useRouter()
const localePath = useLocalePath()

const VuePdfEmbed = defineAsyncComponent(() => import("vue-pdf-embed"))
const containerRef = ref(null)
const offer = ref<IOffer | null>(null)
const loading = ref(false)
const enableSubmit = ref(false)
const modal = useModal()

const onShown = (_offer: IOffer) => {
  offer.value = _offer
  document.addEventListener("scroll", handleScroll, true)
}

const onHide = () => {
  offer.value = null
  enableSubmit.value = false
  document.removeEventListener("scroll", handleScroll, true)
}

const cancel = () => {
  modal.hide("offer")
  onHide()
}

const submit = async () => {
  if (enableSubmit.value) {
    await useAuthCallback(
      async () => {
        router.push(localePath('/admission/1'))
      },
      () => {
        $toast.error(t("messages.error.something_went_wrong"))
      }
    )
  }
}

const handleScroll = (e) => {
  const { scrollTop, scrollHeight, clientHeight } = e.target

  // Calculate percentage scrolled
  const progress = (scrollTop / (scrollHeight - clientHeight)) * 100
  if (progress > 98) {
    enableSubmit.value = true
  }
}
</script>

<template>
  <ui-modal id="offer" size="2xl" :loading @show="onShown" @hide="onHide">
    <div class="overflow-y-auto">
      <vue-pdf-embed
        v-if="offer"
        ref="containerRef"
        :source="`/cdn2/storage/${offer.file_path}`"
        @scroll="handleScroll"
      />
    </div>
    <template #footer>
      <div class="flex w-full items-center justify-end gap-2 p-4">
        <ui-button color="secondary" :label="$t('actions.cancel')" @click="cancel"></ui-button>
        <ui-button :label="$t('actions.send')" @click="submit"></ui-button>
      </div>
    </template>
  </ui-modal>
</template>

<style scoped></style>
