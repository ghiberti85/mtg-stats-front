import { useState } from 'react'
import Layout from '@/components/Layout'
import { ChevronDown, ChevronUp } from 'lucide-react'

type FAQ = {
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    question: 'Como registrar uma nova partida?',
    answer:
      'Vá até a aba "Partidas" e clique em "Registrar nova". Preencha os dados da partida e clique em salvar.',
  },
  {
    question: 'Posso editar informações de um deck?',
    answer:
      'Sim! Na aba "Decks", clique no ícone de editar ao lado do deck desejado e atualize as informações necessárias.',
  },
  {
    question: 'Como faço para alterar meu e-mail ou senha?',
    answer:
      'Acesse a aba "Perfil" e utilize as opções de atualização de e-mail e redefinição de senha disponíveis.',
  },
]

export default function HelpPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto mt-10 text-white px-4 pb-16">
        <h1 className="text-3xl font-bold mb-6">Ajuda & Suporte</h1>

        <p className="mb-4 text-gray-300">
          Bem-vindo à central de ajuda do <strong>MTG Stats</strong>! Aqui você
          encontrará respostas para as dúvidas mais comuns e informações sobre
          como usar a plataforma.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">
          📌 Perguntas Frequentes
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-xl bg-gray-900 overflow-hidden transition-all duration-500"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-800 transition-colors"
              >
                <span className="font-medium text-white">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              <div
                className={`px-6 pt-3 pb-4 text-gray-300 transition-all duration-300 ${
                  openIndex === index ? 'block' : 'hidden'
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-semibold mt-10 mb-2">📬 Suporte</h2>
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
