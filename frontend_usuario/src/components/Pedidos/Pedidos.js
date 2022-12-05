import Menu from '../Menu/Menu';
import './Pedidos.css';
// import { useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const endpoint = 'http://localhost:8000/api'

const Pedidos = () => {

    const [pedidos, setPedidos] = useState([])

    useEffect(() => {
        getAllPedidos()
    }, [])


    const getAllPedidos = async () => {
        const response = await axios.get(`${endpoint}/pedidos`)
        setPedidos(response.data)
    }

    return (
        <div>
            <Menu/>
            {pedidos.map((pedido) => (
                    <div className='pedido'>
                        <p>{pedido.fecha_pedido}</p>
                        <p>{pedido.articulo.nombre} {pedido.articulo.talla} {pedido.articulo.color}</p>
                        <p>{pedido.unidades}</p>
                        <p>{pedido.articulo.precio}€/unidad</p>
                    </div>
            ))}
        </div>
    )
}

export default Pedidos