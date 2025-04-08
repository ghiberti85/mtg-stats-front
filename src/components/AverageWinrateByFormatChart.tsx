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

const data = [
  { format: 'Standard', winRate: 50, date: '2025-01-10' },
  { format: 'Pioneer', winRate: 65, date: '2025-02-15' },
  { format: 'Modern', winRate: 70, date: '2025-04-01' },
]

export default function AverageWinrateByFormatChart() {
  const { range } = useStatsFilter()

  const filteredData = useMemo(() => {
    const now = new Date()
    return data.filter(({ date }) => {
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

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={filteredData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
        <XAxis dataKey="format" stroke="#ccc" tick={{ fontSize: 11 }} />
        <YAxis
          stroke="#ccc"
          tick={{ fontSize: 11 }}
          domain={[0, 100]}
          unit="%"
        />
        <Tooltip />
        <Bar dataKey="winRate" fill="#10b981" />
      </BarChart>
    </ResponsiveContainer>
  )
}
