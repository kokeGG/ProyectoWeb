import React, {useState} from 'react';
import styled from '@emotion/styled';
import { TextField, Button } from '@material-ui/core';
import Header from '../components/Header';
import Error from '../components/ErrorMensaje';
import CreateIcon from '@material-ui/icons/Create';
import Tabla from './tablas/TablasFac';
import axios from 'axios';

const FormFac = () => {
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
        Operacion: '',
        fecha: '',
        litros: '',
        comision: '',
        importe: '',
        IVA: '',
        TOTAL: '',
        FechaPago: '',
        ComDesp: '',
        MontoRepartir: '',
        MontoIndividual: ''
    });


    const leerForm = e => {
    cambiarRegistro({
        ...registro,
        [e.target.name] : e.target.value
    });
    }

    const { Operacion, fecha, litros, comision, importe, IVA, TOTAL, FechaPago, ComDesp, MontoRepartir, 
        MontoIndividual } = registro;



    const crearCuenta = async (e) => {
    e.preventDefault();

    if(Operacion.trim() === '' || fecha.trim() === '' || litros.trim() === '', comision.trim() === '' || importe.trim() === '' || IVA.trim() === '' || TOTAL.trim() === '' || FechaPago.trim() === '' || ComDesp.trim() === '' || MontoRepartir.trim() === '' || MontoIndividual.trim() === '') {
        guardarErrorVacio(true);
        setTimeout(() => {
            guardarErrorVacio(false);
        }, 5000);
        return
    }

    axios.post('http://localhost:4000/api/invoices/', registro)
    .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error.response.data);
      });

      cambiarRegistro({
        Operacion: '',
        fecha: '',
        litros: '',
        comision: '',
        importe: '',
        IVA: '',
        TOTAL: '',
        FechaPago: '',
        ComDesp: '',
        MontoRepartir: '',
        MontoIndividual: ''
    });

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
                        <Titu>Facturas</Titu>
                    </DivTi>
                    {errorVacio ? <Error mensaje="Todos los campos son obligatorios" /> : null}
                <form className="campos" autoComplete="off" onSubmit={crearCuenta}>
                        <TextField 
                            className="filled-basic" 
                            label="Operación" 
                            type="text" 
                            name="Operacion" 
                            value={Operacion}
                            variant="filled" 
                            style={{ width: 500, marginTop: 45 }}
                            onChange={leerForm}
                        />
                        <TextField
                            id="date"
                            label="Fecha"
                            name="fecha" 
                            value={fecha}
                            onChange={leerForm}
                            type="date"
                            defaultValue="2021-05-24"
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                        <TextField 
                            className="filled-basic" 
                            label="Litros" 
                            type="text" 
                            name="litros" 
                            value={litros}
                            variant="filled" 
                            style={{ width: 500, marginTop: 45 }}
                            onChange={leerForm}
                        />
                        <TextField 
                            className="filled-basic" 
                            label="Comisión" 
                            type="number" 
                            name="comision" 
                            value={comision}
                            variant="filled" 
                            style={{ width: 500, marginTop: 45 }}
                            onChange={leerForm}
                        />
                        <TextField 
                            className="filled-basic" 
                            label="Importe" 
                            type="text" 
                            name="importe" 
                            value={importe}
                            variant="filled" 
                            style={{ width: 500, marginTop: 45 }}
                            onChange={leerForm}
                        />
                        <TextField 
                            className="filled-basic" 
                            label="IVA" 
                            type="text" 
                            name="IVA" 
                            value={IVA}
                            variant="filled" 
                            style={{ width: 500, marginTop: 45 }}
                            onChange={leerForm}
                        />
                        <TextField 
                            className="filled-basic" 
                            label="Total" 
                            type="text" 
                            name="TOTAL" 
                            value={TOTAL}
                            variant="filled" 
                            style={{ width: 500, marginTop: 45 }}
                            onChange={leerForm}
                        />
                        <TextField
                            id="date"
                            label="Fecha de Pago"
                            name="FechaPago" 
                            value={FechaPago}
                            onChange={leerForm}
                            type="date"
                            defaultValue="2021-05-24"
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                        <TextField 
                            className="filled-basic" 
                            label="Com Desp" 
                            type="text" 
                            name="ComDesp" 
                            value={ComDesp}
                            variant="filled" 
                            style={{ width: 500, marginTop: 45 }}
                            onChange={leerForm}
                        />
                        <TextField 
                            className="filled-basic" 
                            label="Monto Repartir" 
                            type="text" 
                            name="MontoRepartir" 
                            value={MontoRepartir}
                            variant="filled" 
                            style={{ width: 500, marginTop: 45 }}
                            onChange={leerForm}
                        />
                        <TextField 
                            className="filled-basic" 
                            label="Monto Individual" 
                            type="text" 
                            name="MontoIndividual" 
                            value={MontoIndividual}
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
 
export default FormFac;