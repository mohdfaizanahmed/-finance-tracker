'use client'

import { BarChart, Bar, XAxis, YAxis, Legend, Tooltip, ResponsiveContainer } from 'recharts'
import { Transaction } from '@/models/transaction'
import { Budget } from '@/models/budget'

type Props = {
  transactions: Transaction[]
  budgets: Budget[]
}

export function BudgetVsActualChart({ transactions, budgets }: Props) {
  const data = budgets.map(b => {
    const actualSpent = transactions
      .filter(t => t.category === b.category)
      .reduce((sum, t) => sum + t.amount, 0)

    return {
      category: b.category,
      budget: b.amount,
      actual: actualSpent,
    }
  })

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="budget" fill="#22c55e" name="Budget" />
        <Bar dataKey="actual" fill="#ef4444" name="Spent" />
      </BarChart>
    </ResponsiveContainer>
  )
}
