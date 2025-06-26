declare global {
  interface IService {
    id: number
    title: string
    description: string
    link: string
  }
}

export class ServiceParams {}
