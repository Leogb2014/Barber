import React from 'react'
import CardServico from '../../components/cards/CardServico'
import foto from "../../assets/cliente-fazendo-o-corte-de-cabelo-em-um-salao-de-barbearia_1303-20762.jpg"
import foto2 from "../../assets/cabeleireiro-de-mao-de-cabeleireiro-com-tesoura_23-2147839850.jpg"
import foto3 from "../../assets/homem-em-um-salao-de-barbearia-fazendo-o-corte-de-cabelo-e-barba_1303-20962.avif"

function Home() {
  return (
    <div className='flex flex-col'>

    <div className='grid grid-flow-col-dense p-10 mx-auto container gap-10'>
    <CardServico imagem={foto} nome={'Cabelo'} preco={'R$35,00'}/>
    <CardServico imagem={foto2} nome={'Barba'} preco={'R$35,00'}/>
    <CardServico imagem={foto3} nome={'Cabelo e Barba'} preco={'R$70,00'}/>

    </div>
    
    </div>
  )
}

export default Home