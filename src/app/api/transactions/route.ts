import { NextRequest, NextResponse } from 'next/server'
import clientPromise from '@/lib/mongo'

export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db('finance-tracker')
    const transactions = await db.collection('transactions').find().sort({ date: -1 }).toArray()

    return NextResponse.json(transactions)
  } catch (error) {
    console.error('Database connection error:', error)
    return NextResponse.json({ error: 'Database connection failed' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
    try{

    
    const data = await req.json()
    const client = await clientPromise
    const db = client.db('finance-tracker')
    const result = await db.collection('transactions').insertOne(data)
    return NextResponse.json(result)
  
  
  } catch (error) {
    console.error('Database connection error:', error)
    return NextResponse.json({ error: 'Database connection failed' }, { status: 500 })
  }

}
export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json()
    const client = await clientPromise
    const db = client.db('finance-tracker')
    const result = await db.collection('transactions').deleteOne({ id })

    return NextResponse.json(result)
  } catch (error) {
    console.error('Database connection error:', error)
    return NextResponse.json({ error: 'Database connection failed' }, { status: 500 })
  }
}
