import React from 'react'
import DatosPedi from './DatosPedi';

const Pedid = ({resultados}) => {
    
    return ( 
        <div>
            {resultados.map(resultado => (
                <DatosPedi
                    key={resultado.CantidadSolicitada}
                    resultado={resultado}
                />
            ))}
        </div>
     );
}
 
export default Pedid;