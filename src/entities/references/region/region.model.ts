declare global {

    interface IRegion {
        id: number;
        title: string;
        code: string;
        sync_code?: any;
        soato: string;
        country_id: number;
        foreign_id: number;
        foreign_country_id: number;
        created_by?: any;
        updated_by?: any;
        deleted_by?: any;
        status: boolean;
        deleted_at?: any;
        created_at?: any;
        updated_at: string;
    }
}

export {}