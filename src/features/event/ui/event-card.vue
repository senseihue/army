<script lang="ts" setup>
import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"

dayjs.extend(utc)

interface IProps {
  image?: IFile
  agenda?: IFile
  id: number
  name: string
  date: string
  time: string
  location: string
  description: string
  path: string
}

const { t } = useI18n({ useScope: "local" })

const props = defineProps<IProps>()

const runtimeConfig = useRuntimeConfig()
</script>

<template>
  <div class="grid grid-cols-1 gap-y-8 md:grid-cols-2">
    <div class="md:mr-24">
      <img v-if="image" class="w-full" :src="image.thumbnail_link" :name />
      <img v-else src="" alt="" />
    </div>

    <div class="flex flex-col gap-6">
      <nuxt-link-locale target="_blank" :to="path">
        <h3 class="text-title text-command">{{ name }}</h3>
      </nuxt-link-locale>

      <p class="text-gray-600">
        <span class="font-bold">{{ t("labels.date") }}:&nbsp;</span>
        <span>{{ dayjs.utc(date?.[0]).format("MMMM D, YYYY") }} -</span>
        <span>{{ dayjs.utc(date?.[1]).format("MMMM D, YYYY") }}</span>
      </p>

      <p class="text-gray-600">
        <span class="font-bold">{{ t("labels.time") }}:&nbsp;</span>
        <span>{{ dayjs.utc(time).format("HH:mm") }}</span>
      </p>

      <p class="grow text-gray-600">
        <span class="font-bold">{{ t("labels.location") }}:&nbsp;</span>
        <span>{{ location }}</span>
      </p>

      <p class="grow text-gray-600">
        <span class="font-bold">{{ t("labels.description") }}:&nbsp;</span>
        <span>{{ description }}</span>
      </p>

      <div class="flex items-center gap-3">
        <nuxt-link-locale :to="{ path: '/event/register', query: { event_id: id } }">
          <ui-button download color="success" rounded>
            {{ t("actions.register") }}
          </ui-button>
        </nuxt-link-locale>

        <ui-button
          v-if="agenda"
          target="_blank"
          rounded
          color="info"
          :href="agenda.download_link"
        >
          {{ t("actions.download_forum_agenda") }}
        </ui-button>
      </div>
    </div>
  </div>
</template>

<i18n>
{
  "en": {
    "actions": {
      "register": "Register",
      "download_forum_agenda": "Download forum agenda"
    },
    "labels": {
      "date": "Date",
      "time": "Time",
      "location": "Location",
      "description": "Description"
    }
  },
  "ru": {
    "actions": {
      "register": "Регистрация",
      "download_forum_agenda": "Скачать повестку форума"
    },
    "labels": {
      "date": "Дата",
      "time": "Время",
      "location": "Место",
      "description": "Описание"
    }
  },
  "uz": {
    "actions": {
      "register": "Ro'yxatdan o'tish",
      "download_forum_agenda": "Forum kun tartibini yuklab olish"
    },
    "labels": {
      "date": "Sana",
      "time": "Vaqt",
      "location": "Manzil",
      "description": "Tavsif"
    }
  }
}
</i18n>
