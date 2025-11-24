import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

const MOCK = [
  { rm: '565960', nome: 'Otávio Ferreira', turma: '2025.1', github: 'https://github.com/otavioxxt', linkedin: 'https://www.linkedin.com/in/otavio-ferreira-535089240/' },
  { rm: '564765', nome: 'Raphael Salomão', turma: '2025.1', github: 'https://github.com/salomaochamma', linkedin: 'https://www.linkedin.com/in/raphael-salom%C3%A3o-chamma-467b55200/' },
  { rm: '565881', nome: 'Samuel Tenório Cavalcanti', turma: '2025.1', github: 'https://github.com/SaaxzDev', linkedin: 'https://www.linkedin.com/in/samuel-ten%C3%B3rio-dev/' },
];

export default function Integrantes(){
  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Integrantes</h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        {MOCK.map(m => (
          <Card key={m.rm}>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xl">{m.nome.split(' ').map(s=>s[0]).slice(0,2).join('')}</div>
              <div>
                <div className="font-semibold">{m.nome}</div>
                <div className="text-sm opacity-80">RM: {m.rm} • {m.turma}</div>
                <div className="mt-2 flex gap-2">
                  <a className="underline text-sm" href={m.github}>GitHub</a>
                  <a className="underline text-sm" href={m.linkedin}>LinkedIn</a>
                  <Link to={`/integrantes/${m.rm}`} className="underline text-sm">Detalhes</Link>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}
