declare global {
  interface IRegistrationInvestor {
    id: string;
    email: string;
    phone: string;
    country: string;
    website: string;
    position: string;
    company_name: string;
    contact_person: string;
    net_profit: string;
    annual_revenue: string;
    number_of_employees: string;
    investment_type: InvestmentType;
    target_industry: InvestmentType;
    region: Region;
    investment_amount: InvestmentType;
    investment_amount_variant: string;
    has_business: boolean;
    investment_experience: string;
    source: string;
    source_variant: string;
    comments: string;
    is_resident: string;
  }
  interface Region {
    id: number;
    region: string;
    code: string;
  }
  interface InvestmentType {
    id: number;
    content: string;
    created: string;
  }
}

export class RegisterInvestor {
  company_name: string = ""
  website: string = ""

  //applicant
  email: string = ""
  phone: string = ""
  position: string = ""
  name: string = ""
  surname: string = ""
  pin?: string
  country_id!: number


  // additional fields
  source: string = ""
  comments: string = ""
  source_variant: string = ""
  is_resident: boolean = true
}
