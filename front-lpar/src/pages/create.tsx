import { useState } from 'react';
import { useRouter } from 'next/router';

interface ItemData {
  nome: string;
}

const CreateItem = () => {
  const [itemData, setItemData] = useState<ItemData>({ nome: '' });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setItemData({
      ...itemData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!itemData.nome) {
      console.error('Nome é obrigatório');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/items', {  
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(itemData),
      });
      

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Erro ao criar item:', errorData);
        throw new Error('Erro ao criar item');
      }

      const data = await response.json();
      console.log('Item criado com sucesso:', data);
      router.push('/view');
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  return (
    <div>
      <h1>Criar Item</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome do Item:</label>
          <input
            type="text"
            name="nome"
            value={itemData.nome}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Criar</button>
      </form>
    </div>
  );
};

export default CreateItem;
