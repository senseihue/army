<script setup lang="ts">
interface IProps {
  document: IServiceStepDocument
}

defineProps<IProps>()

const { t } = useI18n({ useScope: "local" })
</script>

<template>
  <div class="col-span-full rounded-xl border-2 bg-[#F8FAFC] p-4">
    <a
      class="flex cursor-pointer items-center justify-between gap-3 !no-underline"
      target="_blank"
      :href="document.upload?.download_link"
    >
      <div class="flex items-center gap-3 text-blue-midnight">
        <icon :name="document.icon" />
        <p class="text-sm font-semibold">
          {{ document.title }}
        </p>
      </div>
      <div class="flex items-center gap-3 !text-black">
        <p class="text-sm font-semibold">
          {{ t("actions.download") }}
        </p>
        <icon class="text-xl" name="ph:download-simple"></icon>
      </div>
    </a>
  </div>
</template>

<i18n>
{
  "en": {
    "actions": {
      "download": "Download"
    }
  },
  "ru": {
    "actions": {
      "download": "Скачать"
    }
  },
  "uz": {
    "actions": {
      "download": "Yuklab olish"
    }
  }
}
</i18n>
