export const currencyFormatter = new Intl.NumberFormat("ru", {
  style: "decimal",
  maximumFractionDigits: 0
})

export const formatCurrency = (amount: number, currency: string, divisor: number = 100) => {
  return currencyFormatter
    .format(amount / divisor)
    .concat(" ")
    .concat(currency)
}
