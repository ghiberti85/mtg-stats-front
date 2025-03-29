import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    })

    if (error) {
      console.error(error.message)
      setMessage('Erro ao enviar email. Verifique o endereço.')
    } else {
      setMessage('Enviamos um link para seu email.')
    }
  }

  return (
    <div className="max-w-md mx-auto mt-20 p-4 border rounded">
      <h1 className="text-xl font-bold mb-4">Login com Email</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Digite seu email"
          className="w-full p-2 border mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="w-full p-2 bg-blue-500 text-white rounded"
          type="submit"
        >
          Enviar link mágico
        </button>
      </form>
      {message && <p className="mt-4 text-sm text-gray-700">{message}</p>}
    </div>
  )
}
