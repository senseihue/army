declare global {
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

}
export class ResetPassword {
  password: string = ""
  password_confirmation: string = ""
  hash?: string

}
export class ChangePassword {
  password: string = ""
  old_password: string = ""
  password_confirmation: string = ""
  hash?: string

}
