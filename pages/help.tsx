// pages/help.tsx
import Layout from '@/components/Layout'

export default function HelpPage() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto text-white">
        <h1 className="text-3xl font-bold mb-6">Ajuda & Suporte</h1>

        <p className="mb-4">
          Bem-vindo à central de ajuda do <strong>MTG Stats</strong>! Aqui você
          encontrará respostas para as dúvidas mais comuns e informações sobre
          como usar a plataforma.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          📌 Perguntas Frequentes
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Como registrar uma nova partida?</li>
          <li>Posso editar informações de um deck?</li>
          <li>Como faço para alterar meu e-mail ou senha?</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">📬 Suporte</h2>
        <p className="text-gray-300">
          Se você precisa de ajuda adicional, entre em contato com a nossa
          equipe através do e-mail:{' '}
          <a
            href="mailto:suporte@mtgstats.com"
            className="text-blue-400 hover:underline"
          >
            suporte@mtgstats.com
          </a>
        </p>
      </div>
    </Layout>
  )
}
