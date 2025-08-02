declare global {

  interface ISearch {
    events: ISearchResult[]
    gallery: ISearchResult[]
    pages: ISearchResult[]
    posts: ISearchResult[]
  }

  interface ISearchResult {
    description: string
    language: string
    path: string
    title: string
    author: {
      firstName: string
      lastName: string
    }
  }
}
