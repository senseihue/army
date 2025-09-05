<script setup lang="ts">
const props = defineProps<{ record: IUzExResponse }>()

const modal = useModal()

const showDetails = () => modal.show("uz-ex", props?.record)
</script>

<template>
  <ui-card class="card">
    <p class="card__number">№ {{ record?.lot_number }}</p>

    <div class="card__content">
      <div class="card__info">
        <h3 class="card__title">{{ record?.proposal_name }}</h3>

        <p class="card__label">{{ $t("labels.address") }}</p>
        <p class="card__address">{{ record?.customer_region }}</p>
      </div>

      <div class="card__prices">
        <div class="card__price">
          <p class="card__price-label">{{ $t("labels.start_cost") }}</p>
          <p class="card__price-value">{{ formatCurrency(record?.start_cost, record?.currency_name, 1) }}</p>
        </div>

        <div class="card__price">
          <p class="card__price-label">{{ $t("labels.end_date") }}</p>
          <p class="card__price-value">{{ formatDate(record?.end_date, "DD.MM.YYYY HH:mm") }}</p>
        </div>
      </div>

      <ui-button class="card__button" color="midnight" rounded :label="$t('actions.more')" @click="showDetails" />
    </div>
  </ui-card>
</template>

<style lang="css" scoped>
.card {
  @apply flex flex-col overflow-hidden;
}

.card__number {
  @apply max-w-min whitespace-nowrap rounded-br-2xl bg-primary-600 px-4 py-2 text-xs text-white;
}

.card__content {
  @apply flex grow flex-col md:flex-row md:items-center;
}

.card__info {
  @apply flex h-full grow flex-col p-4;
}

.card__title {
  @apply mb-2.5 grow font-bold text-blue-midnight;
}

.card__label {
  @apply mb-1 text-xs font-semibold;
}

.card__address {
  @apply text-sm font-medium text-blue-midnight;
}

.card__prices {
  @apply grid h-full min-w-44 gap-2.5 p-4 text-center;
}

.card__price {
  @apply whitespace-nowrap rounded-lg bg-blue-bright p-2;
}

.card__price-label {
  @apply mb-1 text-xs font-semibold;
}

.card__price-value {
  @apply text-sm font-bold text-blue-midnight;
}

.card__button {
  @apply m-4 shrink-0;
}
</style>
