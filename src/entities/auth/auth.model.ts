declare global {
  interface IModal {
    "auth-role-select-modal": any
  }
  interface ISignInResponse {
    token: string
    profile: ISessionProfile
  }
}

export class SignIn {
  email: string = ""
  password: string = ""
  hash?: string
}

export class ForgotPassword {
  email: string = ""
  hash?: string
  role?: string

}
export class ResetPassword {
  password: string = ""
  password_confirmation: string = ""
  hash?: string
  token?: string
  email?: string
  role?: string
  timestamp?: number

  constructor(data?: any) {
    if (data) {
      this.timestamp = data.timestamp
      this.email = data.email
      this.token = data.token
      this.role = data.role
    }
  }

}
export class ChangePassword {
  password: string = ""
  old_password: string = ""
  password_confirmation: string = ""
  hash?: string

}
