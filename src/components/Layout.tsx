import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode, useState } from 'react'
import { Menu, X } from 'lucide-react'
import LogoutButton from './LogoutButton'

const links = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/decks', label: 'Decks' },
  { href: '/matches', label: 'Partidas' },
  { href: '/stats', label: 'Estatísticas' },
  { href: '/settings', label: 'Configurações' },
  { href: '/help', label: 'Ajuda' },
]

export default function Layout({ children }: { children: ReactNode }) {
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      <header className="bg-gray-900 px-6 py-4 flex items-center justify-between shadow-md">
        <h1 className="text-xl font-bold tracking-wide">MTG Stats</h1>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden transition-transform"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Links - Desktop */}
        <nav className="hidden md:flex space-x-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-blue-400 transition-colors py-2 ${
                router.pathname === link.href ? 'text-blue-500' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
          <LogoutButton />
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {menuOpen && (
          <nav className="absolute top-16 left-4 right-4 z-50 bg-gray-900 rounded-xl shadow-lg ring-1 ring-gray-800 backdrop-blur-md transition-all duration-300">
            <ul className="flex flex-col gap-2 p-4">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block w-full text-center py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                      router.pathname === link.href
                        ? 'bg-blue-600 text-white ring-1 ring-blue-400'
                        : 'text-gray-200 hover:bg-gray-800 hover:text-white focus-visible:ring-2 focus-visible:ring-blue-500'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>

      <main className="flex-grow p-6">{children}</main>
    </div>
  )
}
