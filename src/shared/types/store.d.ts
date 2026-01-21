interface IStoreListParams extends Record<string, any>{
  page: number
  per_page: number
  total: number
  keyword: string
}
