declare global {
  interface IModal {
    "relative": IRelative
  }

  interface IRelative {
    id: number;
    person_id: number;
    kinship_id: number;
    pin?: string | null;
    last_name: string;
    first_name: string;
    middle_name: string;
    birth_date: string;
    birth_place: string;
    work_place: string;
    address: string;
    kinship: IKinship;
    deleted_at?: any;
    created_at?: string;
    updated_at?: string;
  }


}export class Relative implements IRelative {
  id!: number;
  person_id!: number;
  kinship_id!: number;

  // Basic Info
  last_name: string = "";
  first_name: string = "";
  middle_name: string = "";

  // Details
  birth_date: string = "";
  birth_place: string = "";
  work_place: string = "";
  address: string = "";
  pin: string | null = null; // Optional/Nullable

  // Relation
  kinship!: IKinship;

  // Timestamps (Optional)
  deleted_at?: any;
  created_at?: string;
  updated_at?: string;

  constructor(data?: Partial<IRelative>) {
    if (data) {
      Object.assign(this, data);
    }
  }
}
