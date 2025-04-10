// src/types/match.ts
export type Match = {
  match_date: string
  result: 'win' | 'loss' | 'draw'
  deck_id: string
  opponent_id?: string
  opponent_deck_id?: string
  format: string
  duration: number
  // ... outros campos do CreateMatchDto
}
