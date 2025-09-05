declare global {
  interface IModal {
    "uz-ex": IUzExResponse
  }

  interface IUzExProduct {
    order: number
    name: string
    number: number
    price_unit: number
    info: string
  }

  interface IUzExResponse {
    rn: number
    lot_id: number
    start_cost: number
    total_count: number

    customer: string
    end_date: string
    trade_type: string
    lot_number: string
    start_date: string
    customer_tin: string
    currency_name: string
    proposal_name: string
    customer_region: string

    products: IUzExProduct[]
  }
}
