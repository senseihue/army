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
    size="md"
    :label="$t('labels.product_info')"
    :loading="loading"
    :close-on-backdrop="false"
    @shown="onBeforeShow"
    @hide="onHide"
  >
    <div class="p-4 grid gap-5">
      <div class="lot-row">
        <p class="font-semibold">{{$t('labels.seller_name')}}</p>
        <p>OZBEKISTON-METALLURGIYA KOMBINATI AJ</p>
      </div>

      <div class="lot-row">
        <p class="font-semibold">{{ $t('labels.product_name') }}</p>
        <p>Арматура СТ 12-35 ГС немерной длины</p>
      </div>

      <div class="lot-row">
        <p class="font-semibold">{{ $t('labels.product_quantity') }}</p>
        <p>32 тонна</p>
      </div>

      <div class="lot-row">
        <p class="font-semibold">{{ $t("labels.product_price") }}</p>
        <p>$20 000</p>
      </div>

      <div class="lot-row">
        <p class="font-semibold">{{ $t("labels.date_listed") }}</p>
        <p>11.11.2011</p>
      </div>
    </div>

    <template #footer="{ hide }">
      <div class="ui-modal-footer">
        <ui-button variant="flat" color="secondary" :label="$t('actions.cancel')" @click="hide" />
        <ui-button :label="$t('actions.buy')" @click="onSave()" />
      </div>
    </template>
  </ui-modal>
</template>

<style>
.lot-row {
  @apply grid grid-cols-2 gap-3;
}
</style>
