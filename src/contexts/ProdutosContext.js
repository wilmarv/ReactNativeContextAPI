import { createContext, useState, useEffect } from "react";
import { salvarProduto, pegarProdutos } from "../servicos/requisicoes/produtos"

export const ProdutosContext = createContext({});

export function ProdutosProvider({ children }) {
    const [quantidade, setQuantidade] = useState(0);
    const [carrinho, setCarrinho] = useState([]);
    const [ultimosVistos, setUltimosVisto] = useState([]);

    useEffect(async () => {
        const resultado = await pegarProdutos();
        setCarrinho(resultado);
        setQuantidade(resultado.length)
    }, []);

    async function viuProduto(produto) {
        setQuantidade(quantidade + 1);

        const resultado = await salvarProduto(produto);

        const novoCarrinho = carrinho;
        const novoUltimosVisto = new Set(ultimosVistos);
        novoCarrinho.push(resultado);
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