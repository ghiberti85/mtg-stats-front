// pages/matches.tsx
import Layout from '@/components/Layout'

const mockMatches = [
  {
    id: 1,
    date: '01/04/2025',
    deck: 'Mono Red Aggro',
    opponent: 'PlayerX',
    result: 'Vitória',
  },
  {
    id: 2,
    date: '30/03/2025',
    deck: 'Dimir Control',
    opponent: 'PlayerY',
    result: 'Derrota',
  },
  {
    id: 3,
    date: '28/03/2025',
    deck: 'Selesnya Enchantments',
    opponent: 'PlayerZ',
    result: 'Vitória',
  },
]

export default function MatchesPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto mt-10 px-4 text-white">
        <h1 className="text-3xl font-bold mb-6">Histórico de Partidas</h1>
        <div className="overflow-x-auto bg-gray-900 rounded-xl shadow">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-800 text-gray-300">
                <th className="px-6 py-3 text-left">Data</th>
                <th className="px-6 py-3 text-left">Deck</th>
                <th className="px-6 py-3 text-left">Oponente</th>
                <th className="px-6 py-3 text-left">Resultado</th>
              </tr>
            </thead>
            <tbody>
              {mockMatches.map((match) => (
                <tr
                  key={match.id}
                  className="border-t border-gray-700 hover:bg-gray-800 transition"
                >
                  <td className="px-6 py-4">{match.date}</td>
                  <td className="px-6 py-4">{match.deck}</td>
                  <td className="px-6 py-4">{match.opponent}</td>
                  <td
                    className={`px-6 py-4 font-semibold ${
                      match.result === 'Vitória'
                        ? 'text-green-400'
                        : 'text-red-400'
                    }`}
                  >
                    {match.result}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  )
}
