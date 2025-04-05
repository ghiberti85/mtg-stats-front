import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const data = [
  { month: 'Jan', winRate: 60 },
  { month: 'Feb', winRate: 55 },
  { month: 'Mar', winRate: 65 },
  { month: 'Apr', winRate: 50 },
  { month: 'Mai', winRate: 70 },
]

export default function WinRateOverTimeChart() {
  return (
    <div className="bg-gray-900 p-6 rounded-xl shadow-md w-full max-w-3xl my-6">
      <h2 className="text-xl font-semibold mb-8 text-white text-center">
        Evolução da Taxa de Vitória
      </h2>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="month" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="winRate"
            stroke="#38bdf8"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
