<script setup lang="ts">
const record = ref<IUzExResponse>()
const label = computed(() => `№ ${record.value?.lot_number}`)
const redirectUrl = computed(() => `https://etender.uzex.uz/lot/${record.value?.lot_id}`)

const onBeforeShow = (_record: IUzExResponse) => {
  if (_record) record.value = _record
}

const onHide = () => (record.value = undefined)
</script>

<template>
  <ui-modal id="uz-ex" size="md" :label :close-on-backdrop="false" @hide="onHide" @before-show="onBeforeShow">
    <div class="uz-ex">
      <div class="uz-ex__header">
        <h3 class="uz-ex__title">{{ record?.proposal_name }}</h3>

        <timer-card format="DD.MM.YYYY HH:mm" :label="$t('labels.time_left_until_end')" :end-time="record?.end_date" />

        <div class="uz-ex__stats">
          <div class="uz-ex__stat">
            <p class="uz-ex__stat-label">{{ $t("labels.start_date") }}</p>
            <p class="uz-ex__stat-value">{{ record?.start_date }}</p>
          </div>

          <div class="uz-ex__stat">
            <p class="uz-ex__stat-label">{{ $t("labels.end_date") }}</p>
            <p class="uz-ex__stat-value">{{ record?.end_date }}</p>
          </div>

          <div class="uz-ex__stat">
            <p class="uz-ex__stat-label">{{ $t("labels.final_start_cost") }}</p>
            <p class="uz-ex__stat-value">
              {{ formatCurrency(record?.start_cost, record?.currency_name, 1) }}
            </p>
          </div>
        </div>
      </div>

      <div class="uz-ex__products">
        <ui-card v-for="product in record?.products" class="uz-ex__product" :key="product?.name">
          <h3 class="uz-ex__product-title">{{ product?.name }}</h3>

          <ui-card class="uz-ex__product-details">
            <div class="uz-ex__stats">
              <div>
                <p class="uz-ex__stat-label">{{ $t("labels.product_quantity") }}</p>
                <p class="uz-ex__stat-value">{{ product?.number }}</p>
              </div>

              <div>
                <p class="uz-ex__stat-label">{{ $t("labels.unit_start_cost") }}</p>
                <p class="uz-ex__stat-value">
                  {{ formatCurrency(product?.price_unit, record?.currency_name, 1) }}
                </p>
              </div>

              <div>
                <p class="uz-ex__stat-label">{{ $t("labels.total_cost") }}</p>
                <p class="uz-ex__stat-value">
                  {{ formatCurrency(product?.price_unit * product?.number, record?.currency_name, 1) }}
                </p>
              </div>
            </div>
          </ui-card>

          <p class="uz-ex__stat-label">{{ $t("labels.detailed_description") }}</p>
          <p class="uz-ex__stat-value">{{ product?.info }}</p>
        </ui-card>
      </div>
    </div>

    <template #footer>
      <div class="ui-modal-footer">
        <ui-button rounded label="Подать заявку" target="_blank" :href="redirectUrl" />
      </div>
    </template>
  </ui-modal>
</template>

<style lang="css" scoped>
.uz-ex {
  @apply flex flex-col;

  &__header {
    @apply sticky top-0 z-10 flex flex-col gap-4 border-b bg-white p-4 dark:border-gray-800 dark:bg-gray-900;
  }

  &__title {
    @apply font-bold text-blue-midnight;
  }

  &__timer {
    @apply mb-2;
  }

  &__stats {
    @apply grid grid-cols-1 gap-4 md:grid-cols-3 md:text-center;
  }

  &__stat {
    @apply rounded-lg bg-blue-bright p-2;
  }

  &__stat-label {
    @apply mb-1 text-xs font-semibold;
  }

  &__stat-value {
    @apply text-sm font-bold text-blue-midnight;
  }

  &__products {
    @apply grid gap-4 p-4;
  }

  &__product {
    @apply p-4;
  }

  &__product-title {
    @apply mb-4 font-semibold text-blue-midnight;
  }

  &__product-details {
    @apply mb-4 p-2;
  }

  &__product-info {
    @apply mt-2;
  }

  &__address {
    @apply text-sm font-medium;
  }

  &__footer {
    @apply flex justify-end;
  }
}
</style>
