import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const data = [
  { name: 'Mono Red', partidas: 22 },
  { name: 'Azorius Control', partidas: 17 },
  { name: 'Rakdos Midrange', partidas: 14 },
  { name: 'Gruul Aggro', partidas: 11 },
  { name: 'Dimir Rogues', partidas: 9 },
]

export default function TopDecksBarChart() {
  return (
    <div className="bg-gray-900 p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-8 text-white text-center">
        Top 5 decks mais usados
      </h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="name" tick={{ fill: 'white' }} />
          <YAxis tick={{ fill: 'white' }} />
          <Tooltip />
          <Bar dataKey="partidas" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
