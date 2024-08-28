import React, { ChangeEvent, useContext, useState } from 'react'
import Servico from '../../models/Servico'
import { cadastrarServico } from '../../service/Service';
import { AuthBarbeariaContext } from '../../context/AuthBarbeariaContext';
import { useNavigate } from 'react-router-dom';

function CadastroServico() {

 
    const{barbearia} = useContext(AuthBarbeariaContext)
    const token = barbearia.token
    const navigate = useNavigate()

    const[servico, setServico] = useState<Servico>({
        id: 0,
        nome: '',
        preco: '',
        barbearia: null
    })

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setServico({
          ...servico,
          [e.target.name]: e.target.value,
          barbearia: barbearia
         
        });
    
      }

      async function cadastrar(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault()
        try{
            await cadastrarServico("/servicos", servico, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Serviço cadastrado')
            navigate('/meusServicos')
        }catch(error){
            alert("erro ao cadastrar serviço")
        }

      }





  return (
    <div className='flex flex-col items-center p-28 gap-10 justify-center'>
    <h1 className='text-4xl'>Cadastro de Serviço</h1>
<form onSubmit={cadastrar}>
        <div className='flex flex-col gap-2 '>
        <label htmlFor="nome">Nome do Serviço</label>
        <div>
        <input
              type="nome"
              name="nome"
              id="nome"
              value={servico.nome}
              required
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              className="border-2 border-slate-700 rounded w-96 p-2" />
        </div>
        
        <label htmlFor="preco">Preço</label>
        <div>
        <input 
        type="text" 
        name="preco" 
        id="preco" 
        placeholder='R$xx,xx' 
        value={servico.preco}
        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
        required 
        
        className="border-2 border-slate-700 rounded w-96 p-2" />
        </div>

        </div>
        <div className='flex items-center justify-center p-6'>
            
        <button  type='submit' className="border rounded-xl px-4 py-2 font-semibold hover:bg-white">
       
        <span>Cadastrar</span>
      </button>
        </div>

        
    </form>
    </div>
  )
}

export default CadastroServico