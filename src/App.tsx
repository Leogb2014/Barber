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

import CadastroUsuarioAdmin from './pages/cadastroUsuario/CadastroUsuarioAdmin';
import CadastroBarbearia from './pages/cadastroBarbearia/CadastroBarbearia';
import BarbeariaPage from './pages/barbeariaPage/BarbeariaPage';
import LoginBarbearia from './pages/login/LoginBarbearia';
import { AuthBarbeariaProvider } from './context/AuthBarbeariaContext';
import CadastroServico from './components/cadastroServico/CadastroServico';
import MeusServicos from './pages/meusServicos/MeusServicos';





function App() {
  return (
    <AuthProvider>
    <AuthBarbeariaProvider>
    <ServicoProvider>
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
    <BrowserRouter>
    <Navbar/>
    <div className='min-h-[90vh]'>
    <Routes>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/cadastro' element={<CadastroUsuario/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/loginBarbearia' element={<LoginBarbearia/>}/>
      <Route path='/minhaConta' element={<DadosConta/>}/>
      <Route path='/config' element={<Config/>}/>
      <Route path='/minhasReservas' element={<MinhasReservas/>}/>
      <Route path='/meusServicos' element={<MeusServicos/>}/>
      <Route path='/cancelarReserva/:id' element={<ExcluirAgendamento/>}/>
      <Route path='/criarConta' element={<CadastroUsuarioAdmin/>}/>
      <Route path='/cadastroBarbearia' element={<CadastroBarbearia/>}/>
      <Route path='/barbeariaPage/:id' element={<BarbeariaPage/>}/>
      <Route path='/cadastroServico' element={<CadastroServico/>}/>
      <Route path='/barbearia/:id' element={<BarbeariaPage/>}/>
    
      
    </Routes>
    </div>
    
  
    <Footer/>
    </BrowserRouter>

    </LocalizationProvider>

    </ServicoProvider>
   </AuthBarbeariaProvider>
    </AuthProvider>
  )
}

export default App