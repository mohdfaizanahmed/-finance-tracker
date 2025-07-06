'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Budget } from '@/models/budget'
import { Category } from '@/models/transaction'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'

const categories: Category[] = ['Food', 'Transport', 'Shopping', 'Bills', 'Other']

type Props = {
  onAdd: (budget: Budget) => void
}

export function BudgetForm({ onAdd }: Props) {
  const [category, setCategory] = useState<Category>('Food')
  const [amount, setAmount] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!amount) return alert('Amount is required')

    onAdd({ category, amount: parseFloat(amount) })
    setAmount('')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <h2 className="text-lg font-semibold">Set Category Budget</h2>
      <Select value={category} onValueChange={val => setCategory(val as Category)}>
        <SelectTrigger><SelectValue placeholder="Select Category" /></SelectTrigger>
        <SelectContent>
          {categories.map(cat => (
            <SelectItem key={cat} value={cat}>{cat}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Input
        placeholder="Monthly Budget Amount"
        type="number"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />
      <Button type="submit">Set Budget</Button>
    </form>
  )
}
