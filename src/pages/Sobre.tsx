import React from 'react';
import Card from '../components/Card';

export default function Sobre(){
  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Sobre o Projeto</h1>
      <Card>
        <p className="mb-2"><strong>PsicoBit</strong> — plataforma digital de saúde mental projetada para reduzir barreiras de acesso, oferecendo atendimento psicológico acessível e com supervisão clínica, apoiada por IA para triagem e matching.</p>
        <p className="mb-2">Principais pilares:</p>
        <ul className="list-disc pl-6">
          <li>Acesso imediato e prático para pacientes.</li>
          <li>Supervisão clínica contínua para psicólogos em início de carreira.</li>
          <li>Triagem por IA para priorizar demandas (baixa, média, alta).</li>
          <li>Dashboards corporativos anônimos para monitoramento de bem-estar.</li>
        </ul>
        <p className="mt-3">Este resumo foi criado com base na proposta enviada (veja documento fornecido com a entrega para mais detalhes).</p>
      </Card>
    </main>
  );
}
