declare global {
  interface IServiceProcess {
    id: number
    order: number
    icon: string
    title: string
    description: string
  }
}

export class ServiceProcessParams {
  service_id?: number
}
