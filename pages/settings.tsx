// pages/settings.tsx
import { GetServerSidePropsContext } from 'next'
import { createPagesServerClient } from '@supabase/auth-helpers-nextjs'
import Layout from '@/components/Layout'

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

export default function Settings() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto mt-10 text-white">
        <h1 className="text-3xl font-bold mb-4">Configurações</h1>
        <p className="text-gray-400 mb-6">
          Ajuste preferências de idioma, notificações e configurações gerais da
          sua conta.
        </p>

        <div className="p-6 bg-gray-800 border border-gray-700 rounded-lg">
          <p className="text-gray-300">
            ⚙️ Configurações avançadas estarão disponíveis em breve.
          </p>
        </div>
      </div>
    </Layout>
  )
}
