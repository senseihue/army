declare global {
  interface IServiceStep {
    id: number
    title: string
    description: string
    content: string
    icon: string
    order: number
    group: IServiceStepDocumentGroup[]
    draft: boolean
    upload: IFile
  }

  interface IServiceStepDocumentGroup {
    id: number
    title: string
    icon: string
    documents: IServiceStepDocument[]
  }

  interface IServiceStepDocument {
    id: number
    title: string
    icon: string
    upload_id?: number
    upload: IFile
  }

  interface IServiceStepAccordion {
    id: number
    title: string
    icon: string
    upload_id?: number
    upload: IFile
  }
}

export class ServiceStepParams {
  process_id?: number
}
