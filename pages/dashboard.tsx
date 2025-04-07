import { GetServerSidePropsContext } from 'next'
import { createPagesServerClient } from '@supabase/auth-helpers-nextjs'
import { useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import Layout from '@/components/Layout'
import MatchSummaryChart from '@/components/MatchSummaryChart'
import WinRatePieChart from '@/components/WinRatePieChart'
import WinRatePerDeckChart from '@/components/WinRatePerDeckChart'
import MostPlayedFormatsChart from '@/components/MostPlayedFormatsChart'
import WinRateOverTimeChart from '@/components/WinRateOverTimeChart'
import MostUsedDecksChart from '@/components/MostUsedDecksChart'

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const supabase = createPagesServerClient(ctx)
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  return {
    props: {
      email: user.email,
    },
  }
}

export default function Dashboard({ email }: { email: string }) {
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const params = new URLSearchParams(hash.substring(1))
      const access_token = params.get('access_token')
      const refresh_token = params.get('refresh_token')

      if (access_token && refresh_token) {
        supabase.auth.setSession({
          access_token,
          refresh_token,
        })
      }
    }
  }, [])

  return (
    <Layout>
      <section className="bg-gray-950 text-white py-10 px-4 min-h-screen">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">
            Bem-vindo(a) 👋, <span className="text-indigo-400">{email}</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-300">
            Aqui estão os resumos das suas partidas recentes.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 max-w-7xl mx-auto px-2">
          <ChartCard title="Partidas por Mês">
            <MatchSummaryChart />
          </ChartCard>
          <ChartCard title="Taxa de Vitória">
            <WinRatePieChart victories={12} defeats={5} />
          </ChartCard>
          <ChartCard title="Taxa de Vitória por Deck">
            <WinRatePerDeckChart />
          </ChartCard>
          <ChartCard title="Formatos Mais Jogados">
            <MostPlayedFormatsChart />
          </ChartCard>
          <ChartCard title="Evolução da Taxa de Vitória">
            <WinRateOverTimeChart />
          </ChartCard>
          <ChartCard title="Decks Mais Utilizados">
            <MostUsedDecksChart />
          </ChartCard>
        </div>
      </section>
    </Layout>
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
      <h2 className="text-white text-lg font-semibold mb-4 text-center">
        {title}
      </h2>
      <div className="flex-grow w-full h-full">{children}</div>
    </div>
  )
}
