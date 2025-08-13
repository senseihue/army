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
  role?: string
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
  time?: number

  constructor(data?: any) {
    if (data) {
      this.time = data.time
      this.email = data.email
      this.token = data.token
    }
  }

}
export class ChangePassword {
  password: string = ""
  old_password: string = ""
  password_confirmation: string = ""
  hash?: string

}
