import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts'
import { useStatsFilter } from '@/context/StatsFilterContext'
import { useMemo } from 'react'
import { withChartLoading } from '../components/withChartLoading'

const data = [
  { deck: 'Mono Red', winRate: 78, date: '2025-01-15' },
  { deck: 'Azorius Control', winRate: 64, date: '2025-02-12' },
  { deck: 'Rakdos Midrange', winRate: 59, date: '2025-03-05' },
  { deck: 'Gruul Aggro', winRate: 52, date: '2025-04-01' },
  { deck: 'Dimir Rogues', winRate: 47, date: '2025-04-15' },
]

function WinRatePerDeckChart() {
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
        <XAxis dataKey="deck" stroke="#ccc" tick={{ fontSize: 11 }} />
        <YAxis stroke="#ccc" tick={{ fontSize: 11 }} />
        <Tooltip />
        <Bar dataKey="winRate">
          {filteredData.map((_, index) => (
            <Cell key={`cell-${index}`} fill="#10b981" />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}

export default withChartLoading(WinRatePerDeckChart)
