<script setup lang="ts">
import { PressCard } from "~/features/media"
import { usePressService } from "~/features/media/press"

interface IProps {
  data: IPress[]
}

// defineProps<IProps>()
const route = useRoute()
const { getPressList } = usePressService()
const {locale} = useI18n()
const params = ref({
  category: route.params.id,
  page: 0,
  total: 1,
  size: 12
})

const loading = ref(false)
const pressList = ref<IPress[]>([])

const _getPressList = () => {
  return getPressList(params.value, loading).then(({ content, pageable }) => {
    pressList.value = content
    params.value.total = pageable?.total || 0
  })
}

const { content, pageable } = await $fetch<IResponse<IPress[]>>("/gateway/siw/public/post", {
  params: params.value,
  headers: {
    "Accept-Language": locale.value
  }
})

pressList.value = content || []
params.value.total = pageable?.total || 0
</script>

<template>
  <section>
    <div class="container-7xl">
      <div class="p-section">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 mb-8">
          <template v-for="news in pressList" :key="news.id">
            <press-card
              :label="news.title"
              :path="`/post/${news.id}`"
              :image="news.photo?.thumbnail_link"
              :publish-date="news.publish_date"
            />
          </template>
        </div>
        <ui-pagination
          v-model="params.page"
          :total="params.total"
          :per-page="params.size"
          @update:model-value="_getPressList"
        />
      </div>
    </div>
  </section>
</template>
