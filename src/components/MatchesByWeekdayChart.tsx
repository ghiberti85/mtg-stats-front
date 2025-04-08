import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts'
import { useStatsFilter } from '@/context/StatsFilterContext'
import { useMemo } from 'react'

const fullData = [
  { day: 'Dom', matches: 5, date: '2025-04-07' },
  { day: 'Seg', matches: 2, date: '2025-04-01' },
  { day: 'Ter', matches: 3, date: '2025-03-20' },
  { day: 'Qua', matches: 4, date: '2025-02-15' },
  { day: 'Qui', matches: 2, date: '2025-01-25' },
  { day: 'Sex', matches: 7, date: '2025-03-05' },
  { day: 'Sáb', matches: 6, date: '2025-03-12' },
]

export default function MatchesByWeekdayChart() {
  const { range } = useStatsFilter()

  const filteredData = useMemo(() => {
    const now = new Date()
    return fullData.filter(({ date }) => {
      const d = new Date(date)
      switch (range) {
        case 'month':
          return d >= new Date(now.getFullYear(), now.getMonth() - 1, 1)
        case '3months':
          return d >= new Date(now.getFullYear(), now.getMonth() - 3, 1)
        case 'year':
          return d >= new Date(now.getFullYear() - 1, now.getMonth(), 1)
        default:
          return true
      }
    })
  }, [range])

  // Agrupar por dia da semana (sum de partidas por dia)
  const aggregated = Object.values(
    filteredData.reduce(
      (acc, curr) => {
        acc[curr.day] = acc[curr.day] || { day: curr.day, matches: 0 }
        acc[curr.day].matches += curr.matches
        return acc
      },
      {} as Record<string, { day: string; matches: number }>
    )
  )

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={aggregated}>
        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
        <XAxis dataKey="day" stroke="#ccc" tick={{ fontSize: 11 }} />
        <YAxis stroke="#ccc" tick={{ fontSize: 11 }} />
        <Tooltip />
        <Bar dataKey="matches" fill="#3b82f6" />
      </BarChart>
    </ResponsiveContainer>
  )
}
