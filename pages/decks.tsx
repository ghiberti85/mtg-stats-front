import { useEffect, useState } from 'react'
import Image from 'next/image'
import Layout from '@/components/Layout'
import DeckPerformanceChart from '@/components/DeckPerformanceChart'

// Dados fixos dos decks
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

const deckPerformanceData: Record<number, { date: string; winRate: number }[]> =
  {
    1: [
      { date: '2025-01-10', winRate: 60 },
      { date: '2025-02-10', winRate: 65 },
      { date: '2025-03-10', winRate: 75 },
    ],
    2: [
      { date: '2025-01-15', winRate: 45 },
      { date: '2025-02-20', winRate: 55 },
      { date: '2025-03-18', winRate: 50 },
    ],
    3: [
      { date: '2025-01-05', winRate: 70 },
      { date: '2025-02-12', winRate: 75 },
      { date: '2025-03-16', winRate: 80 },
    ],
  }

// Função que consulta a API do Scryfall
async function fetchCardImage(name: string): Promise<string> {
  try {
    const res = await fetch(
      `https://api.scryfall.com/cards/named?exact=${encodeURIComponent(name)}`
    )
    const data = await res.json()
    return data.image_uris?.normal || ''
  } catch (error) {
    console.error(`Erro ao buscar imagem para ${name}:`, error)
    return ''
  }
}

export default function DecksPage() {
  const [openDeckId, setOpenDeckId] = useState<number | null>(null)
  const [deckCardsWithImages, setDeckCardsWithImages] = useState<
    { name: string; type: string; quantity: number; image: string }[]
  >([])

  const openModal = (deckId: number) => setOpenDeckId(deckId)
  const closeModal = () => {
    setOpenDeckId(null)
    setDeckCardsWithImages([])
  }

  useEffect(() => {
    const loadImages = async () => {
      if (openDeckId) {
        const cards = deckCards[openDeckId]
        const withImages = await Promise.all(
          cards.map(async (card) => {
            const image = await fetchCardImage(card.name)
            return { ...card, image }
          })
        )
        setDeckCardsWithImages(withImages)
      }
    }

    loadImages()
  }, [openDeckId])

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
                Ver Detalhes
              </button>
            </div>
          ))}
        </div>

        {/* Modal */}
        {openDeckId && (
          <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
            <div className="bg-gray-900 p-6 rounded-xl shadow-xl max-w-2xl w-full relative overflow-y-auto max-h-[90vh]">
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
              >
                &times;
              </button>

              <h2 className="text-xl font-bold mb-4">
                Detalhes do Deck: {decks.find((d) => d.id === openDeckId)?.name}
              </h2>

              {/* Gráfico */}
              {deckPerformanceData[openDeckId] && (
                <>
                  <h3 className="text-lg font-semibold mb-2 mt-4">
                    Desempenho
                  </h3>
                  <DeckPerformanceChart
                    data={deckPerformanceData[openDeckId]}
                  />
                </>
              )}

              {/* Cartas */}
              <h3 className="text-lg font-semibold mb-4 mt-6">Cartas</h3>
              {deckCardsWithImages.length === 0 ? (
                <p className="text-gray-400">
                  Carregando imagens das cartas...
                </p>
              ) : (
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {deckCardsWithImages.map((card, index) => (
                    <li
                      key={index}
                      className="flex gap-4 bg-gray-800 rounded-lg p-3 items-center"
                    >
                      {card.image ? (
                        <Image
                          src={card.image}
                          alt={card.name}
                          width={64}
                          height={90}
                          unoptimized
                          className="rounded shadow"
                        />
                      ) : (
                        <div className="w-16 h-[90px] bg-gray-700 rounded" />
                      )}
                      <div>
                        <p className="text-white font-medium">
                          {card.quantity}x {card.name}
                        </p>
                        <p className="text-gray-400 text-sm">{card.type}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}
