<script setup lang="ts">
import { RelativeCard } from "~/features/profile/relative"
import { useRelativeStore } from "~/entities/profile/relative"

const { t } = useI18n({ useScope: "local" })
const modal = useModal()
const personalRelativeStore = useRelativeStore()
const { items, loading } = storeToRefs(personalRelativeStore)
const showEditModal = (relative: IRelative) => {
  modal.show("relative", relative)
}
</script>

<template>
  <div class="grid grid-cols-1 gap-x-7 gap-y-3 lg:grid-cols-2">
    <template v-if="items.length > 0">
      <relative-card v-for="item in items" :key="item.id" :relative-data="item" @edit="showEditModal(item)" />
    </template>
    <template v-else>
      <div class="col-span-full py-12 text-center">
        <p class="font-semibold text-blue-midnight">
          {{ t("empty_relative_data") }}
        </p>
      </div>
    </template>
  </div>
</template>

<style scoped></style>

<i18n>
{
  "en": {
    "empty_relative_data": "No information about relatives is available."
  },
  "ru": {
    "empty_relative_data": "Информации о родственниках нет"
  },
  "uz": {
    "empty_relative_data": "Qarindoshlar haqida ma'lumot mavjud emas"
  }
}
</i18n>
