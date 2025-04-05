import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts'

const data = [
  { deck: 'Mono Red', winRate: 78 },
  { deck: 'Azorius Control', winRate: 64 },
  { deck: 'Rakdos Midrange', winRate: 59 },
  { deck: 'Gruul Aggro', winRate: 52 },
  { deck: 'Dimir Rogues', winRate: 47 },
]

export default function WinRatePerDeckChart() {
  return (
    <div className="bg-gray-900 p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-white text-center">
        Taxa de vitória por deck
      </h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="deck" tick={{ fill: 'white' }} />
          <YAxis tick={{ fill: 'white' }} unit="%" />
          <Tooltip />
          <Bar dataKey="winRate">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill="#10b981" />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
