import React, { useEffect, useState } from 'react';

const ViewItems = () => {
  const [items, setItems] = useState<any[]>([]); 

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/items'); 
        if (!response.ok) {
          throw new Error('Erro ao buscar itens');
        }
        const data = await response.json();
        console.log('Itens recebidos da API:', data); 
        setItems(data); 
      } catch (error) {
        console.error('Erro ao buscar itens:', error);
      }
    };
  
    fetchItems();
  }, []);
  

  return (
    <div>
      <h1>Itens</h1>
      {items.length === 0 ? (
        <p>Nenhum item encontrado</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.id} - {item.nome || 'Nome não disponível'}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
  
          }
export default ViewItems;
