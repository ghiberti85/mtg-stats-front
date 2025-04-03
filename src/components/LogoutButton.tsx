// src/components/LogoutButton.tsx
'use client'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/router'

export default function LogoutButton() {
  const router = useRouter()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }

  return (
    <button
      onClick={handleLogout}
      className="text-sm bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-lg transition font-medium"
    >
      Logout
    </button>
  )
}
