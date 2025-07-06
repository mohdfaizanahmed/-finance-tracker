export type Category = 'Food' | 'Transport' | 'Shopping' | 'Bills' | 'Other'

export type Transaction = {
  id: string
  amount: number
  date: string
  description: string
  category: Category
}
