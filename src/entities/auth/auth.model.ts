declare global {
  interface IModal {
    "auth-role-select-modal": any
  }
  interface ISignInResponse {
    token: string
    profile: ISessionProfile
  }
}
