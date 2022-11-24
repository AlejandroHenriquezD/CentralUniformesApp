import React, {useEffect, useState} from 'react'
import axios from 'axios'

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
                <Link to="/create_pedido" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Create</Link>
            </div>

            <table className='table table-striped'>
                <thead className='bg-primary text-white'>
                    <tr>
                        <td>Articulo</td>
                        <td>Unidades</td>
                        <td>Observaciones</td>
                        <td>Acciones</td>
                    </tr>
                </thead>
                <tbody>
                    {pedidos.map( (pedido) => (
                        <tr key={pedido.id}>
                            <td> {pedido.id_articulo} </td>
                            <td> {pedido.unidades} </td>
                            <td> {pedido.observaciones} </td>
                            <td>
                                <Link to={`/edit_pedido/${pedido.id}`} className='btn btn-warning'>Edit</Link>
                                <button onClick={ ()=>deletePedido(pedido.id)} className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                    )) }
                </tbody>
            </table>
        </div>
    )
}

export default ShowPedidos