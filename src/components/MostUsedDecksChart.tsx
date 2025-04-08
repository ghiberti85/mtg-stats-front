import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { useStatsFilter } from '@/context/StatsFilterContext'
import { useMemo } from 'react'

const data = [
  { deck: 'Mono Red', uses: 14, date: '2025-01-10' },
  { deck: 'Azorius Control', uses: 10, date: '2025-02-22' },
  { deck: 'Rakdos Midrange', uses: 8, date: '2025-03-14' },
  { deck: 'Selesnya Enchantments', uses: 6, date: '2025-04-03' },
]

export default function MostUsedDecksChart() {
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
      <BarChart layout="vertical" data={filteredData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
        <XAxis type="number" stroke="#ccc" tick={{ fontSize: 11 }} />
        <YAxis
          dataKey="deck"
          type="category"
          stroke="#ccc"
          tick={{ fontSize: 11 }}
        />
        <Tooltip />
        <Bar dataKey="uses" fill="#a78bfa" />
      </BarChart>
    </ResponsiveContainer>
  )
}
