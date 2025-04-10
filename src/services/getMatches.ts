import { getToken, getCurrentUserId } from '@/utils/authHelpers'
import { Match } from '../types/match'

export async function getMatches(): Promise<Match[]> {
  const token = await getToken()
  const playerId = await getCurrentUserId()

  if (!token || !playerId) {
    throw new Error('Token ou Player ID não encontrado')
  }

  const res = await fetch(
    `http://localhost:3000/matches?playerId=${playerId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )

  if (!res.ok) {
    throw new Error('Erro ao buscar partidas')
  }

  return res.json()
}
