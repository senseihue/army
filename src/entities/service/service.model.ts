declare global {
  interface IService {
    id: number
    title: string
    description: string
    link: string
    upload: IFile

  }
}

export class ServiceParams {}
