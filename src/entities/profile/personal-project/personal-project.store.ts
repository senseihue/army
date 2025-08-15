import type { PersonalProject } from "~/entities/profile/personal-project"

export const usePersonalProjectStore = createListStore<PersonalProject>("personal-project")
