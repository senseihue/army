declare global {

    interface IDistrict {
      id: number
      name: string
      code: string
      sync_code?: any
      foreign_id: number
      foreign_city_id?: any
      foreign_region_id: number
      region_id: number
      city_id?: any
      status: boolean
      soato: any
      created_by?: any
      updated_by?: any
      deleted_by?: any
      deleted_at?: any
      created_at?: any
      updated_at: string
    }
}

export {}