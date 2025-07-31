<script setup lang="ts">
import { PressCard } from "~/features/media/press"
import { useGalleryService } from "~/features/media/gallery"

interface IProps {
  data: IPress[]
}

// defineProps<IProps>()
const params = ref({
  page: 0,
  total: 1,
  size: 12
})

const loading = ref(false)
const galleryList = ref<IGallery[]>([])

const { getGalleryList } = useGalleryService()

const _getGalleryList = () => {
  return getGalleryList(params.value, loading).then(({ content, pageable }) => {
    galleryList.value = content
    params.value.total = pageable?.total || 0
  })
}

const { data } = await useFetch<IResponse<IGallery[]>>("/gateway/siw/public/gallery", {
  params: params.value
})

galleryList.value = data.value?.content || []
params.value.total = data.value?.pageable?.total || 0
</script>

<template>
  <section>
    <div class="container-7xl">
      <div class="p-section">
        <div class="mb-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          <template v-for="news in galleryList" :key="news.id">
            <press-card
              :label="news.title"
              :path="`/gallery/${news.id}`"
              :image="news.files[0]?.download_link"
              :publish-date="news.publish_date"
            />
          </template>
        </div>
        <ui-pagination
          v-model="params.page"
          :total="params.total"
          :per-page="params.size"
          @update:model-value="_getGalleryList"
        />
      </div>
    </div>
  </section>
</template>
