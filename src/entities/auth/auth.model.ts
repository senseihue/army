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

  constructor(data?: any) {
    if (data) {
      this.role = data.role
    }
  }
}

export class ForgotPassword {
  email: string = ""
  hash?: string
  role?: string
  constructor(data?: any) {
    if (data) {
      this.role = data.role
    }
  }
}

export class ResetPassword {
  password: string = ""
  password_confirmation: string = ""
  hash?: string
  token?: string
  email?: string
  time?: number
  role?: string
  uuid?: string

  constructor(data?: any) {
    if (data) {
      this.time = data.time
      this.email = data.email
      this.token = data.token
      this.role = data.role
      this.uuid = data.uuid
    }
  }
}

export class ChangePassword {
  new_password: string = ""
  old_password: string = ""
  password_confirmation: string = ""
  hash?: string
}
