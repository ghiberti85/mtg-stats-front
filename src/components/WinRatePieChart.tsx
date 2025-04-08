import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'
import { useStatsFilter } from '@/context/StatsFilterContext'

type Props = {
  victories: number
  defeats: number
}

export default function WinRatePieChart({ victories, defeats }: Props) {
  const { range } = useStatsFilter()

  // Simulando dados com base no range selecionado
  const adjusted = (() => {
    switch (range) {
      case 'month':
        return { victories: 4, defeats: 3 }
      case '3months':
        return { victories: 12, defeats: 7 }
      case 'year':
        return { victories: 22, defeats: 16 }
      default:
        return { victories, defeats }
    }
  })()

  const data = [
    { name: 'Vitórias', value: adjusted.victories },
    { name: 'Derrotas', value: adjusted.defeats },
  ]

  const COLORS = ['#4ade80', '#ef4444']
  const total = adjusted.victories + adjusted.defeats
  const winRate =
    total > 0 ? ((adjusted.victories / total) * 100).toFixed(1) : '0'

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={data}
            innerRadius={50}
            outerRadius={80}
            paddingAngle={2}
            dataKey="value"
            nameKey="name"
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `${value} partidas`} />
          <Legend wrapperStyle={{ fontSize: '12px' }} />
        </PieChart>
      </ResponsiveContainer>
      <p className="text-center text-white mt-4 text-sm">
        {winRate}% de vitória
      </p>
    </div>
  )
}
