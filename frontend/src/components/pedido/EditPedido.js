import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/pedido/'

const EditPedido = () => {

    const [id_pedido, setId_Pedido] = useState(0)
    const [id_cliente, setId_Cliente] = useState(0)
    const [id_articulo, setId_Articulo] = useState(0)
    const [unidades, setUnidades] = useState(0)
    const [observaciones, setObservaciones] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()


    const update = async (e) =>{
        e.preventDefault()
        await axios.put(`${endpoint}${id}`, {
            id_pedido: id_pedido, 
            id_cliente: id_cliente, 
            id_articulo: id_articulo, 
            unidades: unidades, 
            observaciones: observaciones
        })
        navigate('/show_pedidos')
    }
    useEffect ( () =>{
        const getPedidoById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            setId_Pedido(response.data.id_pedido)
            setId_Cliente(response.data.id_cliente)
            setId_Articulo(response.data.id_articulo)
            setUnidades(response.data.unidades)
            setObservaciones(response.data.observaciones)
        }
        getPedidoById()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] )

    return (
        <div>
            <h3>Edit Pedido</h3>
            <form onSubmit={update}>
                <div className='mb-3'>
                    <label className='form-label'>Numero Pedido</label>
                    <input
                        value={id_pedido}
                        onChange= { (e)=> setId_Pedido(e.target.value)}
                        type='number'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Numero Cliente</label>
                    <input
                        value={id_cliente}
                        onChange= { (e)=> setId_Cliente(e.target.value)}
                        type='number'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Identificador Articulo</label>
                    <input
                        value={id_articulo}
                        onChange= { (e)=> setId_Articulo(e.target.value)}
                        type='number'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Unidades</label>
                    <input
                        value={unidades}
                        onChange= { (e)=> setUnidades(e.target.value)}
                        type='number'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Observaciones</label>
                    <input
                        value={observaciones} 
                        onChange= { (e)=> setObservaciones(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
                <button type='submit' className='btn btn-primary'>Update</button>
            </form>
        </div>
    )
}

export default EditPedido