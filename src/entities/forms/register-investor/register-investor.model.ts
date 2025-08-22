declare global {
  interface IRegistrationInvestor {
    id: number
    email: string
    phone: string
    country: string
    website: string
    position: string
    company_name: string
    contact_person: string
    net_profit: string
    annual_revenue: string
    number_of_employees: number
    investment_type: {
      id: number
      content: null
      created: null
    }
    target_industry: {
      id: number
      content: null
      created: null
    }
    region: {
      id: number
      region: null
      code: null
    }
    investment_amount: {
      id: number
      content: null
      created: null
    }
    investment_amount_variant: string
    has_business: true
    investment_experience: string
    source: string
    source_variant: string
    comments: string
    is_resident: boolean
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


  // additional fields
  source: string = ""
  comments: string = ""
  source_variant: string = ""
  is_resident: boolean = true
}
