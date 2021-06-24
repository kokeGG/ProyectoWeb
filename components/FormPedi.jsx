import React, {useState} from 'react';
import 'date-fns';
import styled from '@emotion/styled';
import Header from '../components/Header';
import { TextField, Button, FormControl } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import Error from '../components/ErrorMensaje';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabla from './tablas/TablaPedidos';
import axios from 'axios';

const FormUsu = () => {


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

    const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };


    const [ registro, cambiarRegistro ] = useState({
        NumPedido: '',
        ES: '',
        FechaProgramada: '',
        HoraProgramada: '',
        CantidadSolicitada: '',
        Tipo: '',
        PersonaRequiere: '',
        PersonaAutoriza: '',
        Entregado: ''
    });


    const leerForm = e => {
    cambiarRegistro({
        ...registro,
        [e.target.name] : e.target.value
    });
    }

    const { NumPedido, ES, FechaProgramada, HoraProgramada, CantidadSolicitada, Tipo, PersonaRequiere, PersonaAutoriza, Entregado } = registro;



    const crearCuenta = async (e) => {
    e.preventDefault();

    if(NumPedido.trim() === '' || ES.trim() === '' || FechaProgramada.trim() === '' || HoraProgramada.trim() === '' || CantidadSolicitada.trim() === '' || Tipo.trim() === '' || PersonaRequiere.trim() === '' || PersonaAutoriza.trim() === '' || Entregado.trim() === '') { 
        guardarErrorVacio(true);
        setTimeout(() => {
            guardarErrorVacio(false);
        }, 5000);
        return
    }

    axios.post('http://localhost:4000/api/orders/', registro)
    .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error.response.data);
      });

    cambiarRegistro({
        NumPedido: '',
        ES: '',
        FechaProgramada: '',
        HoraProgramada: '',
        CantidadSolicitada: '',
        Tipo: '',
        PersonaRequiere: '',
        PersonaAutoriza: '',
        Entregado: ''})
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
                        <Titu>Alta de Pedidos</Titu>
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
                            label="Fecha Programada"
                            name="FechaProgramada" 
                            value={FechaProgramada}
                            onChange={leerForm}
                            type="date"
                            defaultValue="2017-05-24"
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                        <TextField
                            id="time"
                            label="Hora programada"
                            name="HoraProgramada" 
                            value={HoraProgramada}
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
                            label="Cantidad Solicitada en Litros" 
                            type="number" 
                            name="CantidadSolicitada" 
                            value={CantidadSolicitada}
                            variant="filled" 
                            style={{ width: 500, marginTop: 45 }}
                            onChange={leerForm}
                        /> 
                        <FormControl>
                            <label>Tipo de servicio: </label>
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
                        <FormControl>
                            <label>Persona que Requiere: </label>
                            <select
                                type="text"
                                name="PersonaRequiere"
                                value={PersonaRequiere}
                                onChange={leerForm}
                            >
                                <option>-- Seleccionar --</option>
                                <option>Rosy</option>
                                <option>Marcelino</option>
                                <option>Valentina Reyna</option>
                            </select>
                        </FormControl>
                        <TextField 
                            className="filled-basic" 
                            label="Persona que Autoriza" 
                            type="text" 
                            name="PersonaAutoriza" 
                            value={PersonaAutoriza}
                            variant="filled" 
                            style={{ width: 500, marginTop: 45 }}
                            onChange={leerForm}
                        />
                        <FormControl>
                            <label>Entregado: </label>
                            <select
                                type="text"
                                name="Entregado"
                                value={Entregado}
                                onChange={leerForm}
                            >
                                <option>-- Seleccionar --</option>
                                <option>Si</option>
                                <option>No</option>
                            </select>
                        </FormControl>
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
    
     );
}
 
export default FormUsu;