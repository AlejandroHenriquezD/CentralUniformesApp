import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './Register.css';

const endpoint2 = 'http://localhost:8000/api/register'

const Register = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm_password, setConfirm] = useState('')


    const [error, setError] = useState('')

    const navigate = useNavigate()

    const register = async (e) => {
        e.preventDefault()
    // eslint-disable-next-line
        if (name.length == 0||password.length == 0||confirm_password.length == 0||email.length == 0) {
        
            setError(true)
        }

        await axios.post(endpoint2, {
            name: name,
            password: password,
            confirm_password: confirm_password,
            email: email
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

                <label className='form-label'>Nombre</label>
                <div className>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type='text'
                        class='input1' />
                    {error&&name.length<=0?
                    <div className='lab'>
                        <label><b>Nombre no puede estar vacio</b></label>
                    </div>:""}
                </div>


                <label className='form-label'>Contraseña *</label>
                <div className='mb-1'>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type='password'
                        className='input1'
                    />
                    {error&&password.length<=0?
                    <div className='lab'>
                        <label><b>Contraseña no puede estar vacia</b></label>
                    </div>:""}
                </div>
                <label className='form-label'>Confirmar Contraseña *</label>
                <div className='mb-3'>
                    <input
                        value={confirm_password}
                        onChange={(e) => setConfirm(e.target.value)}
                        type='password'
                        className='input1'
                    />
                    {error&&confirm_password.length<=0?
                    <div className='lab'>
                        <label><b>Confirmar Contraseña no puede estar vacio</b></label>
                    </div>:""}
                </div>

                <label className='form-label'>Email *</label>
                <div className='mb-3'>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type='text'
                        className='input1'
                    />
                    {error&&email.length<=0?
                    <div className='lab'>
                        <label><b>Email no puede estar vacio</b></label>
                    </div>:""}                
                </div>

                <button type='submit' class="but">Crear Cuenta</button>

                <h6>¿Ya tienes una cuenta?</h6>

                <button onClick={navigateToLogin} class="but">Iniciar Sesión</button>
            </form>
        </div>
    )
}

export default Register