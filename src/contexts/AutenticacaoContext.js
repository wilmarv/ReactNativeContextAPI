import { createContext, useState } from "react";

export const AutenticacaoContext = createContext({});

export function AutenticacaoProvider({ children }) {

    const [usuario, setUsuario] = useState({});

    function login(email, senha) {
        if (email === "wilmar@email.com"
            && senha == 123) {
            setUsuario({
                nome: "Wilmar",
                email: "wilmar@email.com",
                endereco: "R. endereco qualquer",
                telefonse: "(35) 9 9999-9999"
            });
            return "ok";
        }
        else return "Email ou senha incorretos";
    }

    return (
        <AutenticacaoContext.Provider value={{
            login, usuario
        }}>
            {children}
        </AutenticacaoContext.Provider>
    );
}