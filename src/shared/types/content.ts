declare global {
  interface IContent<T extends File | string | undefined = string> {
    en: string | T
    ru: string | T
    uz: string | T
  }
}

export class Content<T extends File | string | undefined = string> {
  en!: string | T
  ru!: string | T
  uz!: string | T
}
