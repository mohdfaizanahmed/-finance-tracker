'use client'

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { Transaction } from '@/models/transaction'
import { format, parseISO } from 'date-fns'

type Props = {
  transactions: Transaction[]
}

export function MonthlyBarChart({ transactions }: Props) {
  const monthly = transactions.reduce<Record<string, number>>((acc, txn) => {
    const month = format(parseISO(txn.date), 'yyyy-MM')
    acc[month] = (acc[month] || 0) + txn.amount
    return acc
  }, {})

  const data = Object.entries(monthly).map(([month, total]) => ({
    month,
    total,
  }))

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="total" fill="#4f46e5" />
      </BarChart>
    </ResponsiveContainer>
  )
}
