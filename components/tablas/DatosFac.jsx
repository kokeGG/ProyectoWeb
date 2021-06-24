import React, {useState} from 'react';
import { Table, Modal } from 'react-bootstrap';
import axios from 'axios';
import styled from '@emotion/styled';
import Error from '../ErrorMensaje';
import CreateIcon from '@material-ui/icons/Create';
import { TextField, FormControl, Button } from '@material-ui/core';


const DatosFac = ({resultado}) => {

    const [show, setShow] = useState(false);

        const Delete = async () => {
    
            const id = {
                id: resultado.Operacion
            }
    
            await axios.delete(`http://localhost:4000/api/invoices/${id.id}`)
            .then((response) => {
                console.log(response);
              }, (error) => {
                console.log(error.response.data);
              });
            
        }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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

const [errorVacio, guardarErrorVacio] = useState(false);


const [ registro, cambiarRegistro ] = useState({
    Operacion: resultado.Operacion,
    fecha: resultado.fecha,
    litros: resultado.litros,
    comision: resultado.comision,
    importe: resultado.importe,
    IVA: resultado.IVA,
    TOTAL: resultado.TOTAL,
    FechaPago: resultado.FechaPago,
    ComDesp: resultado.ComDesp,
    MontoRepartir: resultado.MontoRepartir,
    MontoIndividual: resultado.MontoIndividual 
    });


    const leerForm = e => {
        cambiarRegistro({
            ...registro,
            [e.target.name] : e.target.value
        });
        }
        
        const { Operacion, fecha, litros, comision, importe, IVA, TOTAL, FechaPago, ComDesp, MontoRepartir, MontoIndividual } = registro;

        
        
        
        const Edit = async (e) => {
            e.preventDefault();

            const id = {
                id: resultado.Operacion
            } 
   
            
            axios.put(`http://localhost:4000/api/invoices/${id.id}`, registro)
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
                MontoIndividual: ''})
                

               
        
            
        } 

    
    return ( 
        <>
            <Table striped bordered>
                <thead className="p">
                        <tr>
                        <th>Operacion</th>
                        <th>Fecha</th>
                        <th>Litros</th>
                        <th>Comision</th>
                        <th>Importe</th>
                        <th>IVA</th>
                        <th>Total</th>
                        <th>Fecha de Pago</th>
                        <th>Com Desp</th>
                        <th>Monto Repartir</th>
                        <th>Monto Individual</th>
                        <th>Eliminar Registro</th>
                        <th>Editar Registro</th>
                        </tr>
                </thead>
                <tbody className="p">
                    <tr>
                    <td>{resultado.Operacion}</td>
                    <td>{resultado.fecha}</td>
                    <td>{resultado.litros}</td>
                    <td>{resultado.comision}</td>
                    <td>{resultado.importe}</td>
                    <td>{resultado.IVA}</td>
                    <td>{resultado.TOTAL}</td>
                    <td>{resultado.FechaPago}</td>
                    <td>{resultado.ComDesp}</td>
                    <td>{resultado.MontoRepartir}</td>
                    <td>{resultado.MontoIndividual}</td>
                    <td><p className="eliminar" onClick={Delete}>Eliminar</p></td>
                    <td><p className="editar" onClick={handleShow}>Editar</p></td> 
                    <Modal show={show} onHide={handleClose} size="lg" >
                        <Modal.Header closeButton >
                        <Modal.Title>Editar Registro</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <>
                            <div className="xd">
                            <div className="primero primerore">
                            <div className="circulo">
                                <CreateIcon  style={{ color: 'white', fontSize: 60}}/>
                            </div>
                            <div className="fondo fondo2">
                                <DivTi>
                                    <Titu>Editar Registro</Titu>
                                </DivTi>
                                {errorVacio ? <Error mensaje="Todos los campos son obligatorios" /> : null}
                                <form className="campos" autoComplete="off" onSubmit={Edit}>
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
                            
                        </div>
                        </>
                        </Modal.Body>
                    </Modal>
                    </tr>
                </tbody>
            </Table>
        </>
     );
}
 
export default DatosFac;