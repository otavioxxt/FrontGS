import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';

const SunIcon = ({className='h-5 w-5'}) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
    <circle cx="12" cy="12" r="4"></circle>
    <path d="M12 2v2"></path>
    <path d="M12 20v2"></path>
    <path d="M4.93 4.93l1.41 1.41"></path>
    <path d="M17.66 17.66l1.41 1.41"></path>
    <path d="M2 12h2"></path>
    <path d="M20 12h2"></path>
    <path d="M4.93 19.07l1.41-1.41"></path>
    <path d="M17.66 6.34l1.41-1.41"></path>
  </svg>
);

const MoonIcon = ({className='h-5 w-5'}) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
);

export default function NavBar(){
  const { theme, toggle } = useContext(ThemeContext);
  return (
    <nav className="w-full p-4 flex items-center justify-between border-b bg-white dark:bg-slate-900 transition-colors">
      <div className="flex items-center gap-3">
        <div className="font-bold text-lg">Projeto</div>
        <Link to="/" className="text-sm opacity-80">Home</Link>
        <Link to="/integrantes" className="text-sm opacity-80">Integrantes</Link>
        <Link to="/sobre" className="text-sm opacity-80">Sobre</Link>
        <Link to="/faq" className="text-sm opacity-80">FAQ</Link>
      </div>
      <div className="flex items-center gap-3">
        <button onClick={toggle} className="px-3 py-1 rounded border flex items-center gap-2 transition-colors">
          {theme === 'dark' ? <MoonIcon className='h-5 w-5'/> : <SunIcon className='h-5 w-5'/>}
          <span className="sr-only">Alternar tema</span>
          <span className="text-sm">{theme}</span>
        </button>
      </div>
    </nav>
  );
}
