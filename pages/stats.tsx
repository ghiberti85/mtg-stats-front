import Layout from '@/components/Layout'
import MatchSummaryChart from '@/components/MatchSummaryChart'
import WinRatePieChart from '@/components/WinRatePieChart'
import MostPlayedFormatsChart from '@/components/MostPlayedFormatsChart'
import WinRateOverTimeChart from '@/components/WinRateOverTimeChart'
import MostUsedDecksChart from '@/components/MostUsedDecksChart'

const stats = {
  totalMatches: 42,
  victories: 26,
  defeats: 16,
  winrate: '61.9%',
  mostPlayedDeck: 'Izzet Phoenix',
  preferredFormat: 'Modern',
}

export default function StatsPage() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-white mb-8">
          Estatísticas Gerais
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="bg-gray-900 p-6 rounded-2xl shadow">
            <StatCard title="Total de Partidas" value={stats.totalMatches} />
          </div>
          <div className="bg-gray-900 p-6 rounded-2xl shadow">
            <StatCard title="Vitórias" value={stats.victories} />
          </div>
          <div className="bg-gray-900 p-6 rounded-2xl shadow">
            <StatCard title="Derrotas" value={stats.defeats} />
          </div>
          <div className="bg-gray-900 p-6 rounded-2xl shadow">
            <StatCard title="Winrate" value={stats.winrate} />
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl shadow">
            <StatCard title="Deck Mais Usado" value={stats.mostPlayedDeck} />
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl shadow">
            <StatCard title="Formato Preferido" value={stats.preferredFormat} />
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl shadow">
            <MatchSummaryChart />
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl shadow">
            <WinRatePieChart victories={12} defeats={5} />
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl shadow">
            <WinRatePieChart
              victories={stats.victories}
              defeats={stats.defeats}
            />
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl shadow">
            <MostPlayedFormatsChart />
          </div>
          <div className="bg-gray-900 p-6 rounded-2xl shadow">
            <WinRateOverTimeChart />
          </div>
          <div className="bg-gray-900 p-6 rounded-2xl shadow">
            <MostUsedDecksChart />
          </div>
        </div>
      </div>
    </Layout>
  )
}

function StatCard({ title, value }: { title: string; value: string | number }) {
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-lg text-center text-white hover:border-blue-500 transition">
      <h3 className="text-sm text-gray-400 mb-2 uppercase tracking-wide">
        {title}
      </h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  )
}
