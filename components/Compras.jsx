import React, { useState } from 'react';

export default function ListaDeCompras() {
  const [lista, setLista] = useState([]);
  const [novoItem, setNovoItem] = useState('');

  // Adicionar novo item
  const adicionarItem = (e) => {
    e.preventDefault();
    if (!novoItem.trim()) return;

    const item = {
      id: Date.now(), // Gera um ID único simples
      nome: novoItem,
      comprado: false
    };

    setLista([...lista, item]);
    setNovoItem(''); // Limpa o input controlado
  };

  // Alternar status de "comprado"
  const alternarComprado = (id) => {
    const novaLista = lista.map(item => 
      item.id === id ? { ...item, comprado: !item.comprado } : item
    );
    setLista(novaLista);
  };

  // Remover item
  const removerItem = (id) => {
    const novaLista = lista.filter(item => item.id !== id);
    setLista(novaLista);
  };

  // Cálculos para o resumo
  const totalItens = lista.length;
  const totalComprados = lista.filter(item => item.comprado).length;

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto', fontFamily: 'sans-serif' }}>
      <h1>🛒 Lista de Compras</h1>

      {/* Input Controlado */}
      <form onSubmit={adicionarItem} style={{ display: 'flex', gap: '10px' }}>
        <input 
          type="text" 
          value={novoItem}
          onChange={(e) => setNovoItem(e.target.value)}
          placeholder="O que precisa comprar?"
          style={{ flex: 1, padding: '8px' }}
        />
        <button type="submit" disabled={!novoItem.trim()}>Adicionar</button>
      </form>

      {/* Resumo */}
      <div style={{ margin: '15px 0', fontSize: '0.9rem', color: '#666' }}>
        Total: {totalItens} | Comprados: {totalComprados}
      </div>

      {/* Renderização da Lista */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {lista.map((item) => (
          <li key={item.id} style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            padding: '8px 0',
            borderBottom: '1px solid #eee'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <input 
                type="checkbox" 
                checked={item.comprado} 
                onChange={() => alternarComprado(item.id)}
              />
              <span style={{ 
                textDecoration: item.comprado ? 'line-through' : 'none',
                color: item.comprado ? '#888' : '#000'
              }}>
                {item.nome}
              </span>
            </div>
            <button 
              onClick={() => removerItem(item.id)}
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              🗑️
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}