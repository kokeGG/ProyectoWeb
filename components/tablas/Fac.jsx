import React from 'react'
import DatosFac from './DatosFac';

const Fac = ({resultados}) => {
    
    return ( 
        <div>
            {resultados.map(resultado => (
                <DatosFac
                    key={resultado.CantidadSolicitada}
                    resultado={resultado}
                />
            ))}
        </div>
     );
}
 
export default Fac;