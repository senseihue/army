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
    :label="$t('labels.lot_info')"
    :loading="loading"
    :close-on-backdrop="false"
    @shown="onBeforeShow"
    @hide="onHide"
  >
    <div class="grid gap-5 p-4">
      <div class="lot-row">
        <p class="font-semibold">{{ $t("labels.lot_id") }}</p>
        <p>1234131</p>
      </div>

      <div class="lot-row">
        <p class="font-semibold">{{ $t("labels.property_name") }}</p>
        <p>Somsaxona binosi</p>
      </div>

      <div class="lot-row">
        <p class="font-semibold">{{ $t("labels.property_type") }}</p>
        <p>Кўчмас мулк</p>
      </div>

      <div class="lot-row">
        <p class="font-semibold">{{ $t("labels.property_category") }}</p>
        <p>Нотурар-жой объектлари</p>
      </div>

      <div class="lot-row">
        <p class="font-semibold">{{ $t("labels.price") }}</p>
        <p>$100 000 000</p>
      </div>

      <div class="lot-row">
        <p class="font-semibold">{{ $t("labels.starting_price") }}</p>
        <p>$100 000 000</p>
      </div>

      <div class="lot-row">
        <p class="font-semibold">{{ $t("labels.auction_start_date") }}</p>
        <p>11.11.2011</p>
      </div>

      <div class="lot-row">
        <p class="font-semibold">{{ $t("labels.auction_end_date") }}</p>
        <p>12.12.2012</p>
      </div>
    </div>

    <template #footer="{ hide }">
      <div class="ui-modal-footer">
        <ui-button variant="flat" color="secondary" :label="$t('actions.cancel')" @click="hide" />
        <ui-button :label="$t('actions.participate')" @click="onSave()" />
      </div>
    </template>
  </ui-modal>
</template>

<style>
.lot-row {
  @apply grid grid-cols-2 gap-3;
}
</style>
