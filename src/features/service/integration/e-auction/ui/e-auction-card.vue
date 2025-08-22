<template>
  <div class="relative rounded-xl border p-3">
    <div class="flex flex-col gap-5 lg:flex-row">
      <div>
        <img
          class="h-[184px] w-full min-w-[245px] max-w-[245px] rounded-xl object-cover object-center"
          alt="img"
          :src="image"
        />
      </div>
      <div class="flex w-full flex-col justify-between gap-3">
        <h3 class="font-bold text-blue-midnight">{{ title }}</h3>
        <div class="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p class="mb-2 text-xs font-semibold">Стартовая цена</p>
            <p class="text-sm font-bold text-blue-midnight">{{ startPrice }} UZS</p>
          </div>

          <div>
            <p class="mb-2 text-xs font-semibold">Сумма задатка ({{ percent }})</p>
            <p class="text-sm font-bold text-blue-midnight">{{ deposit }} UZS</p>
          </div>

          <div>
            <p class="mb-2 text-xs font-semibold">Дата проведения торгов</p>
            <p class="text-sm font-bold text-blue-midnight">{{ auctionStartTime }}</p>
          </div>

          <div>
            <p class="mb-2 text-xs font-semibold">Срок окончания приёма заявок</p>
            <p class="text-sm font-bold text-blue-midnight">{{ orderEndTime }}</p>
          </div>
        </div>

        <div class="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div>
            <p class="text-xs font-semibold mb-2">Адрес</p>
            <p class="text-sm font-bold text-blue-midnight">
              {{ address }}
            </p>
          </div>

          <ui-button class="text-sm" rounded size="sm" color="midnight" label="Подробнее" />
        </div>
      </div>
    </div>

    <span
      class="absolute right-0 top-0 rounded-bl-xl rounded-tr-xl bg-blue-bondi px-4 py-2 text-xs font-medium text-white"
    >
      №{{ lotNumber }}
    </span>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  title: string
  auctionStartTime: string
  startPrice: number
  deposit: number
  percent: number
  orderEndTime: string
  address: string
  lotNumber: string
  image: string
}

const props = defineProps<IProps>()
</script>

<style scoped></style>
