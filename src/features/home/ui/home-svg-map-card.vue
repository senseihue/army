<script lang="ts" setup>
const props = defineProps<{ id?: string }>()

const { locale } = useI18n()

const { content } = await $fetch<any>("/gateway/siw/public/territory", {
  server: false,
  params: { size: 14 },
  headers: { "Accept-Language": locale.value }
})
const region = computed(() => content?.find((reg: any) => reg.region.code === props.id))
const positionCard = computed(() => (region.value?.position ? "right-0" : "left-0"))
</script>

<template>
  <transition mode="out-in" name="fade">
    <div
      v-if="region"
      class="top-16 mx-auto w-full border border-blue-midnight bg-white lg:absolute lg:max-w-72"
      :class="positionCard"
    >
      <div id="map-card-header" class="flex items-center justify-between bg-blue-midnight py-4 font-bold text-white">
        <p class="px-6">{{ region.region?.region }}</p>

        <a
          v-if="region.presentation?.id"
          class="flex items-center px-4"
          target="_blank"
          :href="region.presentation?.download_link"
          :title="$t('labels.presentation')"
        >
          <Icon class="text-2xl leading-none" name="ci:external-link" />
        </a>
      </div>

      <div class="grid gap-4 px-6 py-4">
        <div>
          <h2 class="text-title text-blue-command">{{ region.population }}</h2>
          <p class="font-bold text-blue-midnight">{{ $t("labels.population") }}</p>
        </div>

        <div>
          <h2 class="text-title text-blue-command">{{ region.investment_projects }}</h2>
          <p class="font-bold text-blue-midnight">{{ $t("labels.investment") }}</p>
        </div>

        <div>
          <h2 class="text-title text-blue-command">{{ region.fdi_credits }}</h2>
          <p class="font-bold text-blue-midnight">{{ $t("labels.fdi") }}</p>
        </div>

        <div>
          <h2 class="text-title text-blue-command">{{ region.foreign_trade }}</h2>
          <p class="font-bold text-blue-midnight">{{ $t("labels.trade") }}</p>
        </div>

        <!--        <div>-->
        <!--          <h2 class="text-title text-command">{{ data.tourists }}</h2>-->
        <!--          <p class="font-bold text-midnight">{{ $t('main.map.card.tourists') }}</p>-->
        <!--        </div>-->

        <div>
          <h2 class="text-title text-blue-command">{{ region.area }}</h2>
          <p class="font-bold text-blue-midnight">{{ $t("labels.sq") }}</p>
        </div>
      </div>
    </div>
  </transition>
</template>
