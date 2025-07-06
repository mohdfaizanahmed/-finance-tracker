import { Transaction } from '@/models/transaction'
import { Button } from '@/components/ui/button'

type Props = {
  transactions: Transaction[]
  onDelete: (id: string) => void
}

export function TransactionList({ transactions, onDelete }: Props) {
  return (
    <div className="space-y-2">
      {transactions.map(txn => (
        <div key={txn.id} className="flex justify-between items-center p-2 border rounded">
          <div>
            <p className="font-medium">{txn.description}</p>
            <p className="text-sm text-muted-foreground">
              {txn.date} | ₹{txn.amount.toFixed(2)}
            </p>
          </div>
          <Button variant="destructive" size="sm" onClick={() => onDelete(txn.id)}>Delete</Button>
        </div>
      ))}
    </div>
  )
}
