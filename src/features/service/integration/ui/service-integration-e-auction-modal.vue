<script setup lang="ts">
const { t } = useI18n()

const loading = ref(false)
const form = ref()

const onBeforeShow = (id: number) => {
  if (id) {
    console.log(id)
  }
}

const onHide = () => {
  loading.value = false
}

const onSave = async (hide: boolean = true) => {
  console.log("Save")
}
</script>

<template>
  <ui-modal
    id="e-auction"
    label="ЛОТ бўйича маълумотлар"
    :loading="loading"
    :close-on-backdrop="false"
    @shown="onBeforeShow"
    @hide="onHide"
  >
    <div class="p-4">ЛОТ бўйича маълумотлар</div>

    <template #footer="{ hide }">
      <div class="ui-modal-footer">
        <ui-button variant="flat" color="secondary" :label="$t('actions.cancel')" @click="hide" />
        <ui-button :label="$t('actions.save')" @click="onSave()" />
      </div>
    </template>
  </ui-modal>
</template>
