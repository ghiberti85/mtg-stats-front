import Layout from '@/components/Layout'

const matches = [
  {
    id: 1,
    date: '2025-03-20',
    deck: 'Izzet Phoenix',
    format: 'Modern',
    result: 'Vitória',
    opponent: 'João M.',
  },
  {
    id: 2,
    date: '2025-03-18',
    deck: 'Mono Red Aggro',
    format: 'Standard',
    result: 'Derrota',
    opponent: 'Carlos S.',
  },
  {
    id: 3,
    date: '2025-03-16',
    deck: 'Jeskai Control',
    format: 'Pioneer',
    result: 'Vitória',
    opponent: 'Bruna K.',
  },
]

export default function MatchesPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-white mb-8">Partidas</h1>

        <div className="space-y-4">
          {matches.map((match) => (
            <div
              key={match.id}
              className="bg-gray-900 rounded-xl p-4 shadow hover:bg-gray-800 transition"
            >
              <div className="flex justify-between items-center text-white">
                <div>
                  <p className="text-lg font-semibold">{match.deck}</p>
                  <p className="text-sm text-gray-400">
                    {match.format} • {match.date}
                  </p>
                </div>
                <div className="text-right">
                  <p
                    className={`text-sm font-bold ${
                      match.result === 'Vitória'
                        ? 'text-green-400'
                        : 'text-red-400'
                    }`}
                  >
                    {match.result}
                  </p>
                  <p className="text-sm text-gray-300">vs {match.opponent}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
