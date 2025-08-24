<template>
  <div class="relative rounded-xl border p-3">
    <div class="flex flex-col gap-5 lg:flex-row">
      <div>
        <img
          class="h-[184px] w-full min-w-[245px] max-w-[245px] rounded-xl object-cover object-center"
          alt="img"
          :src="lot?.image_link"
        />
      </div>
      <div class="flex w-full flex-col justify-between gap-3">
        <h3 class="font-bold text-blue-midnight">{{ lot?.property_name }}</h3>
        <div class="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p class="mb-2 text-xs font-semibold">Стартовая цена</p>
            <p class="text-sm font-bold text-blue-midnight">{{ lot?.start_price }} UZS</p>
          </div>

          <div>
            <p class="mb-2 text-xs font-semibold">Сумма задатка ({{ lot?.zakalad_percent }})</p>
            <p class="text-sm font-bold text-blue-midnight">{{ lot?.zakalad_amount }} UZS</p>
          </div>

          <div>
            <p class="mb-2 text-xs font-semibold">Дата проведения торгов</p>
            <p class="text-sm font-bold text-blue-midnight">{{ lot?.auction_start_time }}</p>
          </div>

          <div>
            <p class="mb-2 text-xs font-semibold">Срок окончания приёма заявок</p>
            <p class="text-sm font-bold text-blue-midnight">{{ lot?.order_end_time }}</p>
          </div>
        </div>

        <div class="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div>
            <p class="mb-2 text-xs font-semibold">Адрес</p>
            <p class="text-sm font-bold text-blue-midnight">
              {{ lot?.address }}
            </p>
          </div>

          <ui-button
            class="text-sm"
            rounded
            size="sm"
            color="midnight"
            label="Подробнее"
            :to="`/service/e-auction/${lot?.lot_number}`"
          />
        </div>
      </div>
    </div>

    <span
      class="absolute right-0 top-0 rounded-bl-xl rounded-tr-xl bg-blue-bondi px-4 py-2 text-xs font-medium text-white"
    >
      №{{ lot?.lot_number }}
    </span>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  lot: IEAuction
}

const props = defineProps<IProps>()
</script>

<style scoped></style>
