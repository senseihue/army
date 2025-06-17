declare global {
  interface IBusinessRegistrationDocument {
    id: number,
    file_extension: string,
    path: string,
    size: number,
    download_link: string,
    file_name: string,
    original_name: string,
    created_at: string,
    updated_at: string,
    content_type: string
  }
}
