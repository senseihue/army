interface ISessionProfile {
  id: number
  name: string
  first_name: string
  last_name: string
  middle_name: string
  username: string
  phone?: any
  email: string
  email_verified_at: string
  organization_id: number
  type: string
  pin: number
  one_id_user_id?: any
  status: boolean
  tg_id?: any
  person_id?: any
  created_by?: any
  updated_by?: any
  deleted_by?: any
  dont_touch: boolean
  deleted_at?: any
  created_at: string
  updated_at: string
  person: Person
}
interface Person {
  id: number
  user_id: number
  pin: number
  photo_base64: string
  photo_path?: any
  photo_mime?: any
  first_name: string
  last_name: string
  middle_name: string
  birth_date: string
  gender_id: number
  gender: string
  deleted_at?: any
  created_at: string
  updated_at: string
}
