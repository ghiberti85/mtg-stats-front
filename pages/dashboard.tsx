import { GetServerSidePropsContext } from 'next'
import { createPagesServerClient } from '@supabase/auth-helpers-nextjs'
import { useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import LogoutButton from '@/components/LogoutButton'
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
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-white px-4">
        <div className="w-full max-w-2xl text-center">
          <h1 className="text-4xl font-bold mb-4">Bem-vindo(a), {email}!</h1>
          <p className="text-lg text-gray-300 mb-8">
            Você está logado com sucesso!
          </p>
          <LogoutButton />
        </div>
      </div>
    </Layout>
  )
}
