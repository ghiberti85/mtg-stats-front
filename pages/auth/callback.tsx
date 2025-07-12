'use client'

import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function AuthCallbackPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const exchangeCode = async () => {
      const code = router.query.code as string

      if (!code) return

      const { data, error } = await supabase.auth.exchangeCodeForSession(code)

      if (error) {
        console.error('Erro ao trocar código por sessão:', error)
        setLoading(false)
        return
      }

      console.log('✅ Sessão autenticada:', data.session)

      // Redireciona para o dashboard
      router.push('/dashboard')
    }

    exchangeCode()
  }, [router])

  return (
    <main className="h-screen flex items-center justify-center">
      {loading ? (
        <p>Autenticando com link mágico...</p>
      ) : (
        <p className="text-red-500">Erro na autenticação. Tente novamente.</p>
      )}
    </main>
  )
}
