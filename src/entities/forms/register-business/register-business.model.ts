export class RegisterBusiness {
  company_name: string = ""
  tin: string = ""
  pin: string = ""
  website: string = ""
  legal_address: string = ""
  name: string = ""
  surname: string = ""
  email: string = ""
  phone: string = ""
  project_name: string = ""
  project_purpose: string = ""
  required_investment: string = ""
  own_contribution: string = ""
  file!: File[]
  is_resident: boolean = true
}
