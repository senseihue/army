declare global {
  interface IModal {
    request: IRequest
  }

  interface IRequest {
    id: number
    user_id: number
    uuid: string
    status: string
    status_id: number
    offer_id?: any
    person_id: number
    social_status_id: number
    season_type_id: number
    season_id: number
    test_region_id: number
    test_district_id: number
    test_language_id: number
    school_type_id: number
    school_id: number
    speciality_id?: any
    foreign_id?: any
    checked: boolean
    reject_re_request: boolean
    deleted_at?: any
    created_at: string
    updated_at: string
    season: IAdmission
    school: ISchool
  }
}
