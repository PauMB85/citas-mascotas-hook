import React, { useState, Fragment, useEffect } from 'react';
import './App.css';
import Formulario from './components/Formulario'
import Cita from './components/Cita';

function App() {

  let citasIniciales = JSON.parse(localStorage.getItem('citas'));

  if(!citasIniciales) {
    citasIniciales = [];
  }

  //useState
  const [ citas, guardarCitas] = useState(citasIniciales);



  // agregamos las nuecas citas
  const crearCita = cita => {
    console.log(cita);
    // copia del state acutal  
    const nuevasCitas = [...citas, cita];

    // añadimos el nuevo cliente
    guardarCitas(nuevasCitas);
  }

  //elimina las citas del state
  const eliminarCita = index => {
    const nuevasCitas = [...citas];
    nuevasCitas.splice(index, 1);
    guardarCitas(nuevasCitas);
  }

  useEffect(
    () => {
      let citasIniciales = JSON.parse(localStorage.getItem('citas'));

      if(citasIniciales) {
        localStorage.setItem('citas', JSON.stringify(citas));
      } else {
        localStorage.setItem('citas', []);
      }
    }, [citas]
  )

  //Cargar titulo
  const titulo =  citas.length === 0 ? 'No hay citas':'Lista de citas'


  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className="container">     
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita}/>
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map((cita, index) => (
              <Cita 
                key={index}
                index={index}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
    


  );
}

export default App;
