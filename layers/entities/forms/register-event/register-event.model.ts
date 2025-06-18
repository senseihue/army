declare global {
  interface IRegisterEvent {
    id: number
    role: string
    first_name: string
    last_name: string
    middle_name: string
    birth_date: string
    email: string
    phone: string
    passport: string
    country: ICountry
    address: string
    birthplace: string
    organization: string
    position: string
    passport_document: IFile
    image: IFile
  }
}

export class RegisterEvent {
  role: string = ""
  first_name: string = ""
  last_name: string = ""
  middle_name: string = ""
  birth_date: string = ""
  email: string = ""
  phone: string = ""
  passport: string = ""
  country_id!: number
  address: string = ""
  birthplace: string = ""
  organization: string = ""
  position: string = ""
  gender: string = ""
  event_id!: number
  filePassport: File[] = []
  filePhoto: File[] = []
}
