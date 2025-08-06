export class RegisterBusiness {
  company_name: string = ""
  tin: string = ""
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
  isResident: boolean = true
}
