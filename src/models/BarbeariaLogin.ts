import Servico from "./Servico";

export default interface BarbeariaLogin{
    id: number,
    nome: string,
    email: string,
    telefone: string,
    senha: string,
    endereco: string,
    foto: string,
    servico: Servico[]
    token: string,
  
}