'use client'
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Transaction } from '@/models/transaction'

// Simple ID generator since we can't install uuid
const generateId = (): string => {
  return Math.random().toString(36).substr(2, 9) + Date.now().toString(36)
}

type Props = {
  onAdd: (transaction: Transaction) => void
}

export function TransactionForm({ onAdd }: Props) {
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!description || !amount || !date) return alert('All fields are required')

    const transaction: Transaction = {
      id: generateId(),
      description,
      amount: parseFloat(amount),
      date,
    }

    onAdd(transaction)
    setDescription('')
    setAmount('')
    setDate('')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <Input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
      />
      <Input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAmount(e.target.value)}
      />
      <Input
        type="date"
        value={date}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDate(e.target.value)}
      />
      <Button type="submit">Add Transaction</Button>
    </form>
  )
} 