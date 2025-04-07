import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const data = [
  { deck: 'Mono Red', uses: 14 },
  { deck: 'Azorius Control', uses: 10 },
  { deck: 'Rakdos Midrange', uses: 8 },
  { deck: 'Selesnya Enchantments', uses: 6 },
]

export default function MostUsedDecksChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart layout="vertical" data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
        <XAxis type="number" stroke="#ccc" />
        <YAxis dataKey="deck" type="category" stroke="#ccc" />
        <Tooltip />
        <Bar dataKey="uses" fill="#a78bfa" />
      </BarChart>
    </ResponsiveContainer>
  )
}
