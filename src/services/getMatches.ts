import { supabase } from '@/lib/supabase'

export interface Match {
  id: string
  player_id: string
  deck_id: string
  format: string
  result: 'win' | 'loss' | 'draw'
  duration: number
  match_date: string
}

export async function getMatches(): Promise<Match[]> {
  const { data: userData } = await supabase.auth.getUser()
  const playerId = userData?.user?.id

  if (!playerId) {
    throw new Error('Player ID não encontrado')
  }

  const res = await fetch(
    `http://localhost:3000/matches?playerId=${playerId}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    }
  )

  if (!res.ok) {
    throw new Error('Erro ao buscar partidas')
  }

  return res.json()
}
