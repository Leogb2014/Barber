import * as React from 'react';
import dayjs, { } from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'



import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { ptBR } from 'date-fns/locale/pt-BR';

import {  useContext, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';
import './Reserva.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate, useParams } from 'react-router-dom';
import Agendamento from '../../models/Agendamento';
import Servico from '../../models/Servico';
import { atualizar, buscarAgenda, cadastrar, cadastrarReserva } from '../../service/Service';
import { RotatingLines } from 'react-loader-spinner';

interface servicoProps{
  servico: Servico
  
}



function Reserva(props: servicoProps) {

  const times = [
    '9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30',
     '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:30', '17:00',
      '17:30', '18:00', '18:30', '19:00'
  ]

  const [value, setValue] = React.useState<Date| null>(new Date());
  const[dia, setDia] = useState<string>('')
  const[hora, setHora] = useState('')

  const { id } = useParams<{ id: string }>();

  const[reservar, setReservar] = useState<Agendamento>({} as Agendamento)

  const navigate = useNavigate()

  const { usuario, handleLogout } = useContext(AuthContext)
  const token = usuario.token

  const [loading, setLoading] = useState<boolean>(false)


function mostrarHora(hora: string){
  setHora(hora)
  setReservar({
    id: 0,
    dia: dia,
    hora: hora,
    servico: props.servico,
    usuario: usuario
  })
}

  function formatarData(){
    const formatDay = value ? dayjs(value).format('DD/MM/YYYY'): 'Nenhuma data selecionada'
    setDia(formatDay)
   
  }

useEffect(() => {
  console.log(dia)
  
},[dia])

useEffect(() => {
  formatarData()
  
}, [value])

useEffect(() => {
  if (token === '') {
    navigate('/home');
  }
}, [token]);




async function cadastrar(){
      try{
        await cadastrarReserva('/agendamentos', reservar, {headers: {Authorization: token}})
        retornar()
      }catch(error){
        alert("Erro ao reservar")
      }

    }


function retornar(){
  setLoading(true)
  const interval = setInterval(() => {
    setLoading(false);
  }, 7000);
}

  return (
    <>
    <body>

    
<div className=' bg-[#1c1c22] flex flex-col items-center justify-center text-white  border-black' >
  <div>
  <h1 className='text-2xl font-bold'>{id !== undefined ? 'Escolha um nnovo horário' : 'Escolha um horário'}</h1>

  </div>
   <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
  <DemoContainer components={['DateCalendar', 'DateCalendar']}>
    <DemoItem>
      <DateCalendar  value={value} onChange={(newValue) => setValue(newValue)} 
      className="custom-calendar" 
           />
    </DemoItem>
  </DemoContainer>
</LocalizationProvider>


</div>
<div className='border-t border-b  '>
<Swiper
   modules={[Navigation, Pagination, Scrollbar, A11y]}
   spaceBetween={30}
   slidesPerView={4}
   className='p-4  '

>
     
  {times.map((item, numero) => (
        <SwiperSlide key={numero} className="badge badge-primary badge-outline p-4"  ><button className='' onClick={() => mostrarHora(item)}>{item}</button></SwiperSlide>

  ))}

  
 
 
</Swiper>
</div>

<div className=' border border-gray-700 rounded-md m-10  flex justify-between'>
  <div className='flex flex-col items-start p-4 gap-2 mx-4 text-center'>
    <div className=' rounded-2xl mt-2 text-black text-center font-bold bg-purple-600'>
     
    </div>
    
      <div className='font-bold text-white'>
        {props.servico.nome}
    
    </div>
    <div className='text-purple-600 font-bold'>
      {props.servico.preco}
    </div>

  </div>

    <div className='border-l-2 p-7 border-gray-700 text-white font-semibold flex flex-col gap-2 text-center'>
     {dia}
     <div>
      {hora}
     </div>
    </div>

</div>

<div className='flex justify-center'>
<button onClick={cadastrar} className='badge badge-primary text-white p-7 '>
{loading ? <RotatingLines
            strokeColor="white"
            strokeWidth="5"
            animationDuration="0.75"
            width="24"
            visible={true}
          /> : <span>Agendar</span>}
            </button>
</div>





</body>


    </>
  )
}

export default Reserva


