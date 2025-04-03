// src/components/Layout.tsx
import { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <header className="bg-gray-800 shadow-md p-4">
        <h1 className="text-xl font-bold">MTG Stats</h1>
      </header>
      <main className="p-4">{children}</main>
    </div>
  )
}
