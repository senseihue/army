import type { PersonalProject } from "~/entities/profile/personal-project"

export const usePersonalProjectApi = () => {
  const BASE_URL = "/siw/personal/project"
  const DOCUMENT_API_URL = "/document"
  const { $http } = useNuxtApp()

  const getPersonalProjectList = (params: any): AsyncResponseContainer<IPersonalProject[]> => {
    return $http.$get(BASE_URL, { params })
  }

  const getPersonalProject = (id: number): AsyncResponseContainer<IPersonalProject> => {
    return $http.$get(`${BASE_URL}/${id}`)
  }

  const createPersonalProject = (data: PersonalProject): AsyncResponseContainer<IPersonalProject> => {
    return $http.$post(BASE_URL, data)
  }

  const updatePersonalProject = (data: PersonalProject): AsyncResponseContainer<IPersonalProject> => {
    return $http.$put(`${BASE_URL}`, data, { params: { id: data.id } })
  }

  const changeVisibilityPersonalProject = (id: number): AsyncResponseContainer<IPersonalProject> => {
    return $http.$post(`${BASE_URL}/set-visible/${id}`)
  }

  const createPersonalProjectPresentation = (data: FormData): AsyncResponseContainer<any> => {
    return $http.$post(`${DOCUMENT_API_URL}/project/presentation`, data)
  }
  const createPersonalProjectUpload = (data: FormData): AsyncResponseContainer<any> => {
    return $http.$post(`${DOCUMENT_API_URL}/project/upload`, data)
  }

  return {
    getPersonalProjectList,
    getPersonalProject,
    createPersonalProject,
    updatePersonalProject,
    changeVisibilityPersonalProject,
    createPersonalProjectPresentation,
    createPersonalProjectUpload
  }
}
