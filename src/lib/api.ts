// src/lib/api.ts
import { supabase } from './supabase'

export async function apiFetch<T>(
  url: string,
  options: RequestInit = {}
): Promise<T> {
  const session = await supabase.auth.getSession()
  const token = session.data.session?.access_token

  const res = await fetch(`http://localhost:3000${url}`, {
    ...options,
    headers: {
      ...(options.headers || {}),
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })

  if (!res.ok) {
    throw new Error(`Erro ao acessar ${url}: ${res.status}`)
  }

  return res.json()
}
