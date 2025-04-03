import Link from 'next/link'
import { useRouter } from 'next/router'
import { Home, BarChart2, Layers, List } from 'lucide-react'

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: <Home size={20} /> },
  { href: '/matches', label: 'Matches', icon: <List size={20} /> },
  { href: '/decks', label: 'Decks', icon: <Layers size={20} /> },
  { href: '/stats', label: 'Estatísticas', icon: <BarChart2 size={20} /> },
]

export default function Sidebar() {
  const router = useRouter()

  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-gray-900 text-white shadow-lg z-50">
      <div className="p-6 text-2xl font-bold tracking-wide border-b border-gray-700">
        MTG Stats
      </div>
      <nav className="mt-6 space-y-2">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            <div
              className={`flex items-center px-6 py-3 transition-colors cursor-pointer hover:bg-gray-800 ${
                router.pathname === item.href ? 'bg-gray-800' : ''
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              <span>{item.label}</span>
            </div>
          </Link>
        ))}
      </nav>
    </aside>
  )
}
