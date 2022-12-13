import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'
import '../form.css'

const endpoint = 'http://localhost:8000/api/cliente/'

const EditClient = () => {

    const [usuario, setUsuario] = useState('')
    const [contraseña, setContraseña] = useState('')
    const [cif_nif, setCif_nif] = useState('')
    const [razon_social, setRazon_social] = useState('')
    const [nombre_comercial, setNombre_comercial] = useState('')
    const [telefono, setTelefono] = useState('')
    const [email, setEmail] = useState('')
    const [direccion, setDireccion] = useState('')
    const [codigo_postal, setCodigo_postal] = useState('')
    const [municipio, setMunicipio] = useState('')
    const [provincia, setProvincia] = useState('')
    const [observaciones, setObservaciones] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()


    const update = async (e) =>{
        e.preventDefault()
        await axios.put(`${endpoint}${id}`, {
            usuario: usuario, 
            contraseña: contraseña, 
            cif_nif: cif_nif, 
            razon_social: razon_social, 
            nombre_comercial: nombre_comercial, 
            telefono: telefono, 
            email: email, 
            direccion: direccion, 
            codigo_postal: codigo_postal, 
            municipio: municipio, 
            provincia: provincia, 
            observaciones: observaciones
        })
        navigate('/show_clients')
    }
    useEffect ( () =>{
        const getClientById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            setUsuario(response.data.usuario)
            setContraseña(response.data.contraseña)
            setCif_nif(response.data.cif_nif)
            setRazon_social(response.data.razon_social)
            setNombre_comercial(response.data.nombre_comercial)
            setTelefono(response.data.telefono)
            setEmail(response.data.email)
            setDireccion(response.data.direccion)
            setCodigo_postal(response.data.codigo_postal)
            setMunicipio(response.data.municipio)
            setProvincia(response.data.provincia)
            setObservaciones(response.data.observaciones)
        }
        getClientById()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] )

    return (
        <div>
            <h3>Editar Cliente</h3>
            <form onSubmit={update}>
                <div className='mb-3'>
                    <label className='form-label'>Usuario</label>
                    <input
                        value={usuario}
                        onChange= { (e)=> setUsuario(e.target.value)}
                        type='text'
                        className='form'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Contraseña</label>
                    <input
                        value={contraseña}
                        onChange= { (e)=> setContraseña(e.target.value)}
                        type='password'
                        className='form'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Cif_Nif</label>
                    <input
                        value={cif_nif}
                        onChange= { (e)=> setCif_nif(e.target.value)}
                        type='text'
                        className='form'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Razon Social</label>
                    <input
                        value={razon_social}
                        onChange= { (e)=> setRazon_social(e.target.value)}
                        type='text'
                        className='form'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Nombre Comercial</label>
                    <input
                        value={nombre_comercial}
                        onChange= { (e)=> setNombre_comercial(e.target.value)}
                        type='text'
                        className='form'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Telefono</label>
                    <input
                        value={telefono}
                        onChange= { (e)=> setTelefono(e.target.value)}
                        type='text'
                        className='form'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Email</label>
                    <input
                        value={email}
                        onChange= { (e)=> setEmail(e.target.value)}
                        type='text'
                        className='form'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Direccion</label>
                    <input
                        value={direccion}
                        onChange= { (e)=> setDireccion(e.target.value)}
                        type='text'
                        className='form'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Codigo Postal</label>
                    <input
                        value={codigo_postal}
                        onChange= { (e)=> setCodigo_postal(e.target.value)}
                        type='text'
                        className='form'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Municipio</label>
                    <input
                        value={municipio}
                        onChange= { (e)=> setMunicipio(e.target.value)}
                        type='text'
                        className='form'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Provincia</label>
                    <input
                        value={provincia}
                        onChange= { (e)=> setProvincia(e.target.value)}
                        type='text'
                        className='form'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Observaciones</label>
                    <input
                        value={observaciones}
                        onChange= { (e)=> setObservaciones(e.target.value)}
                        type='text'
                        className='form'
                    />
                </div>
                <button type='submit' className='btn btn-danger'>Actualizar</button>
            </form>
        </div>
    )
}

export default EditClient