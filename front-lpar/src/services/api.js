const BASE_URL = 'http://localhost:3000/api';
export default BASE_URL;

export const fetchItems = async () => {
    const response = await fetch(`${BASE_URL}/items`);
    if (!response.ok) {
        throw new Error("Erro ao buscar itens");
    }
    return response.json();
};

export const createItem = async (data) => {
    const response = await fetch(`${BASE_URL}/items`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    if (!response.ok) {
        throw new Error("Erro ao criar item");
    }
    return response.json();
};

export const updateItem = async (id, data) => {
    const response = await fetch(`${BASE_URL}/items/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    if (!response.ok) {
        throw new Error("Erro ao atualizar item");
    }
    return response.json();
};

export const deleteItem = async (id) => {
    const response = await fetch(`${BASE_URL}/items/${id}`, {
        method: "DELETE",
    });
    if (!response.ok) {
        throw new Error("Erro ao excluir item");
    }
};
