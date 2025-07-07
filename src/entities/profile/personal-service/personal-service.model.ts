declare global {
  interface IPersonalService {
    id: number
    title: string
    description: string
    params: string
    body: string
    draft: boolean
    order: number
    link: string
    online: boolean
    info: boolean
    upload: IFile
  }
}

export class PersonalServiceParams {
  category_id?: number
}
