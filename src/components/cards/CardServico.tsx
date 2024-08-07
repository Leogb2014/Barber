import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";


import Popup from 'reactjs-popup'


interface cardServicoProps{
    imagem: string
    nome: string
    preco: string
}

const generateTimeSlots = (start: Date, end: Date, interval: number) => {
    const slots: string[] = [];
    let current = new Date(start);
    while (current <= end) {
      slots.push(current.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      current = new Date(current.getTime() + interval * 60000);
    }
    return slots;
  };





 

function CardServico(props: cardServicoProps) {

    const [startDate, setStartDate] = useState<Date | null>(null);
    const [selectedTime, setSelectedTime] = useState<string>('');
    const [showModal, setShowModal] = useState<boolean>(false);
    const [events, setEvents] = useState<{ start: Date; end: Date; title: string }[]>([]);
    const [newEvent, setNewEvent] = useState<{ start: Date; end: Date; title: string; service: string } | null>(null);
    const [serviceType, setServiceType] = useState<string>('Cabelo e Barba');
   
    const[agendamento, setAgendamento] = useState<any>({
      tipo: '',
      dia: '',
      hora: ''

    })

    const timeSlots = startDate
      ? generateTimeSlots(
          new Date(startDate.setHours(0, 0, 0, 0)), // Start of the day
          new Date(startDate.setHours(19, 0, 0, 0)), // End of the day
          30 // Interval in minutes
          
        )
        
      : [];

    const SERVICE_DURATIONS: { [key: string]: number } = {
        'Cabelo e Barba': 60,
        'Cabelo': 30,
        'Barba': 45,
      };

      
    
    
    
      

    const handleDateChange = (date: Date | null) => {
        if (date) {
          setStartDate(date);
        }
      };
    
      const handleTimeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedTime(event.target.value);
      };
    
      const handleSaveEvent = () => {
        if (startDate && selectedTime) {
          const [hours, minutes] = selectedTime.split(':').map(Number);
          const start = new Date(startDate);
          start.setHours(hours, minutes);
          const duration = SERVICE_DURATIONS[serviceType] || 60;
          const end = new Date(start.getTime() + duration * 60000); 
          setEvents([...events, { start, end, title: '' }]);
          setShowModal(false);
          setStartDate(null);
          setSelectedTime('');
          setAgendamento({
            tipo: serviceType,
            dia: start
          })
        }
      };

      console.log(agendamento)
    
     




  return (
    <>

    <div className=' w-full flex gap-4 flex-col  items-center rounded-xl shadow-2xl  justify-between'>
        <div>
            <img className='rounded-t-xl ' src={props.imagem} alt="" />
            
        </div>
        <h1 className='font-bold text-white text-3xl'>
            {props.nome}
        </h1>
        <div className='text-white mb-12'>
            {props.preco}
         </div>
         <button className='text-2xl text-white mb-10 border rounded-xl px-6 py-1 hover:bg-white hover:text-black' onClick={() => setShowModal(true)}>Agendar</button>

    </div>

    <div >
      
      {showModal && (
        <Popup open={showModal} onClose={() => setShowModal(false)} modal>
          <div className='container flex items flex-col items-center justify-center mx-auto borde w-screen bg-white border rounded-2xl shadow-2xl'>
            <form className=" flex flex-col gap-4 py-9 items-center">
              <label htmlFor="start-date" className='font-bold text-2xl'>Selecione uma Data</label>
              <DatePicker
                id="start-date"
                selected={startDate}
                onChange={handleDateChange}
                className='border rounded-lg border-gray-500 text-center'
                
              />
   
                  <select
                  className='border rounded-lg border-gray-600 shadow-2xl'
                    id="service-type"
                    value={serviceType}
                    
                    onChange={(e) => {
                      const selectedService = e.target.value;
                      setServiceType(selectedService);
                      if (startDate) {
                        const newEnd = new Date(startDate.getTime() + (SERVICE_DURATIONS[selectedService] || 60) * 60000);
                        setNewEvent({
                          ...newEvent!,
                          service: selectedService,
                          end: newEnd,
                        });
                      }
                    }}
                  >
                     <option value="">Serviço</option>
                    {Object.keys(SERVICE_DURATIONS).map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>

              {startDate && (
                <>
                  
                  <select id="time-select"  className='border rounded-lg border-gray-500' value={selectedTime} onChange={handleTimeChange}>
                    <option value="">Horários</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}

                    
                  </select>
                  

                </>
              )}
              

              <button type="button" className='text-2xl border rounded-xl px-4 bg-gray-400 text-white' onClick={handleSaveEvent}>
                Agendar
              </button>
            </form>
          </div>
        </Popup>
      )}
    </div>






   
    </>
  )
}

export default CardServico