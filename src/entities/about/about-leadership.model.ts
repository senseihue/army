declare global {
  interface ILeadership {
    id: number,
    bio: string,
    name: string,
    surname: string,
    phone: string,
    email: string,
    position: string,
    working_days: string,
    photo: IFile,
    draft: boolean
  }
}
