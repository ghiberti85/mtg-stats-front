// pages/decks.tsx
import { GetServerSidePropsContext } from 'next'
import { createPagesServerClient } from '@supabase/auth-helpers-nextjs'
import Layout from '@/components/Layout'
import LogoutButton from '@/components/LogoutButton'

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
    props: {},
  }
}

export default function Decks() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto mt-10 text-white">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-white">Decks</h1>
          <LogoutButton />
        </div>
        <p className="text-gray-300 mb-6">
          Aqui você verá os decks usados nas partidas.
        </p>

        <div className="mt-6 p-6 bg-gray-800 border border-gray-700 rounded-lg">
          <p>🎴 Em breve: estatísticas detalhadas dos seus decks.</p>
        </div>
      </div>
    </Layout>
  )
}
