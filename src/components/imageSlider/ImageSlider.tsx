import React, { useEffect, useState } from 'react'
import './ImageSlider.css'
import foto1 from '../../assets/cadeiras-vintage-na-barbearia_155003-10150.jpg'
import foto2 from '../../assets/cadeiras-vintage-na-barbearia2.0_155003-10155.jpg'
import foto3 from '../../assets/homem-em-um-salao-de-barbearia-fazendo-o-corte-de-cabelo-e-barba_1303-20954.jpg'
import foto4 from '../../assets/cabeleireiro-de-mao-de-cabeleireiro-com-tesoura_23-2147839850.jpg'



const images = [
    foto1,
    foto2,
    foto3,
    foto4
  ]

export default function ImageSlider() {
  
    const [currentIndex, setCurrentIndex] = useState(0);

    
  

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); // Troca de imagem a cada 3 segundos
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <>
  
          
      <div className="slider">

      
  

        {images.map((image, index) => (
          <>
              
            
          
                
          <img
          
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`slider-image ${currentIndex === index ? 'fade-in' : 'fade-out'}`}
          />
          </>
        ))}
      </div>
      </>
    )
  }

