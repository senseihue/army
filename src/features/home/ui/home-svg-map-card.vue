<script lang="ts" setup>
const props = defineProps<{ id?: string }>()

const { data } = useFetch<any>("/gateway/siw/public/territory", {
  server: false, params: {size: 12}
})
const region = computed(() => data.value?.content.find((reg: any) => reg.region.code === props.id))
</script>

<template>
  <transition mode="out-in" name="fade">
    <div
      v-if="region"
      class="border-blue-midnight top-16 mx-auto w-full border bg-white lg:absolute lg:max-w-72"
    >
      <div id="map-card-header" class="bg-blue-midnight flex items-center justify-between py-4 font-bold text-white">
        <p class="px-6">{{ region.region.region }}</p>

        <a
          v-if="region.presentation"
          class="flex items-center px-4"
          href="file"
          target="_blank"
          :title="$t('labels.presentation')"
        >
          <Icon class="text-2xl leading-none" name="ci:external-link" />
        </a>
      </div>

      <div class="grid gap-4 px-6 py-4">
        <div>
          <h2 class="text-title text-blue-command">{{ region.population }}</h2>
          <p class="text-blue-midnight font-bold">{{ $t("labels.population") }}</p>
        </div>

        <div>
          <h2 class="text-title text-blue-command">{{ region.investment_projects }}</h2>
          <p class="text-blue-midnight font-bold">{{ $t("labels.investment") }}</p>
        </div>

        <div>
          <h2 class="text-title text-blue-command">{{ region.fdi_credits }}</h2>
          <p class="text-blue-midnight font-bold">{{ $t("labels.fdi") }}</p>
        </div>

        <div>
          <h2 class="text-title text-blue-command">{{ region.foreign_trade }}</h2>
          <p class="text-blue-midnight font-bold">{{ $t("labels.trade") }}</p>
        </div>

        <!--        <div>-->
        <!--          <h2 class="text-title text-command">{{ data.tourists }}</h2>-->
        <!--          <p class="font-bold text-midnight">{{ $t('main.map.card.tourists') }}</p>-->
        <!--        </div>-->

        <div>
          <h2 class="text-title text-blue-command">{{ region.area }}</h2>
          <p class="text-blue-midnight font-bold">{{ $t("labels.sq") }}</p>
        </div>
      </div>
    </div>
  </transition>
</template>
