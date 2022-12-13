import Menu from '../Menu/Menu';
import './Inicio.css';
import { useNavigate } from 'react-router-dom'
import ima1 from '../imga1.jpg';
import ima2 from '../imga2.jpg';
import ima3 from '../imga3.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const Inicio = () => {

    const navigate = useNavigate()

    const navigateToArticulos = () => {
        navigate('/articulos');
    };




    return (
        <div>
            <Menu />
            <Carousel className>
                <div>
                    <img src={ima1} alt="ima1" />
                </div>
                <div>
                    <img src={ima2} alt="ima2" />
                </div>
                <div>
                    <img src={ima3} alt="ima3" />
                </div>
            </Carousel>


            <div>
                <button onClick={navigateToArticulos} class="buto">Hacer Pedido</button>
            </div>
        </div>
    )
}

export default Inicio