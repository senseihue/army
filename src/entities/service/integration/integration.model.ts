declare global {
  interface IServiceIntegrationEAuction {
    region: string
    area: string
    address: string
    order_id: number
    lot_number: string
    property_name: string
    property_group: string
    property_category: string
    external_link: string
    auction_star_time: string
    order_end_time: string
    image_link: string
    star_price: number
    zakalad_percent: number
    zakalad_amount: number
    is_tern_payment: boolean
    term_month: number
  }

  interface IServiceIntegrationUzEx {
    contract_id: number
    contract_type: string
    seller_name: string
    vistav_date: string
    tovar: string
    vistavleno_quantity: number
    qunit: string
    start_price: number
    realizovano_quantity: number
    realizovano_price: number
    realizovano_summa: number
    currency: string
  }
}

export class IServiceIntegrationParams {
  lot_id: string = ""
}
