import Layout from '@/components/Layout'

const decks = [
  {
    id: 1,
    name: 'Izzet Phoenix',
    format: 'Modern',
    matches: 12,
    winRate: 75,
    lastUsed: '2025-03-20',
  },
  {
    id: 2,
    name: 'Mono Red Aggro',
    format: 'Standard',
    matches: 8,
    winRate: 50,
    lastUsed: '2025-03-18',
  },
  {
    id: 3,
    name: 'Jeskai Control',
    format: 'Pioneer',
    matches: 10,
    winRate: 80,
    lastUsed: '2025-03-16',
  },
]

export default function DecksPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-white mb-8">Decks Utilizados</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {decks.map((deck) => (
            <div
              key={deck.id}
              className="bg-gray-900 p-6 rounded-xl shadow hover:bg-gray-800 transition"
            >
              <h2 className="text-xl text-white font-bold mb-2">{deck.name}</h2>
              <p className="text-sm text-gray-400 mb-1">
                Formato: {deck.format}
              </p>
              <p className="text-sm text-gray-400 mb-1">
                Partidas: {deck.matches}
              </p>
              <p className="text-sm text-gray-400 mb-1">
                Win Rate: {deck.winRate}%
              </p>
              <p className="text-sm text-gray-400">
                Último uso: {deck.lastUsed}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
