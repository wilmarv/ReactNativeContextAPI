import { createContext, useState } from "react";

export const ProdutosContext = createContext({});

export function ProdutosProvider({ children }) {
    const [quantidade, setQuantidade] = useState(0);
    const [carrinho, setCarrinho] = useState([]);
    const [ultimosVistos, setUltimosVisto] = useState([]);

    function viuProduto(produto) {
        setQuantidade(quantidade + 1);

        const novoCarrinho = carrinho;
        const novoUltimosVisto = new Set(ultimosVistos);
        novoCarrinho.push(produto);
        novoUltimosVisto.add(produto);

        setCarrinho(novoCarrinho);
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