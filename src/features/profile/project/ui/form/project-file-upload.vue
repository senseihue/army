<script setup lang="ts">
interface IProps {
  label: string
  contentType?: "application" | "image"
  mode?: boolean
  isCropper?: boolean
  disabled?: boolean
  sizeLimit?: number
}

const props = withDefaults(defineProps<IProps>(), {
  contentType: "image"
})
const model = defineModel<IFile | File | undefined>()

const { $toast } = useNuxtApp()
const { t } = useI18n()
const isImage = computed(() => props.contentType === "image")
const url = ref<string | undefined>(model.value?.download_link || "")
const fileName = ref(model.value?.file_name || "")
const set = (upload: File) => {
  model.value = upload
}
const { files, open, reset, onCancel, onChange } = useFileDialog({
  accept: props.contentType === "image" ? "image/*" : "application/*",
  directory: false,
  multiple: false
})

onChange((files) => {
  if (files?.length) {
    const filesize = (files[0].size / 1024 / 1024).toFixed(4) // MB
    if (filesize > props.sizeLimit) {
      $toast.error(t("messages.info.file_size_limit"))
      return
    }
    url.value = URL.createObjectURL(files[0])
    fileName.value = files[0].name
    set(files[0])
  } else {
    model.value = undefined
    url.value = ""
  }
})

onCancel(() => {
  model.value = undefined
  url.value = ""
})

const onReset = () => {
  model.value = undefined
  url.value = ""
  fileName.value = ""
  reset()
}

watch(
  () => model.value,
  () => {
    if (model.value instanceof File) {
      url.value = URL.createObjectURL(model.value)
      fileName.value = model.value.name
    } else {
      url.value = model.value?.download_link || ""
      fileName.value = model.value?.file_name || ""
    }
  }
)
</script>

<template>
  <div class="flex h-full flex-col items-center">
    <div class="flex min-h-[200px] w-[200px] flex-col items-center gap-4 rounded-lg border border-solid px-4 py-2">
      <div v-if="isImage">
        <ui-avatar
          v-if="url"
          color="text-blue-bondi"
          bg-color="!bg-white"
          size="size-32"
          font-size="text-6xl"
          :src="url"
        />
        <div v-else class="grid size-32 grow place-items-center rounded-lg  dark:border-gray-800">
          <icon class="text-6xl text-blue-bondi" name="lucide:image-up" />
        </div>
      </div>

      <div v-else class="grid size-32 grow place-items-center rounded-lg  dark:border-gray-800">
        <icon v-if="isImage" class="text-4xl" name="ph:image-duotone" />
        <icon v-else class="text-6xl text-blue-bondi" name="lucide:file-chart-column" />
      </div>

      <div>
        <p
          class="text-center text-sm font-bold leading-4"
          :class="{
            invisible: !url && !fileName,
            visible: url || fileName
          }"
        >
          {{ fileName || "-" }}
        </p>
        <div class="mt-2 flex items-center justify-center gap-6">
          <ui-icon-button
            v-if="model?.download_link"
            type="button"
            variant="ghost"
            icon-class="text-[24px]"
            color="primary"
            icon-name="lucide:download"
            :href="model?.download_link"
            :label="$t('actions.download')"
          />

          <ui-icon-button
            v-if="!disabled"
            type="button"
            variant="ghost"
            icon-class="text-[24px]"
            color="primary"
            :icon-name="isImage ? 'lucide:image-up' : 'lucide:file-up'"
            :label="$t('actions.upload')"
            @click.stop="open"
          />

          <ui-icon-button
            v-if="url && !disabled"
            type="button"
            icon-class="text-[24px]"
            icon-name="lucide:trash-2"
            color="danger"
            variant="ghost"
            :label="$t('actions.remove')"
            @click.stop="onReset"
          />
        </div>
      </div>
    </div>
    <p class="text-center text-sm font-bold leading-4">
      {{ label }}
    </p>
  </div>
</template>
