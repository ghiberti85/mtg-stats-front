import Layout from '@/components/Layout'

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard title="Total de Partidas" value={stats.totalMatches} />
          <StatCard title="Vitórias" value={stats.victories} />
          <StatCard title="Derrotas" value={stats.defeats} />
          <StatCard title="Winrate" value={stats.winrate} />
          <StatCard title="Deck Mais Usado" value={stats.mostPlayedDeck} />
          <StatCard title="Formato Preferido" value={stats.preferredFormat} />
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
