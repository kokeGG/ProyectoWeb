import React from 'react'
import DatosEnt from './DatosEnt';

const Ent = ({resultados}) => {
   
    return ( 
        <div>
            {resultados.map(resultado => (
                <DatosEnt
                    key={resultado.CantidadSolicitada}
                    resultado={resultado}
                />
            ))}
        </div>
     );
}
 
export default Ent;