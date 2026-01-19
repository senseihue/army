import { PersonalServiceParams } from "~/entities/profile/personal-service"

export const usePersonalServiceStore = defineStore("personal-service", () => {
  const list = createListState<IPersonalService>()
  const params = createListParams<PersonalServiceParams>(new PersonalServiceParams())
  const current = ref<IPersonalServiceDetail>()
  const active = ref(0)

  return { ...list, params, current, active }
})
