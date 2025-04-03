// pages/profile.tsx
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
    props: {
      email: user.email,
    },
  }
}

export default function Profile({ email }: { email: string }) {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto mt-10 text-white">
        <h1 className="text-3xl font-bold mb-4">Perfil</h1>
        <p className="text-gray-400 mb-6">
          Aqui você poderá editar suas informações, como nome e preferências de
          exibição.
        </p>

        <div className="bg-gray-800 rounded-xl p-6 shadow-lg text-gray-200">
          <p>
            <strong>Email cadastrado:</strong> {email}
          </p>
          <p className="mt-2 text-gray-400">
            Funcionalidade de edição será adicionada em breve.
          </p>
        </div>
      </div>
    </Layout>
  )
}
