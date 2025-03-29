import { useRouter } from 'next/router'

export default function AuthErrorPage() {
  const { query } = useRouter()
  const error = query.error

  return (
    <div style={{ padding: '2rem' }}>
      {error === 'EmailSignin'
        ? 'Falha ao enviar o e-mail. Verifique se o e-mail está cadastrado.'
        : 'Ocorreu um erro durante o login.'}
    </div>
  )
}
