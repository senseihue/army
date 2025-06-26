declare global {
  interface IServiceStep {
    id: number
    title: string
    description: string
    content: string
    icon: string
    order: number
    draft: boolean
  }
}

export class ServiceStepParams {
  process_id!: number
}
