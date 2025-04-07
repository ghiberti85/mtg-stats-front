import Layout from '@/components/Layout'
import MatchSummaryChart from '@/components/MatchSummaryChart'
import WinRatePieChart from '@/components/WinRatePieChart'
import MostPlayedFormatsChart from '@/components/MostPlayedFormatsChart'
import WinRateOverTimeChart from '@/components/WinRateOverTimeChart'
import MostUsedDecksChart from '@/components/MostUsedDecksChart'
import WinRatePerDeckChart from '@/components/WinRatePerDeckChart'
import TopDecksBarChart from '@/components/TopDecksBarChart'
import CountUp from 'react-countup'

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
      <div className="max-w-7xl mx-auto px-4 py-10 text-white">
        <h1 className="text-3xl font-bold mb-8">📊 Estatísticas Gerais</h1>

        {/* Resumo numérico */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
          <StatCard title="Partidas" value={stats.totalMatches} />
          <StatCard title="Vitórias" value={stats.victories} />
          <StatCard title="Derrotas" value={stats.defeats} />
          <StatCard title="Winrate" value={stats.winrate} />
          <StatCard title="Deck" value={stats.mostPlayedDeck} />
          <StatCard title="Formato" value={stats.preferredFormat} />
        </div>

        {/* Desempenho */}
        <Section title="🎯 Desempenho">
          <ChartCard title="Partidas por Mês">
            <MatchSummaryChart />
          </ChartCard>
          <ChartCard title="Taxa de Vitória Geral">
            <WinRatePieChart
              victories={stats.victories}
              defeats={stats.defeats}
            />
          </ChartCard>
          <ChartCard title="Evolução da Winrate">
            <WinRateOverTimeChart />
          </ChartCard>
          <ChartCard title="Winrate por Deck">
            <WinRatePerDeckChart />
          </ChartCard>
        </Section>

        {/* Formatos e Decks */}
        <Section title="📚 Formatos e Decks">
          <ChartCard title="Formatos Mais Jogados">
            <MostPlayedFormatsChart />
          </ChartCard>
          <ChartCard title="Decks Mais Utilizados">
            <MostUsedDecksChart />
          </ChartCard>
          <ChartCard title="Top 5 Decks Mais Usados">
            <TopDecksBarChart />
          </ChartCard>
          <ChartCard title="Comparativo de Formatos (Extra)">
            <MostPlayedFormatsChart />
          </ChartCard>
        </Section>

        {/* Suporte adicional */}
        <Section title="❓ Dúvidas ou Feedback">
          <div className="bg-gray-900 p-6 rounded-xl shadow-md text-gray-300">
            <p className="mb-2">
              Não encontrou o que procurava? Nossa equipe está pronta para
              ajudar!
            </p>
            <p>
              Entre em contato pelo e-mail:{' '}
              <a
                href="mailto:suporte@mtgstats.com"
                className="text-blue-400 hover:underline"
              >
                suporte@mtgstats.com
              </a>
            </p>
          </div>
        </Section>
      </div>
    </Layout>
  )
}

export function StatCard({ title, value, onClick, active }: StatCardProps) {
  const isNumber = typeof value === 'number'

  return (
    <div
      className={`cursor-pointer rounded-xl p-6 h-24 sm:h-32 flex flex-col items-center justify-center text-center shadow-md transition border ${
        active
          ? 'bg-indigo-900 border-indigo-400'
          : 'bg-gray-900 border-gray-700 hover:border-indigo-500'
      }`}
      onClick={onClick}
    >
      <h3 className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide mb-1">
        {title}
      </h3>
      <p
        className={`text-xl sm:text-2xl font-extrabold ${active ? 'text-indigo-400' : 'text-white'}`}
      >
        {isNumber ? (
          <CountUp end={Number(value)} duration={1.2} separator="." />
        ) : (
          value
        )}
      </p>
    </div>
  )
}

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">{title}</h2>
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">{children}</div>
    </div>
  )
}

function ChartCard({
  children,
  title,
}: {
  children: React.ReactNode
  title: string
}) {
  return (
    <div className="bg-gray-900 min-h-[360px] p-4 sm:p-6 rounded-2xl shadow-lg flex flex-col">
      <h3 className="text-white text-lg font-semibold mb-4 text-center">
        {title}
      </h3>
      <div className="flex-grow w-full h-full">{children}</div>
    </div>
  )
}

type StatCardProps = {
  title: string
  value: number | string
  onClick?: () => void
  active?: boolean
}
