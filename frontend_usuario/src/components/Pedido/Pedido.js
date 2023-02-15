import Menu from '../Menu/Menu';
import './Pedido.css';
import '../componentes2.css';
// import { useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Header from '../Header/Header';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const endpoint = 'http://localhost:8000/api'

const Pedido = () => {
  const navigate = useNavigate();

    const [pedidos, setPedidos] = useState([])

    useEffect(() => {
        getAllPedidos()
    }, [])


    const getAllPedidos = async () => {
        const response = await axios.get(`${endpoint}/pedidos`)
        setPedidos(response.data)
    }

    const navigateToDiseños = () => {
      navigate("/diseños");
    };

    return (
      <div>
        <Header/>
          <div id="content">
            <div className="halfContent">
              <div id="dataCanvas">
                <h1>Pedido</h1>
                <button className="longButton" onClick={navigateToDiseños}>Seleccionar diseño</button>
                <div id="unidades">
                  <button className="shortButton">Unidades</button>
                  <input type="number"/>
                </div>
                <div id="lastButtons">
                  <button className="longButton">Realizar pedido</button>
                </div>
              </div>
            </div>
            <div className="halfContent">
              <div id="imgCanvas">
                <img src="/img/camiseta_negra.jpg" />
              </div>
            </div>
          </div>
        </div>
            /* <Menu/>
            {pedidos.map((pedido) => (
                    <div className='pedido'>
                        <p>{pedido.fecha_pedido}</p>
                        <p>{pedido.articulo.nombre} {pedido.articulo.talla} {pedido.articulo.color}</p>
                        <p>{pedido.unidades} unidad/es</p>
                        <p>{pedido.articulo.precio}€/unidad</p>
                    </div>
            ))} */
    )
}

export default Pedido