import React, {useState} from 'react';
import { Table, Modal } from 'react-bootstrap';
import axios from 'axios';
import styled from '@emotion/styled';
import Error from '../ErrorMensaje';
import CreateIcon from '@material-ui/icons/Create';
import { TextField, FormControl, Button } from '@material-ui/core';


const Datos = ({resultado}) => {

    const [show, setShow] = useState(false);

    const Delete = async () => {

        const id = {
            id: resultado.Estacion
        }

        await axios.delete(`http://localhost:4000/api/station/${id.id}`)
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
    Estacion: resultado.Estacion,
    Correo: resultado.Correo,
    Encargado: resultado.Encargado,
    Telefono: resultado.Telefono,
    Nombre: resultado.Nombre,
    NombreEstacion: resultado.NombreEstacion,
    Direccion: resultado.Direccion
    });


    const leerForm = e => {
        cambiarRegistro({
            ...registro,
            [e.target.name] : e.target.value
        });
        }
        
        const { Estacion, Correo, Encargado, Telefono, Nombre, NombreEstacion, Direccion } = registro;

        
        
        
        const Edit = async (e) => {
            e.preventDefault();

            const id = {
                id: resultado.Estacion
            }

            console.log(registro)
        
            
            
            axios.put(`http://localhost:4000/api/station/${id.id}`, registro)
            .then((response) => {
                console.log(response);
              }, (error) => {
                console.log(error.response.data);
              });

            cambiarRegistro({
                Estacion: '',
                Correo: '',
                Encargado: '',
                Telefono: '',
                Nombre: '',
                NombreEstacion: '',
                Direccion: ''
                });

               
        
            
        }


    
    return ( 
        <>
            <Table striped bordered>
                <thead className="p">
                        <tr>
                        <th>Estación</th>
                        <th>Correo</th>
                        <th>Encargado</th>
                        <th>Teléfono</th>
                        <th>Nombre</th> 
                        <th>Nombre Estación</th>
                        <th>Dirección</th>
                        <th>Eliminar Registro</th>
                        <th>Editar Registro</th>
                        </tr>
                </thead>
                <tbody className="p">
                    <tr>
                    <td>{resultado.Estacion}</td>
                    <td>{resultado.Correo}</td>
                    <td>{resultado.Encargado}</td>
                    <td>{resultado.Telefono}</td>
                    <td>{resultado.Nombre}</td>
                    <td>{resultado.NombreEstacion}</td>
                    <td>{resultado.Direccion}</td>
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
 
export default Datos;