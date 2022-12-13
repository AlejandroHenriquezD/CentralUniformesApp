import './Login.css';
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()
    
    const login = async (e) => {

        e.preventDefault()
        
        navigate('/inicio')
    }

    const navigateToRegister = () => {
        navigate('/register');
      };

    var rootStyle = {
        backgroundColor : '#7A7777',
        color : 'white',
        position: 'absolute',
        padding: '3%',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      
      }
    return (
        <div style={rootStyle}>
            <h1 className='tittle'>Incio de Sesion</h1>
            <h5 class="subtittle"><i>Central de Uniformes S.L.</i></h5>

            <form class="form" onSubmit={login}>

                <label className='form-label'>Usuario</label>
                <div className='mb-3'>
                    <input class="input1" type='text'/>
                </div>

                <label className='form-label'>Contraseña</label>
                <div className='mb-3'>
                    <input class="input1" type='password'/>
                </div>

                <button type='submit' class="but">Iniciar Sesión</button>

                <h6>¿Todavía no tienes una cuenta?</h6>

                <button onClick={navigateToRegister} class="but">Registrate</button>

            </form>
        </div>
    )
}

export default Login