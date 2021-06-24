import React from 'react'
import Datos from './Datos';

const Station = ({resultados}) => {
    //console.log(resultados, 'este es')
    return ( 
        <div>
            {resultados.map(resultado => (
                <Datos
                    key={resultado.Direccion}
                    resultado={resultado}
                />
            ))}
        </div>
     );
}
 
export default Station;