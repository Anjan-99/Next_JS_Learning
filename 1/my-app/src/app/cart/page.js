'use client'

import Link from 'next/link'
import { usePathname,useSearchParams } from 'next/navigation'
export default function Cart() {
    const pathname = usePathname()
    const searchparams = new useSearchParams()
    const value = searchparams.get('product')
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Cart Page : {pathname}/{value}</h1>
    </main>
  )
}