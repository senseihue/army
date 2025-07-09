declare global {
  interface IModal {
    "service-detail-modal": IPersonalService
  }

  interface IPersonalServiceParams {
    title: string,
    key: string
  }

  interface IPersonalService {
    id: number
    title: string
    description: string
    params: IPersonalServiceParams[]
    body: IPersonalServiceParams[]
    draft: boolean
    order: number
    link: string
    online: boolean
    info: boolean
    upload: IFile
  }

  interface IPersonalServiceDetail {
    count: number,
    data: any[],
    size: number,
    max_page: number,
  }
}

export class PersonalServiceParams {
  type?: string
}
