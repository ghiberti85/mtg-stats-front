import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'

const data = [
  { name: 'Standard', value: 30 },
  { name: 'Pioneer', value: 25 },
  { name: 'Modern', value: 20 },
  { name: 'Commander', value: 15 },
  { name: 'Historic', value: 10 },
]

const COLORS = ['#6366f1', '#ec4899', '#f59e0b', '#10b981', '#3b82f6']

export default function MostPlayedFormatsChart() {
  return (
    <div className="bg-gray-900 p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-white text-center">
        Formatos mais jogados
      </h2>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
