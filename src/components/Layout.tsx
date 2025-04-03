// src/components/Layout.tsx
import Link from 'next/link'
import { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/dashboard"
            className="text-xl font-bold text-white hover:text-blue-400"
          >
            MTG Stats
          </Link>
          <nav className="space-x-4">
            <Link href="/dashboard" className="hover:text-blue-400">
              Dashboard
            </Link>
            {/* Exemplo: <Link href="/matches" className="hover:text-blue-400">Matches</Link> */}
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
    </div>
  )
}
