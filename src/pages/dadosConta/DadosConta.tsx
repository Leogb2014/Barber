import React, { ChangeEvent, useState } from 'react'
import Usuario from '../../models/Usuario'
import DatePicker from 'react-datepicker'

function DadosConta() {

    const [startDate, setStartDate] = useState<Date | null>(null);



    const[usuario, setUsuario] = useState<Usuario>({
        nome: '',
        nascimento: '',
        email: 'email@email.com',
        telefone: '(xx)xxxxx-xxxx'
    })

    const handleDateChange = (date: Date | null) => {
        if (date) {
          setStartDate(date);
        }
      };

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
  
        setUsuario({
    
          ...usuario,
    
          [e.target.name]: e.target.value
  
          
  
    
        })
      }



  return (
    <div className='flex flex-col '>
        <div className='flex flex-col items-start'>
        <h1 className='text-black text-2xl font-bold ml-4'>Detalhes da conta</h1>

        </div>
        <h2 className='text-black p-4 my-2 bg-gray-200'>Detalhes Pessoais</h2>
    <div className='flex flex-col  items-center'>

    <form className='w-full p-4 flex flex-col gap-4 '>
        <div className='flex flex-col'>

        
        <input type="text" name="nome" id="nome"
        value={usuario?.nome}
        placeholder="Nome e sobrenome"
        className="border border-gray-300 rounded p-3 placeholder-[#756F6E] bg-transparent font-medium"
        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
        </div>
<div className='flex flex-col text-black'>

          
              <DatePicker
                id="start-date"
                selected={startDate}
                placeholderText='Data de nascimento'
                onChange={handleDateChange}
                className="border border-gray-300 rounded w-full p-3 placeholder-[#756F6E] bg-transparent font-medium"
                
              />



        
</div>


    </form>

    </div>

    <div className='text-black p-4 border-b-2 flex justify-between items-center'>
        <div>
        <p>E-mail</p>
        {usuario.email}
        </div>
        <div>
        <button className='border-2 rounded-xl p-2 font-semibold'>
            Editar
        </button>

        </div>
    </div>

    <div className='text-black p-4 flex justify-between'>
        <div>
        <p className='textsm'>Número de telefone</p>
        {usuario.telefone}

        </div>
        <button className='border-2 rounded-xl p-2 font-semibold'>
            Editar
        </button>
    </div>
    
    </div>
  )
}

export default DadosConta