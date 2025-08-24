declare global {
  interface IEAuction {
    region: string
    area: string
    address: string
    order_id: number
    lot_number: string
    property_name: string
    property_group: string
    property_category: string
    external_link: string
    auction_start_time: string
    order_end_time: string
    image_link: string
    start_price: number
    zakalad_percent: number
    zakalad_amount: number
    is_tern_payment: boolean
    term_month: number
  }

  interface IEAuctionDetails {
    lot: string
    main_image: string
    property: string
    address: string
    auction_date: string
    lot_status: string
    price: number
    zaklad_summa: number
    zaklad_percent: number
    lat: string
    lng: string
    images: any[]
    over_time: string
    order_end_time: string
    auction_time: string
    winner_type_id: number
    win_amount: number
    view_count: number
    customer_name: string
    customer_type: string
    customer_address: string
    customer_phone: string
    customer_email: string
    customer_additional_phone: string
  }
}
