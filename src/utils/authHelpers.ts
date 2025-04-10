import { supabase } from '@/lib/supabase'

export async function getToken(): Promise<string | null> {
  const { data, error } = await supabase.auth.getSession()
  if (error || !data.session) {
    console.error('Erro ao obter sessão:', error)
    return null
  }
  return data.session.access_token
}
export async function getSession() {
  const { data, error } = await supabase.auth.getSession()
  if (error) throw error
  return data.session
}

export async function getCurrentUserId(): Promise<string | null> {
  const { data, error } = await supabase.auth.getUser()
  if (error || !data.user) {
    console.error('Erro ao obter usuário:', error)
    return null
  }
  return data.user.id
}
