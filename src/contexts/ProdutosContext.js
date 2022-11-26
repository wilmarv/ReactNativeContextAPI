import { createContext, useState } from "react";

export const ProdutosContext = createContext({});

export function ProdutosProvider({ children }) {
    const [quantidade, setQuantidade] = useState(0);
    const carrinho = [];
    const [ultimosVistos, setUltimosVisto] = useState([]);

    function viuProduto(produto) {
        setQuantidade(quantidade + 1);

        carrinho.push(produto);
        const novoUltimosVisto = new Set(ultimosVistos);
        novoUltimosVisto.add(produto);
        setUltimosVisto([...novoUltimosVisto]);
    }

    return (
        <ProdutosContext.Provider value={{
            quantidade, carrinho, ultimosVistos, viuProduto
        }}>
            {children}
        </ProdutosContext.Provider>
    );
}