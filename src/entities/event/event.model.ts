declare global {
  interface IEventType {
    id: number
    name: string
    time: string
    date_from: string
    date_to: string
    location: string
    description: string
    photo: IFile
    agenda: IFile
    draft: boolean
  }
}
