declare global {
  interface IHeaderNav {
    label: string
    to: string
    dropdown?: Array<{
      label: string
      to: string
    }>
  }
}
