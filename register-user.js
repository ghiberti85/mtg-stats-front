import 'dotenv/config'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

async function registerUser() {
  const { data, error } = await supabase.auth.signUp({
    email: 'seuemail@teste.com',
    password: '12345678',
  })

  if (error) {
    console.error('❌ Erro ao registrar usuário:', error.message)
  } else {
    console.log('✅ Usuário criado com sucesso:', data)
  }
}

registerUser()
