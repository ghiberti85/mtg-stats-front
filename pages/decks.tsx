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
      <div className="max-w-4xl mx-auto py-10">
        <h1 className="text-3xl font-bold mb-4">Decks</h1>
        <p className="text-gray-300 mb-6">
          Aqui você verá os decks usados nas partidas.
        </p>

        <div className="bg-gray-800 rounded-xl p-6 shadow-lg text-gray-200">
          <p>🔧 Em breve: estatísticas detalhadas dos seus decks.</p>
        </div>

        <div className="mt-8">
          <LogoutButton />
        </div>
      </div>
    </Layout>
  )
}
