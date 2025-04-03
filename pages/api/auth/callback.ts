// pages/api/auth/callback.ts
import { NextApiRequest, NextApiResponse } from 'next'
import { createPagesServerClient } from '@supabase/auth-helpers-nextjs'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const supabase = createPagesServerClient({ req, res })

  const { error } = await supabase.auth.exchangeCodeForSession(req.url!)

  if (error) {
    console.error('❌ Erro no callback API:', error.message)
    return res.redirect('/login')
  }

  const redirectTo = req.cookies['supabase.auth.redirect'] || '/dashboard'
  res.setHeader('Set-Cookie', 'supabase.auth.redirect=; Max-Age=0; path=/;') // limpa
  return res.redirect(redirectTo)
}
