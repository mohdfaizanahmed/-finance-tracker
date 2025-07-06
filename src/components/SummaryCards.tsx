import { Card, CardContent } from '@/components/ui/card'
import { Transaction } from '@/models/transaction'

export function SummaryCards({ transactions }: { transactions: Transaction[] }) {
  const total = transactions.reduce((sum, t) => sum + t.amount, 0)
  const recent = transactions.slice(0, 3)

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card>
        <CardContent className="p-4">
          <h2 className="text-lg font-semibold">Total Expenses</h2>
          <p className="text-xl font-bold text-red-600">₹{total.toFixed(2)}</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <h2 className="text-lg font-semibold">Recent Transactions</h2>
          <ul className="text-sm mt-2 space-y-1">
            {recent.map(t => (
              <li key={t.id}>
                {t.description} - ₹{t.amount}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <h2 className="text-lg font-semibold">Top Category</h2>
          <p className="text-sm">
            {
              Object.entries(
                transactions.reduce<Record<string, number>>((acc, txn) => {
                  acc[txn.category] = (acc[txn.category] || 0) + txn.amount
                  return acc
                }, {})
              ).sort((a, b) => b[1] - a[1])[0]?.[0] || 'N/A'
            }
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
