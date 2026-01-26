declare global {
  interface IModal {
    "admission": IAdmission
  }

  interface IAdmission {
    id: number;
    title: string;
    season: Season;
  }
  interface Season {
    id: number;
    season_type_id: number;
    title: string;
    start_date: string;
    offer: IOffer
    end_date: string;
    social_statuses: Socialstatus[];
    schools: School[];
  }
  interface School {
    id: number;
    school_type_id: number;
    title: string;
    pivot: Pivot2;
    type: Type;
  }
  interface Type {
    id: number;
    title: string;
  }
  interface Pivot2 {
    season_id: number;
    school_id: number;
    social_status_id: number;
  }
  interface Socialstatus {
    id: number;
    title: string;
    pivot: Pivot;
  }
  interface Pivot {
    season_id: number;
    social_status_id: number;
    age_min: number;
    age_max: number;
  }


}

export class Admission {
  season_id!: number
  social_status_id!: number
  test_region_id!: number
  test_district_id!: number
  test_language_id!: number
  school_id!: number
  speciality_id!: number
  offer_accepted: boolean = false
}
