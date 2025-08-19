declare global {
  interface IUzEx {
    id: number
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