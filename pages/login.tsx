//pages/login.tsx
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Define para onde redirecionar após o login
    document.cookie = `supabase.auth.redirect=/dashboard; path=/`

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        shouldCreateUser: false,
        emailRedirectTo: 'http://localhost:3001/confirm',
      },
    })

    setLoading(false)

    if (error) {
      setMessage('❌ Erro ao enviar o email. Verifique o endereço.')
    } else {
      setMessage('📬 Enviamos um link mágico para o seu email.')
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950 px-4">
      <div className="w-full max-w-md p-8 bg-gray-900 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Login
        </h1>
        <form onSubmit={handleLogin}>
          <label htmlFor="email" className="block text-gray-300 mb-2">
            Digite seu email:
          </label>
          <input
            id="email"
            type="email"
            placeholder="ex: seuemail@email.com"
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full mt-6 p-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-500 transition"
            disabled={loading}
          >
            {loading ? 'Enviando...' : 'Enviar link mágico'}
          </button>
        </form>
        {message && (
          <p className="mt-4 text-sm text-center text-gray-300">{message}</p>
        )}
      </div>
    </div>
  )
}
