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
  { name: 'Jan', partidas: 10 },
  { name: 'Fev', partidas: 14 },
  { name: 'Mar', partidas: 8 },
  { name: 'Abr', partidas: 12 },
  { name: 'Mai', partidas: 6 },
]

export default function MatchSummaryChart() {
  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-md w-full max-w-md flex flex-col items-center">
      <h2 className="text-xl font-semibold text-white mb-8 text-center">
        Partidas por Mês
      </h2>

      <div
        className="w-full"
        style={{ maxWidth: 400, height: 256, margin: 'auto' }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip />
            <Bar dataKey="partidas" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
