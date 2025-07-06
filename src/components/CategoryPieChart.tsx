'use client'

import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts'
import { Transaction } from '@/models/transaction'

const COLORS = ['#4f46e5', '#22c55e', '#f97316', '#ec4899', '#6b7280']

export function CategoryPieChart({ transactions }: { transactions: Transaction[] }) {
  const categoryTotals = transactions.reduce<Record<string, number>>((acc, txn) => {
    acc[txn.category] = (acc[txn.category] || 0) + txn.amount
    return acc
  }, {})

  const data = Object.entries(categoryTotals).map(([category, total]) => ({
    name: category,
    value: total,
  }))

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie data={data} dataKey="value" nameKey="name" outerRadius={100} fill="#8884d8">
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  )
}
