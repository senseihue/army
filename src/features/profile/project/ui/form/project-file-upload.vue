<script setup lang="ts">
interface IProps {
  label: string
  contentType?: string
  mode?: boolean
  isCropper?: boolean
}

const props = defineProps<IProps>()
const model = defineModel<IUpload>()
const modelId = defineModel<number>("id")

const modal = useModal()

const isImage = computed(() => model.value?.content_type?.includes("image"))

const set = (upload: IUpload) => {
  model.value = upload
  modelId.value = upload.id
}

const onUpload = () => modal.show("upload", { set, content_type: props.contentType })
const onCropper = () => {
  if (!props.mode) modal.show("cropper", { set, upload: model.value })
}

const onRemove = () => {
  model.value = undefined
  modelId.value = undefined
}

watch(
  () => model.value?.id,
  () => !modelId.value && (modelId.value = model.value?.id)
)
</script>

<template>
  <div class="mb-2 flex items-start gap-4">
    <div v-if="isImage">
      <div
        v-if="isCropper && !mode"
        v-tooltip.bottom="$t('actions.edit')"
        class="group relative cursor-pointer overflow-hidden rounded"
        @click="onCropper"
      >
        <ui-avatar class="cursor-pointer" size="size-24" font-size="text-4xl" :label :src="model?.download_link" />

        <div class="absolute inset-0 bg-black/60 opacity-0 transition-all group-hover:opacity-100">
          <div class="flex h-full w-full items-center justify-center">
            <icon class="text-xl text-white" name="lucide:edit" />
          </div>
        </div>
      </div>

      <ui-avatar v-else size="size-24" font-size="text-4xl" :label :src="model?.download_link" />
    </div>

    <div
      v-else
      v-tooltip.bottom="model?.file_name"
      class="grid size-24 place-items-center rounded-lg border dark:border-gray-800"
    >
      <icon v-if="isImage" class="text-4xl" name="ph:image-duotone" />
      <icon v-else class="text-4xl" name="ph:file-duotone" />
    </div>

    <ui-form-group v-if="!mode" :label>
      <div class="mt-2 flex flex-col gap-2">
        <ui-button
          type="button"
          variant="white"
          color="secondary"
          size="xs"
          :label="$t('actions.upload')"
          @click="onUpload"
        />

        <ui-button
          v-if="model?.id"
          type="button"
          size="xs"
          color="danger"
          variant="white"
          :label="$t('actions.remove')"
          @click="onRemove"
        />
      </div>
    </ui-form-group>
  </div>
</template>
