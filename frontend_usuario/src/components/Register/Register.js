import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './Register.css';

const endpoint = 'http://localhost:8000/api/cliente'

const Register = () => {

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

    const register = async (e) => {
        e.preventDefault()
        await axios.post(endpoint, {
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
        navigate('/login')
    }
    const navigateToLogin = () => {
        navigate('/login');
      };


    var rootStyle = {
        backgroundColor: '#7A7777',
        color: 'white',
        position: 'flex',
        padding: '3%',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,

    }
    return (
        <div style={rootStyle}>
            <h1 className='tittle'>Crear Una Cuenta</h1>
            <h5 class="subtittle"><i>Central de Uniformes S.L.</i></h5>

            <form class="form" onSubmit={register}>

                <label className='form-label'>Usuario</label>
                <div className='mb-3'>
                    <input
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                        type='text'
                        class='input1' />
                </div>

                <label className='form-label'>Contraseña</label>
                <div className='mb-3'>
                    <input
                        value={contraseña}
                        onChange={(e) => setContraseña(e.target.value)}
                        type='password'
                        className='input1'
                    />
                </div>

                <label className='form-label'>CIF / NIF</label>
                <div className='mb-3'>
                    <input
                        value={cif_nif}
                        onChange={(e) => setCif_nif(e.target.value)}
                        type='text'
                        className='input1'
                    />
                </div>

                <label className='form-label'>Razon Social</label>
                <div className='mb-3'>
                    <input
                        value={razon_social}
                        onChange={(e) => setRazon_social(e.target.value)}
                        type='text'
                        className='input1'
                    />
                </div>

                <label className='form-label'>Nombre Comercial</label>
                <div className='mb-3'>
                    <input
                        value={nombre_comercial}
                        onChange={(e) => setNombre_comercial(e.target.value)}
                        type='text'
                        className='input1'
                    />
                </div>

                <label className='form-label'>Teléfono</label>
                <div className='mb-3'>
                    <input
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                        type='text'
                        className='input1'
                    />
                </div>

                <label className='form-label'>Email</label>
                <div className='mb-3'>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type='text'
                        className='input1'
                    />
                </div>

                <label className='form-label'>Dirección</label>
                <div className='mb-3'>
                    <input
                        value={direccion}
                        onChange={(e) => setDireccion(e.target.value)}
                        type='text'
                        className='input1'
                    />
                </div>

                <label className='form-label'>Código Postal</label>
                <div className='mb-3'>
                    <input
                        value={codigo_postal}
                        onChange={(e) => setCodigo_postal(e.target.value)}
                        type='text'
                        className='input1'
                    />
                </div>

                <label className='form-label'>Municipio</label>
                <div className='mb-3'>
                    <input
                        value={municipio}
                        onChange={(e) => setMunicipio(e.target.value)}
                        type='text'
                        className='input1'
                    />
                </div>

                <label className='form-label'>Provincia</label>
                <div className='mb-3'>
                    <input
                        value={provincia}
                        onChange={(e) => setProvincia(e.target.value)}
                        type='text'
                        className='input1'
                    />
                </div>

                <label className='form-label'>Observaciones</label>
                <div className='mb-3'>
                    <input
                        value={observaciones}
                        onChange={(e) => setObservaciones(e.target.value)}
                        type='text'
                        className='input1'
                    />
                </div>

                <button type='submit' class="but">Crear Cuenta</button>

                <h6>¿Ya tienes una cuenta?</h6>

                <button onClick={navigateToLogin} class="but">Iniciar Sesión</button>
            </form>
        </div>
    )
}

export default Register