import { createPagesServerClient } from '@supabase/auth-helpers-nextjs'
import { GetServerSidePropsContext } from 'next'

export async function getUser(ctx: GetServerSidePropsContext) {
  const supabase = createPagesServerClient(ctx)
  const {
    data: { user },
  } = await supabase.auth.getUser()

  return { user }
}
