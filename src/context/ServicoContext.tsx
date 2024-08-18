import { createContext, ReactNode, useState } from "react";
import { buscar } from "../service/Service";
import Servico from "../models/Servico";

interface ServicoContextProps {
    servico: Servico[]
    isLoading: boolean
    retornar(): Promise<void>
}

interface ServicoProviderProps {
    children: ReactNode
}

export const ServicoContext = createContext({} as ServicoContextProps)

export function ServicoProvider({ children }: ServicoProviderProps) {

    const [servico, setServico] = useState<Servico[]>([])

    const [isLoading, setIsLoading] = useState(false)

    async function retornar(){
        setIsLoading(true)
        try{
            await buscar('/servicos', setServico)
           setIsLoading(false)
        }catch(error){
            alert('Erro')
        }
    }

    return (
        <ServicoContext.Provider value={{ servico, retornar, isLoading }}>
            {children}
        </ServicoContext.Provider>
    )

}