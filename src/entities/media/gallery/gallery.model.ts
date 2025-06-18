declare global {
  interface IGallery {
    id: number,
    title: string,
    content: string,
    publish_date: string,
    files: IFile[],
    category: string,
    draft: boolean
  }
}
