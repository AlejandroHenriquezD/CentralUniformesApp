import Menu from '../Menu/Menu';
import './Inicio.css';
import { useNavigate } from 'react-router-dom'
import logo from '../logo.png';


const Inicio = () => {

    const navigate = useNavigate()

    const navigateToArticulos = () => {
        navigate('/articulos');
    };




    return (
        <div>
            <Menu />
            <img className='img' src={logo} alt="Logo"></img>
            <div>
                <button onClick={navigateToArticulos} class="buto">Hacer Pedido</button>
            </div>
        </div>
    )
}

export default Inicio