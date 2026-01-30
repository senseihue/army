<script setup lang="ts">
import useAuthCallback from "~/shared/composables/use-auth-callback"

const VuePdfEmbed = defineAsyncComponent(() => import("vue-pdf-embed"))

const { $toast } = useNuxtApp()
const { t } = useI18n()
const router = useRouter()
const localePath = useLocalePath()
const { getCdnUrl } = cdn()
const modal = useModal()

const containerRef = ref(null)
const season = ref<ISeason | null>(null)
const loading = ref(false)
const enableSubmit = ref(false)

const onShown = (_season: ISeason) => {
  season.value = _season
  document.addEventListener("scroll", handleScroll, true)
}

const onHide = () => {
  season.value = null
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
      () => {
        router.push(localePath(`/admission/${season.value.id}`))
        cancel()
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
        v-if="season?.offer"
        ref="containerRef"
        :source="getCdnUrl(season.offer.file_path)"
        @scroll="handleScroll"
      />
    </div>
    <template #footer>
      <div class="flex w-full items-center justify-end gap-2 p-4">
        <ui-button color="secondary" :label="$t('actions.cancel')" @click="cancel"></ui-button>
        <ui-button :disabled="!enableSubmit" :label="$t('actions.send')" @click="submit"></ui-button>
      </div>
    </template>
  </ui-modal>
</template>

<style scoped></style>
