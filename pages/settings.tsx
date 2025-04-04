// pages/settings.tsx
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
    props: {
      email: user.email,
    },
  }
}

export default function Settings() {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto mt-10 text-white">
        <h1 className="text-3xl font-bold mb-4">Configurações</h1>
        <p className="text-gray-400 mb-8">
          Gerencie suas preferências da conta
        </p>

        <div className="bg-gray-900 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Preferências</h2>

          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-300">Modo escuro</span>
            <span className="text-sm text-gray-500 italic">
              ⚙️ (implementação futura)
            </span>
          </div>

          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-300">Idioma</span>
            <span className="text-sm text-gray-500 italic">
              🇧🇷 Português (futuro: i18n)
            </span>
          </div>

          <div className="mt-6">
            <LogoutButton />
          </div>
        </div>
      </div>
    </Layout>
  )
}
