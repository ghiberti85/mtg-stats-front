import { ReactNode } from 'react'
import Sidebar from './Sidebar'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex">
      <Sidebar />
      <main className="ml-64 w-full p-8">{children}</main>
    </div>
  )
}
