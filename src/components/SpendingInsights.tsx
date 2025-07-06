import { Budget } from '@/models/budget'
import { Transaction } from '@/models/transaction'

type Props = {
  budgets: Budget[]
  transactions: Transaction[]
}

export function SpendingInsights({ budgets, transactions }: Props) {
  const overspent = budgets.filter(b => {
    const spent = transactions
      .filter(t => t.category === b.category)
      .reduce((sum, t) => sum + t.amount, 0)
    return spent > b.amount
  })

  if (overspent.length === 0) return null

  return (
    <div className="bg-red-100 p-4 rounded-lg border border-red-300">
      <h3 className="text-red-700 font-semibold mb-2">⚠️ Overspending Alerts:</h3>
      <ul className="text-red-600 list-disc ml-5">
        {overspent.map(b => (
          <li key={b.category}>
            {b.category}: Budget ₹{b.amount} → Spent ₹{
              transactions
                .filter(t => t.category === b.category)
                .reduce((sum, t) => sum + t.amount, 0)
            }
          </li>
        ))}
      </ul>
    </div>
  )
}
