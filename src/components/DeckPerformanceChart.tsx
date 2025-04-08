import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts'
import { useStatsFilter } from '@/context/StatsFilterContext'
import { useMemo } from 'react'

type Props = {
  data: {
    date: string
    winRate: number
  }[]
}

export default function DeckPerformanceChart({ data }: Props) {
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
  }, [data, range])

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={filteredData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
        <XAxis dataKey="date" stroke="#ccc" tick={{ fontSize: 11 }} />
        <YAxis stroke="#ccc" tick={{ fontSize: 11 }} />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="winRate"
          stroke="#10b981"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
