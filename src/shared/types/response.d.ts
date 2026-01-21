

interface IResult {
  code: string
  description: string
}

interface IPagination {
  "total": number,
  "per_page": number,
  "current_page": number,
  "last_page": number,
  "from": number,
  "to": number
}

interface IResponse<T> {
  content: T
  errors?: string[]
  pagination?: IPagination
}

type ResponseContainer<T = any> = IResponse<T>
type AsyncResponseContainer<T = any> = Promise<IResponse<T>>

interface PaginationParams {
  [key: string]: any
  keyword: string
  page: number
  per_page: number
  total: number
}
