import { GetServerSidePropsContext } from 'next'
import { createPagesServerClient } from '@supabase/auth-helpers-nextjs'
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

export default function Dashboard({ email }: { email: string }) {
  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h1 className="text-2xl font-bold">Bem-vindo(a), {email}!</h1>
      <p className="mt-4">Você está logado com sucesso!</p>
      <LogoutButton />
    </div>
  )
}
