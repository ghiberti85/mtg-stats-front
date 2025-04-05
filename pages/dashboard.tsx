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
      <section className="bg-gray-950 text-white py-8 px-4 min-h-screen">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h1 className="text-4xl font-bold mb-2">Bem-vindo(a) 👋, {email}!</h1>
          <p className="text-lg text-gray-300">
            Aqui estão os resumos das suas partidas recentes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="bg-gray-900 p-6 rounded-2xl shadow">
            <MatchSummaryChart />
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl shadow">
            <WinRatePieChart victories={12} defeats={5} />
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl shadow">
            <WinRatePerDeckChart />
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
      </section>
    </Layout>
  )
}
