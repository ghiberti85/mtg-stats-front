import { SupabaseAdapter } from '@next-auth/supabase-adapter'
import { createClient } from '@supabase/supabase-js'
import EmailProvider from 'next-auth/providers/email'
import NextAuth from 'next-auth'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error('SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is missing')
}

const supabase = createClient(supabaseUrl, supabaseServiceKey)

export const authOptions = {
  adapter: SupabaseAdapter(supabase, { schema: 'public' }), // 👈 isso aqui resolve o erro
  providers: [
    EmailProvider({
      server: process.env.SMTP_URL,
      from: process.env.SMTP_FROM,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: 'jwt' },
  pages: {
    signIn: '/login',
    error: '/auth/error',
    verifyRequest: '/auth/verify-request',
  },
}

export default NextAuth(authOptions)
