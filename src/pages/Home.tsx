import React from 'react';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

export default function Home(){
  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Página Inicial (Placeholder)</h1>
      <Card>
        <p>Este site foi gerado automaticamente a partir do boilerplate que você enviou. Use os componentes e substitua conteúdos conforme necessário.</p>
      </Card>

      <section className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Demonstrações</h2>
        <ul className="list-disc pl-6">
          <li><Link to="/integrantes" className="underline">Página de Integrantes (com rota dinâmica)</Link></li>
          <li><Link to="/sobre" className="underline">Sobre</Link></li>
          <li><Link to="/faq" className="underline">FAQ</Link></li>
        </ul>
      </section>
    </main>
  );
}
