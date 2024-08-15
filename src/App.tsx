import React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'
import Profile from './pages/menu/Menu'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { ptBR } from 'date-fns/locale';
import { ServicoProvider } from './context/ServicoContext';


function App() {
  return (
    <ServicoProvider>
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </BrowserRouter>

    </LocalizationProvider>

    </ServicoProvider>
  )
}

export default App