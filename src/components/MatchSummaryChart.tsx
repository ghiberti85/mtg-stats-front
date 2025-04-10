'use client'

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
import { useEffect, useState } from 'react'
import ChartSkeleton from './ChartSkeleton'
import { getMatches } from '@/services/getMatches'
import { getCurrentUserId, getToken } from '../utils/authHelpers' // caso use helpers
import { format } from 'date-fns'

type MatchSummaryData = {
  name: string
  partidas: number
}

type Match = {
  match_date: string
  // outros campos se necessário
}

export default function MatchSummaryChart() {
  const { range } = useStatsFilter()
  const [data, setData] = useState<MatchSummaryData[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      try {
        const token = getToken()
        const playerId = getCurrentUserId()

        if (!token || !playerId) {
          console.error('Token or Player ID is missing')
          setLoading(false)
          return
        }

        const matches = await getMatches()

        const groupedByMonth = matches.reduce(
          (acc: Record<string, number>, match: Match) => {
            const month = format(new Date(match.match_date), 'MMM')
            acc[month] = (acc[month] || 0) + 1
            return acc
          },
          {}
        )

        const result = Object.entries(groupedByMonth).map(([month, count]) => ({
          name: month,
          partidas: count,
        }))

        setData(result)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [range])

  if (loading) return <ChartSkeleton />

  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="name" stroke="#ccc" tick={{ fontSize: 11 }} />
          <YAxis stroke="#ccc" tick={{ fontSize: 11 }} />
          <Tooltip />
          <Bar dataKey="partidas" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
