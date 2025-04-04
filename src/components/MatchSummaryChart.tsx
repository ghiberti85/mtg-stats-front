'use client'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const data = [
  { name: 'Vitórias', value: 14 },
  { name: 'Derrotas', value: 6 },
]

export default function MatchSummaryChart() {
  return (
    <div className="w-full h-64 bg-gray-900 rounded-xl shadow p-4">
      <h2 className="text-white text-lg font-semibold mb-4">
        Resumo de Partidas
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip />
          <Bar dataKey="value" fill="#3b82f6" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
