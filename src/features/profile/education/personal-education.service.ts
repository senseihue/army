import { usePersonalEducationApi } from "~/features/profile/education"
import { usePersonalEducationStore } from "~/entities/profile/personal-education"

export const usePersonalEducationService = () => {
  const PersonalEducationApi = usePersonalEducationApi()
  const PersonalEducationStore = usePersonalEducationStore()

  const getPersonalEducationList = async () => {
    PersonalEducationStore.loading = true

    return PersonalEducationApi
      .getPersonalEducationList(cleanParams(PersonalEducationStore.params))
      .then(({ content, pageable }) => {
        PersonalEducationStore.items = content.educations
        PersonalEducationStore.params.total = pageable?.total || 0
        return Promise.resolve(content)
      })
      .finally(() => (PersonalEducationStore.loading = false))
  }

  return {
    getPersonalEducationList
  }
}
