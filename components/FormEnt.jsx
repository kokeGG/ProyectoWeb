import React, {useState} from 'react';
import styled from '@emotion/styled';
import { TextField, Button, FormControl } from '@material-ui/core';
import Header from '../components/Header';
import Error from '../components/ErrorMensaje';
import CreateIcon from '@material-ui/icons/Create';
import Tabla from './tablas/TablasEnt';
import axios from 'axios';

const FormEnt = () => {
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


    const [ error, guardarError] = useState(false);

    const [errorVacio, guardarErrorVacio] = useState(false);


    const [ registro, cambiarRegistro ] = useState({
        NumPedido: '',
        ES: '',
        FechaEntrega: '',
        HoraEntrega: '',
        NombreOperador: '',
        CantidadEntregada: '',
        Tipo: '',
        Diferencia: '',
        Factura: '',
        Nota: '',
        Cumplido: ''
    });


    const leerForm = e => {
    cambiarRegistro({
        ...registro,
        [e.target.name] : e.target.value
    });
    }

    const { NumPedido, ES, FechaEntrega, HoraEntrega, Diferencia, Tipo, NombreOperador, CantidadEntregada, Factura, Nota, Cumplido } = registro;



    const crearCuenta = async (e) => {
    e.preventDefault();

    if(NumPedido.trim() === '' || ES.trim() === '' || FechaEntrega.trim() === '' || HoraEntrega.trim() === '' || Nota.trim() === '' || Tipo.trim() === '' || NombreOperador.trim() === '' || CantidadEntregada.trim() === '' || Cumplido.trim() === '' || Factura.trim() === '' || Diferencia.trim() === '') {  
        guardarErrorVacio(true);
        setTimeout(() => {
            guardarErrorVacio(false);
        }, 5000);
        return
    }

    axios.post('http://localhost:4000/api/delivery/', registro)
    .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error.response.data);
      });

    cambiarRegistro({
        NumPedido: '',
        ES: '',
        FechaEntrega: '',
        HoraEntrega: '',
        NombreOperador: '',
        CantidadEntregada: '',
        Tipo: '',
        Diferencia: '', 
        Factura: '',
        Nota: '',
        Cumplido: ''
    })

}
    return ( 
        <>
            <div className="xd">
                <Header/>
            <div className="primero">
            <div className="circulo">
                        <CreateIcon  style={{ color: 'white', fontSize: 60}}/>
            </div>
                <div className="fondo">
                    <DivTi>
                        <Titu>Entrega</Titu>
                    </DivTi>
                    {errorVacio ? <Error mensaje="Todos los campos son obligatorios" /> : null}
                <form className="campos" autoComplete="off" onSubmit={crearCuenta}>
                        <TextField 
                            className="filled-basic" 
                            label="Número de pedido" 
                            type="text" 
                            name="NumPedido" 
                            value={NumPedido}
                            variant="filled" 
                            style={{ width: 500, marginTop: 45 }}
                            onChange={leerForm}
                        />
                        <TextField 
                            className="filled-basic" 
                            label="Estación" 
                            type="text" 
                            name="ES" 
                            value={ES}
                            variant="filled" 
                            style={{ width: 500, marginTop: 45 }}
                            onChange={leerForm}
                        />
                        <TextField
                            id="date"
                            label="Fecha Entrega"
                            name="FechaEntrega" 
                            value={FechaEntrega}
                            onChange={leerForm}
                            type="date"
                            defaultValue="2017-05-24"
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                        <TextField
                            id="time"
                            label="Hora Entrega"
                            name="HoraEntrega" 
                            value={HoraEntrega}
                            onChange={leerForm}
                            type="time"
                            defaultValue="07:30"
                            InputLabelProps={{
                            shrink: true,
                            }}
                            inputProps={{
                            step: 300, // 5 min
                            }}
                        />
                        <TextField 
                            className="filled-basic" 
                            label="Nota" 
                            type="text" 
                            name="Nota" 
                            value={Nota}
                            variant="filled" 
                            style={{ width: 500, marginTop: 45 }}
                            onChange={leerForm}
                        />
                        <TextField 
                            className="filled-basic" 
                            label="Nombre del Operador" 
                            type="text" 
                            name="NombreOperador" 
                            value={NombreOperador}
                            variant="filled" 
                            style={{ width: 500, marginTop: 45 }}
                            onChange={leerForm}
                        />
                        <TextField 
                            className="filled-basic" 
                            label="Diferencia" 
                            type="text" 
                            name="Diferencia" 
                            value={Diferencia}
                            variant="filled" 
                            style={{ width: 500, marginTop: 45 }}
                            onChange={leerForm}
                        />
                        <TextField 
                            className="filled-basic" 
                            label="Cantidad Entregada" 
                            type="text" 
                            name="CantidadEntregada" 
                            value={CantidadEntregada}
                            variant="filled" 
                            style={{ width: 500, marginTop: 45 }}
                            onChange={leerForm}
                        />
                        <FormControl>
                            <label>Cumplido: </label>
                            <select
                                type="text"
                                name="Cumplido"
                                value={Cumplido}
                                onChange={leerForm}
                            >
                                <option>-- Seleccionar --</option>
                                <option>Si</option>
                                <option>No</option>
                            </select>
                        </FormControl>
                        <FormControl>
                            <label>Tipo: </label>
                            <select
                                type="text"
                                name="Tipo"
                                value={Tipo}
                                onChange={leerForm}
                            >
                                <option>-- Seleccionar --</option>
                                <option>Regular</option>
                                <option>Premium</option>
                            </select>
                        </FormControl>
                        <TextField 
                            className="filled-basic" 
                            label="Factura" 
                            type="text" 
                            name="Factura" 
                            value={Factura}
                            variant="filled" 
                            style={{ width: 500, marginTop: 45 }}
                            onChange={leerForm}
                        />
                        <DivBoton>
                            <Button type="submit" variant="contained" color="primary" style={{ width: 500, marginTop: 45, marginBottom: 45 }}>
                                Agregar Cliente
                            </Button>
                        </DivBoton>
                        
                </form>
                </div>
            </div>
                <Tabla />
            </div>
        </>
     );
}
 
export default FormEnt;