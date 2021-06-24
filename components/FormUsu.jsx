import React, {useState} from 'react';
import styled from '@emotion/styled';
import Header from '../components/Header';
import { TextField, Button } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import Tabla from '../components/tablas/TablaEstacion';
import Error from '../components/ErrorMensaje';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const FormUsu = () => {

    const DivGeneral = styled.div`
        width: 100%;
        background-color: rgb(23, 28, 36) !important;
        min-height: 90rem;
    `;

    const DivForm = styled.div`
        width: 100%;
        
    `;

const DivTi = styled.div`
text-align: center;
padding-top: 5rem;
//border: 1px solid black;
`;

const Titu = styled.h1`
letter-spacing: 2px;
margin-top: 3rem;
color: white;
`;

const DivBoton = styled.div`
text-align: center !important;

`;

const TextDi = styled.div`
width: 100%;
padding-bottom: 1rem;

`;

const Text = styled.p`
color: white;
text-align: center;
font-size: 19px;
cursor: pointer;
`;

const [ error, guardarError] = useState(false);

const [errorVacio, guardarErrorVacio] = useState(false);

const [ registro, cambiarRegistro ] = useState({
Estacion: '',
Correo: '',
Encargado: '',
Telefono: '',
Nombre: '',
NombreEstacion: '',
Direccion: ''
});


const leerForm = e => {
cambiarRegistro({
    ...registro,
    [e.target.name] : e.target.value
});
}

const { Estacion, Correo, Encargado, Telefono, Nombre, NombreEstacion, Direccion } = registro;



const crearCuenta = async (e) => {
    e.preventDefault();

    if(Estacion.trim() === '' || Correo.trim() === '' || Encargado.trim() === '' || Telefono.trim() === '' || 
    Nombre.trim() === '', NombreEstacion.trim() === '' || Direccion.trim() === '') {
        guardarErrorVacio(true);
        setTimeout(() => {
            guardarErrorVacio(false);
        }, 5000);
        return
    }
    
    axios.post('http://localhost:4000/api/station', registro)
    .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error.response.data);
      });

    
}
    return ( 
        <div className="xd">
            
                <Header/>
                
                <div className="primero">
                <div className="circulo">
                    <CreateIcon  style={{ color: 'white', fontSize: 60}}/>
                </div>
                <div className="fondo">
                    <DivTi>
                        <Titu>Nueva Estación</Titu>
                    </DivTi>
                    {errorVacio ? <Error mensaje="Todos los campos son obligatorios" /> : null}
                <form className="campos" autoComplete="off" onSubmit={crearCuenta}>
                        <TextField 
                            className="filled-basic" 
                            label="Estación" 
                            type="text" 
                            name="Estacion" 
                            value={Estacion}
                            variant="filled" 
                            style={{ width: 500, marginTop: 45 }}
                            onChange={leerForm}
                        />
                        <TextField 
                            className="filled-basic" 
                            label="Correo" 
                            type="email" 
                            name="Correo" 
                            value={Correo}
                            variant="filled" 
                            style={{ width: 500, marginTop: 45 }}
                            onChange={leerForm}
                        />
                        <TextField 
                            className="filled-basic" 
                            label="Encargado" 
                            type="text" 
                            name="Encargado" 
                            value={Encargado}
                            variant="filled" 
                            style={{ width: 500, marginTop: 45 }}
                            onChange={leerForm}
                        />
                        <TextField 
                            className="filled-basic" 
                            label="Teléfono" 
                            type="text" 
                            name="Telefono" 
                            value={Telefono}
                            variant="filled" 
                            style={{ width: 500, marginTop: 45 }}
                            onChange={leerForm}
                        />
                        <TextField 
                            className="filled-basic" 
                            label="Nombre" 
                            type="text" 
                            name="Nombre" 
                            value={Nombre}
                            variant="filled" 
                            style={{ width: 500, marginTop: 45 }}
                            onChange={leerForm}
                        />
                        <TextField 
                            className="filled-basic" 
                            label="Nombre Estación" 
                            type="text" 
                            name="NombreEstacion" 
                            value={NombreEstacion}
                            variant="filled" 
                            style={{ width: 500, marginTop: 45 }}
                            onChange={leerForm}
                        />
                        <TextField 
                            className="filled-basic" 
                            label="Dirección" 
                            type="text" 
                            name="Direccion" 
                            value={Direccion}
                            variant="filled" 
                            style={{ width: 500, marginTop: 45 }}
                            onChange={leerForm}
                        />
                        <DivBoton>
                            <Button type="submit" variant="contained" color="primary" style={{ width: 500, marginTop: 45, marginBottom: 45 }}>
                                Guardar
                            </Button>
                        </DivBoton>
                </form>
                </div>
            </div>

                <Tabla />
                
            </div>
    
     );
}
 
export default FormUsu;