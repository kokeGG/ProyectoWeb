import React, {useState} from 'react';
import { Table, Modal } from 'react-bootstrap';
import axios from 'axios';
import styled from '@emotion/styled';
import Error from '../ErrorMensaje';
import CreateIcon from '@material-ui/icons/Create';
import { TextField, FormControl, Button } from '@material-ui/core';

const DatosPedi = ({resultado}) => {

    const [show, setShow] = useState(false);


    const Delete = async () => {

        const id = {
            id: resultado.NumPedido
        }

        await axios.delete(`http://localhost:4000/api/orders/${id.id}`)
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
        FechaProgramada: resultado.FechaProgramada,
        HoraProgramada: resultado.HoraProgramada,
        CantidadSolicitada: resultado.CantidadSolicitada,
        Tipo: resultado.Tipo,
        PersonaRequiere: resultado.PersonaRequiere,
        PersonaAutoriza: resultado.PersonaAutoriza,
        Entregado: resultado.Entregado
    });


    const leerForm = e => {
        cambiarRegistro({
            ...registro,
            [e.target.name] : e.target.value
        });
        }
        
        const { NumPedido, ES, FechaProgramada, HoraProgramada, CantidadSolicitada, Tipo, PersonaRequiere, PersonaAutoriza, Entregado } = registro;

        
        
        
        const Edit = async (e) => {
            e.preventDefault();

            const id = {
                id: resultado.NumPedido
            }
   
            
            axios.put(`http://localhost:4000/api/orders/${id.id}`, registro)
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
                Entregado: ''});
                

               
        
            
        }

    
    return ( 
        <>
            <Table striped bordered>
                <thead className="p">
                        <tr>
                        <th>Num Pedido</th>
                        <th>ES</th>
                        <th>Fecha Programada</th>
                        <th>Hora Programada</th>
                        <th>Cantidad Solicitada</th>
                        <th>Tipo</th>
                        <th>Persona que Requiere</th>
                        <th>Persona que Autoriza</th>
                        <th>Entregado</th>
                        <th>Eliminar Registro</th>
                        <th>Editar Registro</th>
                        </tr>
                </thead>
                <tbody className="p">
                    <tr>
                    <td>{resultado.NumPedido}</td>
                    <td>{resultado.ES}</td>
                    <td>{resultado.FechaProgramada}</td>
                    <td>{resultado.HoraProgramada}</td>
                    <td>{resultado.CantidadSolicitada}</td>
                    <td>{resultado.Tipo}</td>
                    <td>{resultado.PersonaRequiere}</td>
                    <td>{resultado.PersonaAutoriza}</td>
                    <td>{resultado.Entregado}</td>
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
 
export default DatosPedi;