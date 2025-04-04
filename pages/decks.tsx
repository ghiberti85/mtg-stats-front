import Layout from '@/components/Layout'

type Deck = {
  id: string
  name: string
  format: string
  matches: number
}

const mockDecks: Deck[] = [
  { id: '1', name: 'Mono Red Aggro', format: 'Modern', matches: 12 },
  { id: '2', name: 'Azorius Control', format: 'Standard', matches: 8 },
  { id: '3', name: 'Jund Midrange', format: 'Modern', matches: 15 },
]

export default function DecksPage() {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-white mb-6">Meus Decks</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockDecks.map((deck) => (
            <div
              key={deck.id}
              className="bg-gray-900 p-6 rounded-xl shadow hover:shadow-xl transition"
            >
              <h2 className="text-xl font-bold text-white mb-2">{deck.name}</h2>
              <p className="text-gray-400 mb-1">Formato: {deck.format}</p>
              <p className="text-gray-400">
                Partidas registradas: {deck.matches}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
