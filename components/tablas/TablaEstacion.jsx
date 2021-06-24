import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import { Table } from 'react-bootstrap';
import Station from '../tablas/Station';
import { DeleteIcon  } from '@material-ui/icons';


const Tabla = () => {

    const DivGeneral = styled.div`
        margin-top: 18rem;
    `;

    const DivSegundo = styled.div`
        width: 60%;
        margin: auto;
    `;

    const [ resultados, guardarResultado ] = useState([]);


    useEffect(() => {
            
        const consumoDatos = async () => {
            const url = `http://localhost:4000/api/station`;
            const resultado = await axios.get(url);
            //guardarResultado(resultado.data);

            
                
                    guardarResultado(resultado.data);
                    //console.log(resultado.data);
        }
        consumoDatos();
    }, [])

   
  

    return ( 
        <>
        <DivGeneral>
            <DivSegundo>
                <Station 
                    resultados={resultados}
                />
            </DivSegundo>
        </DivGeneral>
        </>
     );
} 
 
export default Tabla;