import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { supabase } from '@/lib/supabase'

export default function AuthCallbackPage() {
  const router = useRouter()

  useEffect(() => {
    const checkSession = async () => {
      const { data, error } = await supabase.auth.getSession()

      if (error || !data.session) {
        router.push('/login?error=session')
      } else {
        router.push('/dashboard')
      }
    }

    checkSession()
  }, [router])

  return <p>Autenticando...</p>
}
