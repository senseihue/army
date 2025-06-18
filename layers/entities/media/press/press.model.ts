declare global {
  interface IMedia {
    id: number,
    title: string,
    content: string,
    publish_date: string,
    photo: IFile,
    files: IFile[],
    category: string,
    draft: boolean
  }
}
