import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { supabase } from '@/lib/supabase'

export default function Confirm() {
  const router = useRouter()
  const code = router.query.code as string

  useEffect(() => {
    if (!code) {
      console.error('❌ Código de confirmação ausente.')
      return
    }

    supabase.auth.exchangeCodeForSession(code).then(({ data, error }) => {
      if (error) {
        console.error('❌ Erro ao confirmar sessão:', error.message)
      } else {
        console.log('✅ Sessão confirmada:', data)
        router.push('/dashboard')
      }
    })
  }, [code])

  return (
    <div className="flex justify-center items-center h-screen">
      <p>Confirmando login, aguarde...</p>
    </div>
  )
}
