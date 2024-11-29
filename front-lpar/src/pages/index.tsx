import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <h1>Gestão de Itens</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Link href="/create">
          <button style={buttonStyle}>Criar Item</button>
        </Link>
        <Link href="/view">
          <button style={buttonStyle}>Ver Itens</button>
        </Link>
        <Link href="/update">
          <button style={buttonStyle}>Atualizar Item</button>
        </Link>
        <Link href="/delete">
          <button style={buttonStyle}>Excluir Item</button>
        </Link>
      </div>
    </div>
  );
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
  backgroundColor: '#0070f3',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

export default HomePage;
