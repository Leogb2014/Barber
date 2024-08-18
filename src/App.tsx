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


function App() {
  return (
    <AuthProvider>
    <ServicoProvider>
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/cadastro' element={<CadastroUsuario/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>

    </LocalizationProvider>

    </ServicoProvider>
    </AuthProvider>
  )
}

export default App