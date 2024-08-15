import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:1337'
})

export const cadastrarUsuario = async(url: string, dados: Object, setDados: Function) => {
  const resposta = await api.post(url, dados)
  setDados(resposta.data)
}

export const login = async(url: string, dados: Object, setDados: Function) => {
  const resposta = await api.post(url, dados)
  setDados(resposta.data)
}
export const buscar = async(url: string) => {
  const resposta = await api.get(url)
  return resposta
 
}

export const cadastrar = async(url: string, dados: Object) => {
  const resposta = await api.post(url, dados)
}

export const atualizar = async(url: string, dados: Object, setDados: Function, header: Object) => {
  const resposta = await api.put(url, dados, header)
  setDados(resposta.data)
}


export const deletar = async(url: string, header: Object) => {
  await api.delete(url, header)
}
