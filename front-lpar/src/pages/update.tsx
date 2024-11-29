import React, { useState } from 'react';

const UpdateItem = () => {
  const [id, setId] = useState<string>('');
  const [nome, setNome] = useState<string>('');

  const handleUpdate = async () => {
    if (!id || !nome) {
      alert('Por favor, preencha todos os campos');
      return;
    }
  
    try {
      const response = await fetch(`http://localhost:3000/api/items/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Erro ao atualizar item:', errorData.error);
        throw new Error('Falha ao atualizar item');
      }
  
      const updatedItem = await response.json();
      console.log('Item atualizado:', updatedItem);
      alert('Item atualizado com sucesso!');
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao atualizar item');
    }
  };
  

  return (
    <div>
      <h1>Atualizar Item</h1>
      <input
        type="number"
        placeholder="ID do item"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Nome do item"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <button onClick={handleUpdate}>Atualizar</button>
    </div>
  );
};

export default UpdateItem;
