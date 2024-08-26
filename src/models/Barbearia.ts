import Usuario from "./Usuario";

export default interface Barbearia{
    id: number,
    nome: string,
    endereco: string,
    foto: string,
    usuario: Usuario
}