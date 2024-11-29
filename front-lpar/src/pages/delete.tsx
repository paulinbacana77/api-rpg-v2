import React, { useState } from 'react';

const DeleteItemPage = () => {
  const [id, setId] = useState<string>('');  

  const handleDeleteItem = async () => {
    if (!id) {
      alert('Por favor, insira um ID de item');
      return;
    }

    const response = await fetch(`http://localhost:3000/api/items/${Number(id)}`, {  
      method: 'DELETE',
    });

    if (response.ok) {
      alert('Item excluído com sucesso!');
    } else {
      alert('Erro ao excluir item.');
    }
  };

  return (
    <div>
      <h2>Excluir Item</h2>
      <input
        type="number"
        placeholder="ID do Item"
        value={id}
        onChange={(e) => setId(e.target.value)}  
      />
      <button onClick={handleDeleteItem}>Excluir</button>
    </div>
  );
};

export default DeleteItemPage;
