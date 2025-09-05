<script setup lang="ts">
import { useUzExStore } from "~/entities/service/integration/uz-ex"
import { useUzExService, UzExCard } from "~/features/service/integration/uz-ex"

const uzExStore = useUzExStore()
const uzExService = useUzExService()

const { items, params, loading, isEmpty } = storeToRefs(uzExStore)

onMounted(uzExService.getUzExList)
</script>

<template>
  <section>
    <div class="container-6xl">
      <div class="p-section">
        <div class="mb-4 grid gap-4 md:mb-6 md:gap-6">
          <div v-if="loading" class="mx-auto w-auto">
            <ui-spinner size="size-20 py-12" />
          </div>

          <div v-else-if="isEmpty" class="flex h-32 flex-col items-center">
            <p class="text-center text-gray-600">
              {{ $t("messages.info.data_not_found") }}
            </p>
          </div>

          <template v-else>
            <uz-ex-card v-for="record in items" :key="record?.lot_id" :record />
          </template>
        </div>

        <ui-pagination
          v-model="params.page"
          :total="params.total"
          :per-page="params.size"
          @update:model-value="uzExService.getUzExList"
        />
      </div>
    </div>
  </section>
</template>
