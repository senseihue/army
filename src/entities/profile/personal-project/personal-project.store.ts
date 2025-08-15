import { PersonalProject } from "~/entities/profile/personal-project"

export const usePersonalProjectStore = defineStore("personal-project", () => {
  const list = createListState<IPersonalProject>()
  const params = createListParams({})
  const dto = ref<PersonalProject>(new PersonalProject())

  return { ...list, params, dto }
})
