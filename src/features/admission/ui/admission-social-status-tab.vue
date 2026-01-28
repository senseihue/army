<script setup lang="ts">
import { useAdmissionService } from "~/features/admission"

interface IProps {
  socialStatus: ISocialStatus[]
}

defineProps<IProps>()

const router = useRouter()
const route = useRoute()
const { getAdmissionSchoolList } = useAdmissionService()

const changeSocialStatus = (id: ISocialStatus["id"]): void => {
  if (Number(route.query.social_status_id) === id) return
  router
    .push({
      query: {
        social_status_id: id
      }
    })
    .then(getAdmissionSchoolList)
}
</script>

<template>
  <div class="admission-social-status-tabs">
    <ui-button
      v-for="status in socialStatus"
      class="admission-social-status-tab"
      size="xl"
      :variant="status.id === Number($route.query.social_status_id) ? 'solid' : 'white'"
      :color="status.id === Number($route.query.social_status_id) ? 'primary' : 'secondary'"
      :key="status.id"
      @click="changeSocialStatus(status.id)"
    >
      <p>
        {{ status.title }}
      </p>
    </ui-button>
  </div>
</template>

<style scoped>
.admission-social-status-tabs {
  @apply flex items-center justify-center gap-5;
}
</style>
