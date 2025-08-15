import { usePersonalProjectApi } from "~/features/profile/project"
import { PersonalProject, usePersonalProjectStore  } from "~/entities/profile/personal-project"


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

  const savePersonalProject = async (loading: Ref<boolean>) => {
    loading.value = true
    const action = personalProjectStore.dto.id
      ? personalProjectApi.updatePersonalProject
      : personalProjectApi.createPersonalProject

    return action(personalProjectStore.dto)
      .then(({ content }) => {
        personalProjectStore.dto.id = content.id
        $toast.success("messages.success.saved")
        const formData = new FormData()
        formData.append("upload", personalProjectStore.dto.upload[0])
        formData.append("presentation", personalProjectStore.dto.presentation[0])
        personalProjectApi.createPersonalProjectDocuments(formData)
        router.push(localePath("/profile/my-projects"))
        personalProjectStore.dto = new PersonalProject()
        return Promise.resolve(content)
      })
      .finally(() => (loading.value = false))
  }

  const changeVisibilityPersonalProject = async (id: number, loading?: Ref<boolean>) => {
    if (loading) {
      loading.value = true
    }

    return personalProjectApi.changeVisibilityPersonalProject(id).finally(() => loading && (loading.value = false))
  }

  return {
    getPersonalProjectList,
    getPersonalProject,
    savePersonalProject,
    changeVisibilityPersonalProject
  }
}
