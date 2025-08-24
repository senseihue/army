<template>
  <div class="p-section">
    <div v-if="loading"></div>
    <div v-else class="container-6xl">
      <div class="grid gap-8">
        <div class="grid gap-6 md:grid-cols-2">
          <e-auction-slides :slides="lot?.images" />
          <div>
            <div class="flex w-full flex-col justify-between gap-6">
              <span class="text-end text-lg font-bold text-blue-bondi md:text-2xl">№{{ lot?.lot }}</span>
              <h3 class="font-bold text-blue-midnight">{{ lot?.property }}</h3>
              <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <p class="mb-2 text-xs font-semibold">Стартовая цена</p>
                  <p class="text-sm font-bold text-blue-midnight">{{ lot?.price }} UZS</p>
                </div>

                <div>
                  <p class="mb-2 text-xs font-semibold">Сумма задатка ({{ lot?.zaklad_percent }}%)</p>
                  <p class="text-sm font-bold text-blue-midnight">{{ lot?.zaklad_summa }} UZS</p>
                </div>

                <div>
                  <p class="mb-2 text-xs font-semibold">Дата проведения торгов</p>
                  <p class="text-sm font-bold text-blue-midnight">{{ lot?.auction_time }}</p>
                </div>

                <div>
                  <p class="mb-2 text-xs font-semibold">Срок окончания приёма заявок</p>
                  <p class="text-sm font-bold text-blue-midnight">{{ lot?.order_end_time }}</p>
                </div>
              </div>

              <div class="flex flex-col justify-between gap-6">
                <div>
                  <p class="mb-2 text-xs font-semibold">Адрес</p>
                  <p class="text-sm font-bold text-blue-midnight">
                    {{ lot?.address }}
                  </p>
                </div>

                <div>
                  <p class="mb-2 text-xs font-semibold">Статус лота</p>
                  <p class="text-sm font-bold text-blue-midnight">
                    {{ lot?.lot_status }}
                  </p>
                </div>

                <div class="gpa-2 grid md:grid-cols-2">
                  <div class="rounded-md border border-blue-midnight p-3">
                    <p class="text-center text-sm font-semibold text-blue-midnight">Окончание приёма заявок</p>
                    <p class="text-center text-[40px] font-bold text-red-600">{{ timeLeft }}</p>
                    <div
                      class="grid grid-cols-4 gap-4 text-xs font-semibold uppercase text-blue-midnight"
                    >
                      <span class="inline-block text-center">D</span>
                      <span class="inline-block text-center">H</span>
                      <span class="inline-block text-center">M</span>
                      <span class="inline-block text-center">S</span>
                    </div>
                  </div>

                  <div class="flex w-full items-center justify-center">
                    <ui-button
                      class="text-sm"
                      rounded
                      size="sm"
                      color="primary"
                      label="Подать заявку"
                      @click="redirectEAuction"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 class="mb-2 text-sm font-bold text-blue-midnight">Местоположение объекта</h3>

          <iframe
            class="rounded-md border-0"
            height="400"
            width="100%"
            :src="`https://maps.google.com/maps?q=${lot?.lat ?? '41.31469012975017'},${lot?.lng ?? '69.28002422052592'}&z=15&output=embed`"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { EAuctionSlides, useEAuctionService } from "~/features/service/integration/e-auction"
import dayjs from "dayjs"
import duration from "dayjs/plugin/duration"

dayjs.extend(duration)

const { getEAuctionById } = useEAuctionService()

const route = useRoute()
const loading = ref(false)
const lot = ref<IEAuctionDetails>()
const timeLeft = ref("00:00:00")
let interval: any = null

const updateTimer = () => {
  if (!lot.value?.order_end_time) return

  const deadline = dayjs(lot.value?.order_end_time)
  const now = dayjs()
  const diff = deadline.diff(now)

  if (diff <= 0) {
    timeLeft.value = "00:00:00"
    if (interval) clearInterval(interval)
    return
  }

  const d = dayjs.duration(diff)

  const days = String(d.days()).padStart(2, "0")
  const h = String(d.hours()).padStart(2, "0")
  const m = String(d.minutes()).padStart(2, "0")
  const s = String(d.seconds()).padStart(2, "0")

  timeLeft.value = `${days}:${h}:${m}:${s}`
}

const redirectEAuction = () => {
  if (lot.value?.lot) window.open(`https://cabinet.e-auksion.uz/lot-to-apply?lot=${lot.value.lot}`, "_blank")
}

onMounted(() => {
  if (route.params.id) getEAuctionById(+route.params.id, lot, loading)
  updateTimer()
  interval = setInterval(updateTimer, 1000)
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})
</script>

<style scoped></style>
