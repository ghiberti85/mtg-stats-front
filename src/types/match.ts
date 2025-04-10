export type Match = {
  id: string
  player_id: string
  opponent_id?: string
  deck_id: string
  opponent_deck_id?: string
  format: string
  result: 'win' | 'loss' | 'draw'
  duration: number
  match_date: string
}
