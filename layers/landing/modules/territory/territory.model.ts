declare global {
  interface ITerritory {
    id: number
    region: {
      id: number
      region: string
      code: string
    }
    area: string
    tourists: number
    investment_projects: number
    population: string
    fdi_credits: string
    foreign_trade: string
    draft: boolean
  }
}
