declare global {
    type SchoolType = ISchool

    interface ISchool {
        id: number
        school_type_id: ISchoolType['id']
        code: string
        title: string
        alias: string
        status: boolean
        created_by?: any
        updated_by?: any
        deleted_by?: any
        deleted_at?: any
        created_at: string
        updated_at: string
    }

    interface ISchoolParams extends IStoreListParams {
        school_type_id?: number
    }

    interface ISchoolType {
        id: number
        title: string
    }
}

export {}