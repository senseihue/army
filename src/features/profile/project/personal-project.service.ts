import { usePersonalProjectApi } from "~/features/profile/project"
import { PersonalProject, usePersonalProjectStore } from "~/entities/profile/personal-project"

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
        if (content.latitude && content.longitude) {
          const location = [content.latitude, content.longitude].join(", ")
          content.location = location
        }
        dto.value = { ...new PersonalProject(), ...content }
        return Promise.resolve(content)
      })
      .finally(() => (loading.value = false))
  }

  const savePersonalProject = async (dto: Ref<PersonalProject>, loading: Ref<boolean>) => {
    loading.value = true
    const action = dto.value.id ? personalProjectApi.updatePersonalProject : personalProjectApi.createPersonalProject
    const [latitude, longitude] = dto.value.location.replace(" ", "").split(",")
    dto.value.latitude = Number(latitude)
    dto.value.longitude = Number(longitude)
    return action(dto.value)
      .then(({ content }) => {
        dto.value.id = content.id
        $toast.success("messages.success.saved")
        const formData = new FormData()
        formData.append("project_id", String(dto.value.id))
        for (const property in dto.value.presentation) {
          if (dto.value.presentation[property] instanceof File) {
            formData.append(`presentation_${property}`, dto.value.presentation[property])
          }
        }
        if (dto.value.upload instanceof File) {
          formData.append("file", dto.value.upload)
          personalProjectApi.createPersonalProjectUpload(formData)
        }
        if (Object.values(dto.value.presentation).some((item) => item instanceof File))
          personalProjectApi.createPersonalProjectPresentation(formData)

        router.push(localePath("/profile/my-projects"))
        dto.value = new PersonalProject()
        return Promise.resolve(content)
      })
      .finally(() => (loading.value = false))
  }

  const changeVisibilityPersonalProject = async (id: number, loading?: Ref<boolean>) => {
    if (loading) {
      loading.value = true
    }

    return personalProjectApi
      .changeVisibilityPersonalProject(id)
      .then(getPersonalProjectList)
      .finally(() => loading && (loading.value = false))
  }

  return {
    getPersonalProjectList,
    getPersonalProject,
    savePersonalProject,
    changeVisibilityPersonalProject
  }
}
