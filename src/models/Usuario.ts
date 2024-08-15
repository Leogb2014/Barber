import Agendamento from "./Agendamento";

export default interface Usuario{
    nome: string,
    nascimento: string,
    email: string,
    telefone: string,
    agendamento: Agendamento
}