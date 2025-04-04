import Layout from '@/components/Layout'
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from 'recharts'

const matchesPerMonth = [
  { month: 'Jan', matches: 10 },
  { month: 'Feb', matches: 14 },
  { month: 'Mar', matches: 7 },
  { month: 'Abr', matches: 18 },
  { month: 'Mai', matches: 11 },
]

const winrateData = [
  { name: 'Vitórias', value: 67 },
  { name: 'Derrotas', value: 33 },
]

const formatData = [
  { name: 'Modern', value: 45 },
  { name: 'Standard', value: 30 },
  { name: 'Pioneer', value: 25 },
]

const COLORS = ['#22c55e', '#ef4444', '#3b82f6', '#facc15']

export default function StatsPage() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-white mb-8">Estatísticas</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Partidas por mês */}
          <div className="bg-gray-900 p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold text-white mb-4">
              Partidas por Mês
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={matchesPerMonth}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="month" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="matches"
                  stroke="#3b82f6"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Winrate */}
          <div className="bg-gray-900 p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold text-white mb-4">Winrate</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={winrateData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={100}
                  label
                >
                  {winrateData.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Distribuição por formato */}
        <div className="mt-10 bg-gray-900 p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold text-white mb-4">
            Distribuição por Formato
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={formatData}
                dataKey="value"
                nameKey="name"
                outerRadius={120}
                label
              >
                {formatData.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Layout>
  )
}
