import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { supabase } from '@/lib/supabase'

export default function CallbackPage() {
  const router = useRouter()

  useEffect(() => {
    const handleAuth = async () => {
      try {
        const { error } = await supabase.auth.getSession()

        if (error) {
          console.error('❌ Erro ao obter sessão:', error)
          router.push('/login')
          return
        }

        // ✅ A sessão já foi criada automaticamente, agora redireciona
        router.push('/dashboard')
      } catch (err) {
        console.error('❌ Erro inesperado:', err)
        router.push('/login')
      }
    }

    handleAuth()
  }, [router])

  return (
    <div className="h-screen flex items-center justify-center text-white bg-gray-900">
      <p>Autenticando...</p>
    </div>
  )
}
