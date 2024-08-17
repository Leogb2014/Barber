import { createContext, ReactNode, useState } from "react";
import Servico from "../models/Servico";
import { buscar } from "../service/Service";

interface ServicoContextProps {
    servico: any[]
    isLoading: boolean
    retornar(): Promise<void>
}

interface ServicoProviderProps {
    children: ReactNode
}

export const ServicoContext = createContext({} as ServicoContextProps)

export function ServicoProvider({ children }: ServicoProviderProps) {

    const [servico, setServico] = useState<any[]>([])

    const [isLoading, setIsLoading] = useState(false)

    async function retornar(){
        setIsLoading(true)
        try{
            const dados = await buscar('/servicos')
           setServico(dados.data.data)
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