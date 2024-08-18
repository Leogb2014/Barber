import Servico from "./Servico";
import Usuario from "./Usuario";

export default interface Agendamento{
    id: 0,
    dia: string,
    hora: string,
    servico: Servico
    usuario: Usuario

}