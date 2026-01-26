import { useSpecialityApi } from "~/features/references/speciality"
import { useSpecialityStore } from "~/entities/references/speciality"

export const useSpecialityService = () => {
  const specialityApi = useSpecialityApi()
  const specialityStore = useSpecialityStore()

  const getSpecialityList = async () => {
    specialityStore.loading = true

    return specialityApi.getSpecialityList(cleanParams(specialityStore.params))
      .then(({ content, pagination }) => {
        specialityStore.items = content
        specialityStore.params.total = pagination?.total || 0
        return Promise.resolve({ content, pagination })
      })
      .finally(() => (specialityStore.loading = false))
  }

  return {
    getSpecialityList
  }
}
