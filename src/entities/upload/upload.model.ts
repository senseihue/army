declare global {
  interface IFile {
    id: number
    size: number
    path: string
    file_name: string
    created_at: string
    updated_at: string
    download_link: string
    thumbnail_link: string
    original_name: string
    file_extension: string
    content_type: string
  }

  interface IBusinessRegistrationDocument extends IFile {
    id: number
  }
}
