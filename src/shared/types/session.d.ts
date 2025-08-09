interface ISessionProfile {
  entities:[],
  user: {
    active: boolean;
    birth_cntry?: any;
    birth_date?: any;
    birth_place?: any;
    blocked: boolean;
    ctzn?: any;
    email?: any;
    first_name: string;
    full_name: string;
    gd: string;
    gender: string;
    id: number;
    isResident: boolean;
    mid_name: string;
    mob_phone_no?: any;
    natn?: any;
    password?: any;
    per_adr?: any;
    pin: string;
    pport_expr_date?: any;
    pport_issue_date?: any;
    pport_issue_place?: any;
    pport_no: string;
    ret_cd: string;
    role: string;
    sess_id: string;
    sur_name: string;
    tem_adr?: any;
    tin?: any;
    user_id: string;
    user_type: string;
    valid: boolean;
  }
}
