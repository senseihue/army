<script setup lang="ts">
interface IProps {
  label: string
  contentType?: "application" | "image"
  mode?: boolean
  isCropper?: boolean
}

const props = withDefaults(defineProps<IProps>(), {
  contentType: "image"
})
const model = defineModel<IFile | File>()
const modelId = defineModel<number>("id")

const modal = useModal()
const isImage = computed(() => props.contentType === "image")
const url = ref(model.value?.download_link || "")
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

const onUpload = () => open
const onCropper = () => {
  if (!props.mode) modal.show("cropper", { set, upload: model.value })
}

const onRemove = () => {
  model.value = undefined
}

watch(
  () => model.value?.id,
  () => !modelId.value && (modelId.value = model.value?.id)
)

const { t } = useI18n({
  useScope: "local"
})
</script>

<template>
  <div class="flex h-full flex-col items-center">
    <div class="flex min-h-[200px] w-[200px] flex-col items-center gap-4 rounded-lg border border-solid px-4 py-2">
      <div v-if="isImage">
        <ui-avatar size="size-32" font-size="text-4xl" :src="url" />
      </div>

      <div v-else class="grid size-32 grow place-items-center rounded-lg border dark:border-gray-800">
        <icon v-if="isImage" class="text-4xl" name="ph:image-duotone" />
        <icon v-else class="text-4xl" name="ph:file-duotone" />
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
            type="button"
            variant="ghost"
            icon-name="lucide:image-up"
            icon-class="text-[24px]"
            color="primary"
            :label="$t('actions.upload')"
            @click.stop="open"
          />

          <ui-icon-button
            v-if="url"
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
