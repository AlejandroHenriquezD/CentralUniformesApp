import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'
import '../form.css'

const endpoint = 'http://localhost:8000/api/pedido/'
const endpoint2 = 'http://localhost:8000/api'

const EditPedido = () => {

    const [id_pedido, setId_Pedido] = useState(0)
    const [id_cliente, setId_Cliente] = useState(0)
    const [id_articulo, setId_Articulo] = useState(0)
    const [unidades, setUnidades] = useState(0)
    const [observaciones, setObservaciones] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    const [articulos, setId_Articulos] = useState([])
    const [clientes, setId_Clientes] = useState([])


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
            getAll()
        }
        const getAll = async () => {
            const response = await axios.get(`${endpoint2}/articulos`);
            const response2 = await axios.get(`${endpoint2}/clientes`);
            setId_Articulos(response.data);
            setId_Clientes(response2.data);
          };
        getPedidoById()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] )

    return (
        <div>
            <h3>Editar Pedido</h3>
            <form onSubmit={update}>
                <div className='mb-3'>
                    <label className='form-label'>Numero Pedido</label>
                    <input
                        value={id_pedido}
                        onChange= { (e)=> setId_Pedido(e.target.value)}
                        type='number'
                        className='form'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Cliente</label>
                    <select
                        value={id_cliente}
                        onChange={(e) => {
                            setId_Cliente(e.target.value);
                        }}
                        className='form'
                    >
                        <option value="" />
                        {clientes.map((cliente) => (
                            <option value={`${cliente.id}`}>{cliente.usuario}</option>
                        ))}
                    </select>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Articulo</label>
                    <select
                        value={id_articulo}
                        onChange={(e) => {
                            setId_Articulo(e.target.value);
                        }}
                        className='form'
                    >
                        <option value="" />
                        {articulos.map((articulo) => (
                            <option value={`${articulo.id}`}>{articulo.nombre} {articulo.talla} {articulo.color}</option>
                        ))}
                    </select>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Unidades</label>
                    <input
                        value={unidades}
                        onChange= { (e)=> setUnidades(e.target.value)}
                        type='number'
                        className='form'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Observaciones</label>
                    <input
                        value={observaciones} 
                        onChange= { (e)=> setObservaciones(e.target.value)}
                        type='text'
                        className='form'
                    />
                </div>
                <button type='submit' className='btn btn-danger'>Actualizar</button>
            </form>
        </div>
    )
}

export default EditPedido