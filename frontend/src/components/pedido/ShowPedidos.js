import React, {useEffect, useState} from 'react'
import axios from 'axios'
import logo_pequeño from '../logo_pequeño.png';
import {Link} from 'react-router-dom'

const endpoint = 'http://localhost:8000/api'
const ShowPedidos = () => {
    const [pedidos, setPedidos] = useState([])
    useEffect ( ()=> {
        getAllPedidos() 
    }, [])


    const getAllPedidos = async () => {
        const response = await axios.get(`${endpoint}/pedidos`)
        setPedidos(response.data)
    }

    const deletePedido = async (id) => {
        await axios.delete(`${endpoint}/pedido/${id}`)
        getAllPedidos()
    }

    return (
        <div>
            <div className='d-grip gap-2'>
                <Link to="/create_pedido" className='btn btn-danger btn-lg mt-2 mb-2 text-white'>Crear</Link>
            </div>
            <img className='lg mt-2 mb-2 ' src={logo_pequeño} alt="Logo" />

            <table className='table table-striped'>
                <thead className='bg-success text-white'>
                    <tr>
                        <td>Número Pedido</td>
                        <td>Articulo</td>
                        <td>Unidades</td>
                        <td>Acciones</td>
                    </tr>
                </thead>
                <tbody>
                    {pedidos.map( (pedido) => (
                        <tr key={pedido.id}>
                            <td> {pedido.id_pedido}</td>
                            <td> 
                                {pedido.articulo.nombre} {pedido.articulo.talla} {pedido.articulo.color} </td>
                            <td> {pedido.unidades} </td>
                            <td>
                                <Link to={`/edit_pedido/${pedido.id}`} className='btn btn-primary'>Editar</Link>
                                <button onClick={ ()=>deletePedido(pedido.id)} className='boton danger'>Eliminar</button>
                            </td>
                        </tr>
                    )) }
                </tbody>
            </table>
        </div>
    )
}

export default ShowPedidos