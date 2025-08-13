import { usePersonalProjectApi } from "~/features/profile/project"
import type { PersonalProject } from "~/entities/profile/personal-project"
import { usePersonalProjectStore } from "~/entities/profile/personal-project"

export const usePersonalProjectService = () => {
  const personalProjectApi = usePersonalProjectApi()
  const personalProjectStore = usePersonalProjectStore()
  const { $toast } = useNuxtApp()
  const router = useRouter()
  const localePath = useLocalePath()
  const getPersonalProjectList = async () => {
    personalProjectStore.loading = true
    return personalProjectApi
      .getPersonalProjectList(cleanParams(personalProjectStore.params))
      .then(({ content, pageable }) => {
        personalProjectStore.items = content
        personalProjectStore.params.total = pageable?.total || 0
        return Promise.resolve(content)
      })
      .finally(() => (personalProjectStore.loading = false))
  }

  const getPersonalProject = async (id: number, dto: Ref<PersonalProject>, loading: Ref<boolean>) => {
    loading.value = true
    return personalProjectApi
      .getPersonalProject(id)
      .then(({ content }) => {
        dto.value = content
        return Promise.resolve(content)
      })
      .finally(() => (loading.value = false))
  }

  const savePersonalProject = async (dto: Ref<PersonalProject>, loading: Ref<boolean>) => {
    loading.value = true
    const action = dto.value.id ? personalProjectApi.updatePersonalProject : personalProjectApi.createPersonalProject

    return action(dto.value)
      .then(({ content }) => {
        dto.value.id = content.id
        $toast.success("messages.success.saved")
        router.push(localePath("/profile/my-projects"))
        return Promise.resolve(content)
      })
      .finally(() => (loading.value = false))
  }

  return {
    getPersonalProjectList,
    getPersonalProject,
    savePersonalProject
  }
}
