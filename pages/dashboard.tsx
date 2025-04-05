import { GetServerSidePropsContext } from 'next'
import { createPagesServerClient } from '@supabase/auth-helpers-nextjs'
import { useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import Layout from '@/components/Layout'
import MatchSummaryChart from '@/components/MatchSummaryChart'
import WinRatePieChart from '@/components/WinRatePieChart'
import TopDecksBarChart from '@/components/TopDecksBarChart'

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
        supabase.auth.setSession({ access_token, refresh_token })
      }
    }
  }, [])

  return (
    <div className="bg-gray-950 text-white min-h-screen">
      {/* Hero no topo */}
      <div className="w-full bg-gray-900 py-10 px-6 text-center shadow">
        <h1 className="text-4xl font-bold mb-2">Bem-vindo(a), {email} 👋</h1>
        <p className="text-gray-400 text-lg">Veja um resumo rápido da sua performance</p>
      </div>

      <Layout>
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <MatchSummaryChart />
          <WinRatePieChart victories={12} defeats={5} />
          <TopDecksBarChart />
        </div>
      </Layout>
    </div>
  )
}
