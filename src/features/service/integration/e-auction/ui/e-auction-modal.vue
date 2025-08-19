<script setup lang="ts">
import { useEAuctionService } from "~/features/service/integration/e-auction"
import { formatCurrency } from "~/shared/lib/currency"

const modal = useModal()
const loading = ref(false)
const { getEAuctionById } = useEAuctionService()
const form = ref<IEAuctionDetails>()

const onBeforeShow = (id: number) => {
  if (id) getEAuctionById(id, form, loading)
}

const onHide = () => {
  loading.value = false
  form.value = undefined
}

const onSave = () => {
  modal.hide("e-auction")

  setTimeout(() => {
    const link = document.createElement("a")
    link.setAttribute("href", `https://e-auksion.uz/lot-view?lot_id=${form.value?.lot}`)
    link.setAttribute("target", "_blank")
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }, 100)
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
    <div class="grid gap-3 p-4 text-sm">
      <img
        v-if="form?.main_image"
        class="h-32 w-32 rounded-md object-cover object-center"
        alt=""
        :src="form?.main_image"
      />

      <div class="lot-row">
        <p class="font-semibold">{{ $t("labels.lot_id") }}</p>
        <div v-if="form?.lot">
          <ui-badge color="info" :label="form?.lot" />
        </div>
      </div>

      <div class="lot-row">
        <p class="font-semibold">{{ $t("labels.property_name") }}</p>
        <p>{{ form?.property }}</p>
      </div>

      <!--      <div class="lot-row">-->
      <!--        <p class="font-semibold">{{ $t("labels.property_type") }}</p>-->
      <!--        <p>Кўчмас мулк</p>-->
      <!--      </div>-->

      <!--      <div class="lot-row">-->
      <!--        <p class="font-semibold">{{ $t("labels.property_category") }}</p>-->
      <!--        <p>Нотурар-жой объектлари</p>-->
      <!--      </div>-->

      <div class="lot-row">
        <p class="font-semibold">{{ $t("labels.price") }}</p>
        <p v-if="form?.price">{{ formatCurrency(form?.price || 0, $t("labels.uzs"), 1) }}</p>
      </div>

      <!--      <div class="lot-row">-->
      <!--        <p class="font-semibold">{{ $t("labels.starting_price") }}</p>-->
      <!--        <p>$100 000 000</p>-->
      <!--      </div>-->

      <div class="lot-row">
        <p class="font-semibold">{{ $t("labels.auction_start_date") }}</p>
        <p>{{ form?.auction_time }}</p>
      </div>

      <div class="lot-row">
        <p class="font-semibold">{{ $t("labels.auction_end_date") }}</p>
        <p>{{ form?.over_time }}</p>
      </div>

      <div class="lot-row">
        <p class="font-semibold">{{ $t("labels.status") }}</p>
        <div v-if="form?.lot_status">
          <ui-badge class="w-auto" variant="white" color="secondary" :label="form?.lot_status" />
        </div>
      </div>

      <div class="lot-row">
        <p class="font-semibold">{{ $t("labels.address") }}</p>
        <p>{{ form?.address }}</p>
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
