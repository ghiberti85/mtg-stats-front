import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { useStatsFilter } from '@/context/StatsFilterContext'
import { useMemo } from 'react'
import { withChartLoading } from '../components/withChartLoading'

const data = [
  { month: 'Jan', date: '2025-01-01', winRate: 60 },
  { month: 'Feb', date: '2025-02-01', winRate: 55 },
  { month: 'Mar', date: '2025-03-01', winRate: 65 },
  { month: 'Apr', date: '2025-04-01', winRate: 50 },
  { month: 'Mai', date: '2025-05-01', winRate: 70 },
]

function WinRateOverTimeChart() {
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
      <LineChart data={filteredData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
        <XAxis dataKey="month" stroke="#ccc" tick={{ fontSize: 11 }} />
        <YAxis stroke="#ccc" tick={{ fontSize: 11 }} />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="winRate"
          stroke="#38bdf8"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default withChartLoading(WinRateOverTimeChart)
