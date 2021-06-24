import React, {useState} from 'react';
import { Table, Modal } from 'react-bootstrap';
import axios from 'axios';
import styled from '@emotion/styled';
import Error from '../ErrorMensaje';
import CreateIcon from '@material-ui/icons/Create';
import { TextField, FormControl, Button } from '@material-ui/core';


const DatosEnt = ({resultado}) => {

    const [show, setShow] = useState(false);

    const Delete = async () => {
    
        const id = {
            id: resultado.NumPedido
        }

        await axios.delete(`http://localhost:4000/api/delivery/${id.id}`)
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
    NumPedido: resultado.NumPedido,
    ES: resultado.ES,
    FechaEntrega: resultado.FechaEntrega,
    HoraEntrega: resultado.HoraEntrega,
    NombreOperador: resultado.NombreOperador,
    CantidadEntregada: resultado.CantidadEntregada,
    Tipo: resultado.Tipo,
    Diferencia: resultado.Diferencia,
    Factura: resultado.Factura,
    Nota: resultado.Nota,
    Cumplido: resultado.Cumplido
    });


    const leerForm = e => {
        cambiarRegistro({
            ...registro,
            [e.target.name] : e.target.value 
        });
        }
        
        const { NumPedido, ES, FechaEntrega, HoraEntrega, Diferencia, Tipo, NombreOperador, CantidadEntregada, Factura, Nota, Cumplido } = registro;

        
        
        
        const Edit = async (e) => {
            e.preventDefault();

            const id = {
                id: resultado.NumPedido
            } 
   
            
            axios.put(`http://localhost:4000/api/delivery/${id.id}`, registro)
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
                Cumplido: ''});
            
        } 

    
    return ( 
        <>
            <Table striped bordered>
                <thead className="p">
                        <tr>
                        <th>Num Pedido</th>
                        <th>Estación</th>
                        <th>Fecha Entrega</th>
                        <th>Hora Entrega</th>
                        <th>Nota</th>
                        <th>Nombre Operador</th>
                        <th>Diferencia</th>
                        <th>Cantidad Entregada</th>
                        <th>Cumplido</th>
                        <th>Tipo</th>
                        <th>Factura</th>
                        <th>Eliminar Registro</th>
                        <th>Editar Registro</th>
                        </tr>
                </thead>
                <tbody className="p">
                    <tr>
                    <td>{resultado.NumPedido}</td>
                    <td>{resultado.ES}</td>
                    <td>{resultado.FechaEntrega}</td>
                    <td>{resultado.HoraEntrega}</td>
                    <td>{resultado.Nota}</td>
                    <td>{resultado.NombreOperador}</td>
                    <td>{resultado.Diferencia}</td>
                    <td>{resultado.CantidadEntregada}</td>
                    <td>{resultado.Cumplido}</td>
                    <td>{resultado.Tipo}</td>
                    <td>{resultado.Factura}</td>
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
 
export default DatosEnt;