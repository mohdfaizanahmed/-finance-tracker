'use client'

import { useEffect, useState } from 'react'
import { Transaction } from '@/models/transaction'
import { TransactionForm } from '@/components/TransactionForm'
import { TransactionList } from '@/components/TransactionList'
import { MonthlyBarChart } from '@/components/MonthlyBarChart'
import { SummaryCards } from '@/components/SummaryCards'
import { CategoryPieChart } from '@/components/CategoryPieChart'

export default function Home() {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [loading, setLoading] = useState(true)

  // Load transactions from MongoDB
  const fetchTransactions = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/transactions')
      const data = await res.json()
      setTransactions(data)
    } catch (err) {
      console.error('Failed to load transactions:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  const handleAdd = async (txn: Transaction) => {
    try {
      await fetch('/api/transactions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(txn),
      })
      fetchTransactions()
    } catch (err) {
      console.error('Add failed:', err)
    }
  }

  const handleDelete = async (id: string) => {
    try {
      await fetch('/api/transactions', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      })
      fetchTransactions()
    } catch (err) {
      console.error('Delete failed:', err)
    }
  }

  return (
    <main className="p-6 space-y-8 max-w-4xl mx-auto">
    <h1 className="text-3xl font-bold text-center">📊 Personal Finance Dashboard</h1>
    <TransactionForm onAdd={handleAdd} />
    <SummaryCards transactions={transactions} />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <MonthlyBarChart transactions={transactions} />
      <CategoryPieChart transactions={transactions} />
    </div>
    <TransactionList transactions={transactions} onDelete={handleDelete} />
  </main>
  
  )
}
