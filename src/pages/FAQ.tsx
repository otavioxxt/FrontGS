import React from 'react';
import Card from '../components/Card';

export default function FAQ(){
  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">FAQ / Contato</h1>
      <Card>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Qual é a proposta do projeto?</strong> Plataforma de saúde mental digital (PsicoBit) com triagem por IA, matchmaking com psicólogos e dashboards anônimos para clientes corporativos. (base: proposta do projeto)</li>
          <li><strong>Como funciona o tema claro/escuro?</strong> O site usa a Context API para controlar o tema; ele respeita preferência do sistema e salva a escolha no navegador.</li>
          <li><strong>Como conectar à API?</strong> Configure a variável de ambiente <code>REACT_APP_API_URL</code> ou ajuste o cliente HTTP no frontend.</li>
          <li><strong>Onde estão os requisitos?</strong> Os requisitos e critérios que guiam o desenvolvimento estão no documento de requisitos (arquivo enviado junto ao projeto).</li>
          <li><strong>Contato para dúvidas técnicas:</strong> Abra uma issue no repositório do projeto ou envie email para contato@exemplo.com (substitua pelo contato real).</li>
        </ol>
      </Card>

      <section className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Mais informações (resumo)</h2>
        <Card>
          <p>Resumo: A solução foca em acessibilidade, atendimento imediato, supervisão clínica para psicólogos recém-formados e integração com IA para triagem e matching.</p>
        </Card>
      </section>
    </main>
  );
}
