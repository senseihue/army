declare global {
  interface IServiceIntegrationEAuction {
    id: number
    lot_id: number
    name: string
    date_from: string
    date_to: string
  }
}

export class IServiceIntegrationParams {
  lot_id: string = ""
}
