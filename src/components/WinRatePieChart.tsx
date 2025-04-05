import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'

type Props = {
  victories: number
  defeats: number
}

export default function WinRatePieChart({ victories, defeats }: Props) {
  const data = [
    { name: 'Vitórias', value: victories },
    { name: 'Derrotas', value: defeats },
  ]

  const COLORS = ['#4ade80', '#ef4444'] // verde e vermelho

  const total = victories + defeats
  const winRate = total > 0 ? ((victories / total) * 100).toFixed(1) : '0'

  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-md w-full max-w-md flex flex-col items-center">
      <h2 className="text-white text-lg font-semibold mb-8">Taxa de Vitória</h2>
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
        </PieChart>
      </ResponsiveContainer>
      <p className="text-center text-white mt-2">{winRate}% de vitória</p>
    </div>
  )
}
