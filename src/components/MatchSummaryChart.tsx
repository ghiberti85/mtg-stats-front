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
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#ccc" />
        <YAxis stroke="#ccc" />
        <Tooltip />
        <Bar dataKey="partidas" fill="#3b82f6" />
      </BarChart>
    </ResponsiveContainer>
  )
}
