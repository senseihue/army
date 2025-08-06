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
