import React from 'react';

const ListaCitas = ({cita, index, eliminarCita}) => {
    return (
        <div className="cita">
            <p>Mascota: <span>{cita.mascota}</span></p>
            <p>Propietario: <span>{cita.propietario}</span></p>
            <p>Fecha: <span>{cita.fecha}</span></p>
            <p>Hora: <span>{cita.hora}</span></p>
            <p>Síntimas: <span>{cita.sintomas}</span></p>
            <button 
                onClick={ () => eliminarCita(index)}
                type="button" 
                className="button eliminar u-full-width">
                Eliminar
            </button>
        </div>
    );
};

export default ListaCitas;