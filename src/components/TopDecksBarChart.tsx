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
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <XAxis dataKey="name" tick={{ fill: 'white' }} />
        <YAxis tick={{ fill: 'white' }} />
        <Tooltip />
        <Bar dataKey="partidas" fill="#3b82f6" />
      </BarChart>
    </ResponsiveContainer>
  )
}
