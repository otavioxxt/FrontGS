import React from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';

export default function IntegranteDetail(){
  const { rm } = useParams();
  // Placeholder: in the real app, fetch by RM from API
  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Integrante — {rm}</h1>
      <Card>
        <p>Detalhes do integrante com RM <strong>{rm}</strong>. Substitua pelo fetch real da API usando /integrantes/:rm</p>
      </Card>
    </main>
  );
}
