'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'
import { Transaction, Category } from '@/models/transaction'

// Simple ID generator since uuid package is not installed
const generateId = (): string => {
  return Math.random().toString(36).substr(2, 9) + Date.now().toString(36)
}

type Props = {
  onAdd: (transaction: Transaction) => void
}

const categories: Category[] = ['Food', 'Transport', 'Shopping', 'Bills', 'Other']

export function TransactionForm({ onAdd }: Props) {
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')
  const [category, setCategory] = useState<Category>('Other')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!description || !amount || !date || !category) return alert('All fields are required')

    const txn: Transaction = {
      id: generateId(),
      description,
      amount: parseFloat(amount),
      date,
      category,
    }

    onAdd(txn)
    setDescription('')
    setAmount('')
    setDate('')
    setCategory('Other')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <Input
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <Input
        placeholder="Amount"
        type="number"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />
      <Input
        type="date"
        value={date}
        onChange={e => setDate(e.target.value)}
      />

      <Select value={category} onValueChange={(value) => setCategory(value as Category)}>
        <SelectTrigger>
          <SelectValue placeholder="Select Category" />
        </SelectTrigger>
        <SelectContent>
          {categories.map(cat => (
            <SelectItem key={cat} value={cat}>{cat}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Button type="submit">Add Transaction</Button>
    </form>
  )
}
