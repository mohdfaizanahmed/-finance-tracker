'use client'

import { useEffect, useState } from 'react'
import { Transaction } from '@/models/transaction'
import { TransactionForm } from '@/components/TransactionForm'
import { TransactionList } from '@/components/TransactionList'
import { MonthlyBarChart } from '@/components/MonthlyBarChart'

const LOCAL_STORAGE_KEY = 'finance-tracker-transactions'

export default function Home() {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (stored) {
      setTransactions(JSON.parse(stored))
    }
  }, [])

  // Save to localStorage whenever transactions change
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(transactions))
  }, [transactions])

  const handleAdd = (txn: Transaction) => {
    setTransactions([txn, ...transactions])
  }

  const handleDelete = (id: string) => {
    setTransactions(transactions.filter(txn => txn.id !== id))
  }

  return (
    <main className="p-6 space-y-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold">Personal Finance Tracker</h1>
      <TransactionForm onAdd={handleAdd} />
      <MonthlyBarChart transactions={transactions} />
      <TransactionList transactions={transactions} onDelete={handleDelete} />
    </main>
  )
}
