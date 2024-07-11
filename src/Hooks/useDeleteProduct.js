export function useDeleteProduct() {

    const deleteProduct = async (id) => {
        try {
            const response = await fetch(`http://localhost:8800/products/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            if (!response.ok) {
                throw new Error('Erro ao excluir o produto')
            }

            const data = await response.json()
            return data
        } catch (error) {
            throw new Error('Erro ao excluir o produto: ' + error.message)
        }
    }

    return {
        deleteProduct
    }
}