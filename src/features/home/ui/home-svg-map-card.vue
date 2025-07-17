<script lang="ts" setup>
const props = defineProps<{ id?: string }>()

const { data: regions } = useFetch<any[]>('/gateway/integration/public/territorial-entity/regions', { server: false })
const data = computed(() => regions.value?.find((item) => item.code === props.id))
</script>

<template>
  <transition mode="out-in" name="fade">
    <div
      v-if="data"
      class="top-16 mx-auto w-full border border-midnight bg-white lg:absolute lg:max-w-72"
      :class="data.align"
    >
      <div id="map-card-header" class="flex items-center justify-between bg-midnight py-4 font-bold text-white">
        <p class="px-6">{{ $t(`regions.${data.code}`) }}</p>

        <a
          v-if="data.presentation"
          href="file"
          :title="$t('labels.presentation')"
          target="_blank"
          class="flex items-center px-4"
        >
          <Icon name="ci:external-link" class="text-2xl leading-none" />
        </a>
      </div>

      <div class="grid gap-4 px-6 py-4">
        <div>
          <h2 class="text-title text-command">{{ data.population }}</h2>
          <p class="font-bold text-midnight">{{ $t('main.map.card.population') }}</p>
        </div>

        <div>
          <h2 class="text-title text-command">{{ data.projects }}</h2>
          <p class="font-bold text-midnight">{{ $t('main.map.card.investment') }}</p>
        </div>

        <div>
          <h2 class="text-title text-command">{{ data.fdi }}</h2>
          <p class="font-bold text-midnight">{{ $t('main.map.card.fdi') }}</p>
        </div>

        <div>
          <h2 class="text-title text-command">{{ data.trade }}</h2>
          <p class="font-bold text-midnight">{{ $t('main.map.card.trade') }}</p>
        </div>

        <!--        <div>-->
        <!--          <h2 class="text-title text-command">{{ data.tourists }}</h2>-->
        <!--          <p class="font-bold text-midnight">{{ $t('main.map.card.tourists') }}</p>-->
        <!--        </div>-->

        <div>
          <h2 class="text-title text-command">{{ data.square }}</h2>
          <p class="font-bold text-midnight">{{ $t('main.map.card.sq') }}</p>
        </div>
      </div>
    </div>
  </transition>
</template>
