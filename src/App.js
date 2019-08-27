import React, { useState, Fragment } from 'react';
import './App.css';
import Formulario from './components/Formulario'
import Cita from './components/Cita';

function App() {


  //useState
  const [ citas, guardarCitas] = useState([]);



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
