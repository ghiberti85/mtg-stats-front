'use client'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { useStatsFilter } from '@/context/StatsFilterContext'
import { useMemo } from 'react'

// Dados completos mockados
const data = [
  { name: 'Jan', date: '2025-01-01', partidas: 10 },
  { name: 'Fev', date: '2025-02-01', partidas: 14 },
  { name: 'Mar', date: '2025-03-01', partidas: 8 },
  { name: 'Abr', date: '2025-04-01', partidas: 12 },
  { name: 'Mai', date: '2025-05-01', partidas: 6 },
]

export default function MatchSummaryChart() {
  const { range } = useStatsFilter()

  const filteredData = useMemo(() => {
    const now = new Date()
    return data.filter(({ date }) => {
      const matchDate = new Date(date)

      switch (range) {
        case 'month':
          return matchDate >= new Date(now.getFullYear(), now.getMonth() - 1, 1)
        case '3months':
          return matchDate >= new Date(now.getFullYear(), now.getMonth() - 3, 1)
        case 'year':
          return matchDate >= new Date(now.getFullYear() - 1, now.getMonth(), 1)
        default:
          return true
      }
    })
  }, [range])

  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={filteredData}>
          <XAxis dataKey="name" stroke="#ccc" tick={{ fontSize: 11 }} />
          <YAxis stroke="#ccc" tick={{ fontSize: 11 }} />
          <Tooltip />
          <Bar dataKey="partidas" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
