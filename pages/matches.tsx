import Layout from '@/components/Layout'

const matches = [
  {
    id: 1,
    date: '2025-03-20',
    deck: 'Izzet Phoenix',
    opponent: 'Lucas P.',
    format: 'Modern',
    result: 'Vitória',
  },
  {
    id: 2,
    date: '2025-03-18',
    deck: 'Mono Red Aggro',
    opponent: 'Bruno R.',
    format: 'Standard',
    result: 'Derrota',
  },
  {
    id: 3,
    date: '2025-03-15',
    deck: 'Jeskai Control',
    opponent: 'João M.',
    format: 'Pioneer',
    result: 'Vitória',
  },
]

export default function MatchesPage() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-white mb-6">
          Histórico de Partidas
        </h1>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto text-sm">
            <thead>
              <tr className="bg-gray-800 text-gray-300">
                <th className="p-3 text-left">Data</th>
                <th className="p-3 text-left">Deck</th>
                <th className="p-3 text-left">Adversário</th>
                <th className="p-3 text-left">Formato</th>
                <th className="p-3 text-left">Resultado</th>
              </tr>
            </thead>
            <tbody>
              {matches.map((match) => (
                <tr
                  key={match.id}
                  className={`border-b border-gray-700 ${
                    match.result === 'Vitória'
                      ? 'text-green-400'
                      : 'text-red-400'
                  }`}
                >
                  <td className="p-3">{match.date}</td>
                  <td className="p-3">{match.deck}</td>
                  <td className="p-3">{match.opponent}</td>
                  <td className="p-3">{match.format}</td>
                  <td className="p-3 font-semibold">{match.result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  )
}
