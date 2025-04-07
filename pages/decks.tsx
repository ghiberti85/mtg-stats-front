import { useState } from 'react'
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

const deckCards: Record<
  number,
  { name: string; type: string; quantity: number }[]
> = {
  1: [
    { name: 'Arclight Phoenix', type: 'Creature', quantity: 4 },
    { name: 'Lightning Bolt', type: 'Instant', quantity: 4 },
    { name: 'Consider', type: 'Instant', quantity: 4 },
  ],
  2: [
    { name: 'Ghitu Lavarunner', type: 'Creature', quantity: 4 },
    { name: 'Wizard’s Lightning', type: 'Instant', quantity: 4 },
  ],
  3: [
    { name: 'Teferi, Hero of Dominaria', type: 'Planeswalker', quantity: 2 },
    { name: 'Supreme Verdict', type: 'Sorcery', quantity: 3 },
  ],
}

export default function DecksPage() {
  const [openDeckId, setOpenDeckId] = useState<number | null>(null)

  const openModal = (deckId: number) => setOpenDeckId(deckId)
  const closeModal = () => setOpenDeckId(null)

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-10 text-white">
        <h1 className="text-3xl font-bold mb-8">Decks Utilizados</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {decks.map((deck) => (
            <div
              key={deck.id}
              className="bg-gray-900 p-6 rounded-xl shadow hover:bg-gray-800 transition"
            >
              <h2 className="text-xl font-bold mb-2">{deck.name}</h2>
              <p className="text-sm text-gray-400 mb-1">
                Formato: {deck.format}
              </p>
              <p className="text-sm text-gray-400 mb-1">
                Partidas: {deck.matches}
              </p>
              <p className="text-sm text-gray-400 mb-1">
                Win Rate: {deck.winRate}%
              </p>
              <p className="text-sm text-gray-400 mb-4">
                Último uso: {deck.lastUsed}
              </p>
              <button
                onClick={() => openModal(deck.id)}
                className="text-indigo-400 hover:underline text-sm"
              >
                Ver Cartas
              </button>
            </div>
          ))}
        </div>

        {/* Modal */}
        {openDeckId && (
          <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
            <div className="bg-gray-900 p-6 rounded-xl shadow-xl max-w-lg w-full relative">
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
              >
                &times;
              </button>

              <h2 className="text-xl font-bold mb-4">
                Cartas do Deck: {decks.find((d) => d.id === openDeckId)?.name}
              </h2>

              <ul className="space-y-2">
                {deckCards[openDeckId]?.map((card, index) => (
                  <li key={index} className="border-b border-gray-700 pb-2">
                    <span className="text-white font-medium">
                      {card.quantity}x {card.name}
                    </span>{' '}
                    <span className="text-gray-400 text-sm">({card.type})</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}
