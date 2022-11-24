import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const endpoint = 'http://localhost:8000/api/pedido'

const CreatePedido = () => {

    const [id_pedido, setId_Pedido] = useState(0)
    const [id_cliente, setId_Cliente] = useState(0)
    const [id_articulo, setId_Articulo] = useState(0)
    const [unidades, setUnidades] = useState(0)
    const [observaciones, setObservaciones] = useState('')
    const navigate = useNavigate()


    const store = async (e) => {
        e.preventDefault()
        await axios.post(endpoint, {
            id_pedido: id_pedido, 
            id_cliente: id_cliente, 
            id_articulo: id_articulo, 
            unidades: unidades, 
            observaciones: observaciones})
        navigate('/show_pedidos')
    }


    return (
        <div>
            <h3>Create Pedido</h3>
            <form onSubmit={store}>
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
                <button type='submit' className='btn btn-primary'>Create</button>
            </form>
        </div>

    )
}

export default CreatePedido