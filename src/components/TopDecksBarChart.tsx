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
import { withChartLoading } from '../components/withChartLoading'

const data = [
  { name: 'Mono Red', partidas: 22, date: '2025-01-12' },
  { name: 'Azorius Control', partidas: 17, date: '2025-02-18' },
  { name: 'Rakdos Midrange', partidas: 14, date: '2025-03-08' },
  { name: 'Gruul Aggro', partidas: 11, date: '2025-03-29' },
  { name: 'Dimir Rogues', partidas: 9, date: '2025-04-01' },
]

function TopDecksBarChart() {
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
        <XAxis dataKey="name" stroke="#ccc" tick={{ fontSize: 11 }} />
        <YAxis stroke="#ccc" tick={{ fontSize: 11 }} />
        <Tooltip />
        <Bar dataKey="partidas" fill="#3b82f6" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default withChartLoading(TopDecksBarChart)
