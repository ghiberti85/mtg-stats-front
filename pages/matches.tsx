import { useState } from 'react'
import Layout from '@/components/Layout'

type Match = {
  id: string
  format: string
  result: 'Vitória' | 'Derrota'
  deck: string
  date: string
}

const mockMatches: Match[] = [
  {
    id: '1',
    format: 'Modern',
    result: 'Vitória',
    deck: 'Mono Red Aggro',
    date: '2025-03-10',
  },
  {
    id: '2',
    format: 'Standard',
    result: 'Derrota',
    deck: 'Azorius Control',
    date: '2025-03-08',
  },
  {
    id: '3',
    format: 'Modern',
    result: 'Vitória',
    deck: 'Rakdos Midrange',
    date: '2025-03-05',
  },
]

export default function MatchesPage() {
  const [formatFilter, setFormatFilter] = useState('')
  const [resultFilter, setResultFilter] = useState('')

  const filteredMatches = mockMatches.filter((match) => {
    return (
      (formatFilter === '' || match.format === formatFilter) &&
      (resultFilter === '' || match.result === resultFilter)
    )
  })

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-white mb-6">
          Histórico de Partidas
        </h1>

        <div className="flex flex-wrap gap-4 mb-6">
          <select
            className="bg-gray-800 text-white p-2 rounded"
            value={formatFilter}
            onChange={(e) => setFormatFilter(e.target.value)}
          >
            <option value="">Todos os formatos</option>
            <option value="Standard">Standard</option>
            <option value="Modern">Modern</option>
          </select>

          <select
            className="bg-gray-800 text-white p-2 rounded"
            value={resultFilter}
            onChange={(e) => setResultFilter(e.target.value)}
          >
            <option value="">Todos os resultados</option>
            <option value="Vitória">Vitória</option>
            <option value="Derrota">Derrota</option>
          </select>
        </div>

        <ul className="space-y-4">
          {filteredMatches.map((match) => (
            <li
              key={match.id}
              className="p-4 bg-gray-900 rounded shadow flex flex-col md:flex-row md:items-center justify-between"
            >
              <div>
                <p className="text-white font-semibold">{match.deck}</p>
                <p className="text-gray-400 text-sm">
                  Formato: {match.format} •{' '}
                  {new Date(match.date).toLocaleDateString()}
                </p>
              </div>
              <span
                className={`text-sm font-semibold px-3 py-1 rounded mt-2 md:mt-0 ${
                  match.result === 'Vitória'
                    ? 'bg-green-600 text-white'
                    : 'bg-red-600 text-white'
                }`}
              >
                {match.result}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}
