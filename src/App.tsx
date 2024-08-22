import React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { ptBR } from 'date-fns/locale';
import { ServicoProvider } from './context/ServicoContext';
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';
import Login from './pages/login/Login';
import { AuthProvider } from './context/AuthContext';
import Footer from './components/footer/Footer';
import DadosConta from './pages/dadosConta/DadosConta';
import Config from './pages/config/Config';
import MinhasReservas from './pages/minhasReservas/MinhasReservas';
import ExcluirAgendamento from './components/agendamento/excluirAgendamento/ExcluirAgendamento';
import Reserva from './pages/reserva/Reserva';




function App() {
  return (
    <AuthProvider>
    <ServicoProvider>
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
    <BrowserRouter>
    <Navbar/>
    <div className='min-h-[80vh]'>
    <Routes>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/cadastro' element={<CadastroUsuario/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/minhaConta' element={<DadosConta/>}/>
      <Route path='/config' element={<Config/>}/>
      <Route path='/minhasReservas' element={<MinhasReservas/>}/>
      <Route path='/cancelarReserva/:id' element={<ExcluirAgendamento/>}/>
      <Route path='/reagendar/:id' element={<Reserva />}/>
      
    </Routes>
    </div>
    
  
    <Footer/>
    </BrowserRouter>

    </LocalizationProvider>

    </ServicoProvider>
    </AuthProvider>
  )
}

export default App