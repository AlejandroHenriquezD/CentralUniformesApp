import Menu from '../Menu/Menu';
import './Articulos.css';
import { useNavigate, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import logo from '../logo.png';
import Swal from 'sweetalert2';



const endpoint = 'http://localhost:8000/api/articulo/'
const endpoint2 = 'http://localhost:8000/api/pedido'

const AñadirArticulo = () => {

    const [nombre, setNombre] = useState('')
    const [talla, setTalla] = useState('')
    const [color, setColor] = useState('')
    const [precio, setPrecio] = useState(0)
    const [descripcion, setDescripcion] = useState('')
    

    const [id_pedido, setId_Pedido] = useState(0)
    const [id_cliente, setId_Cliente] = useState(0)
    const [id_articulo, setId_Articulo] = useState(0)
    const [unidades, setUnidades] = useState(0)

    const navigate = useNavigate()
    const { id } = useParams()


    const store = async (e) => {
        e.preventDefault()
        await axios.post(endpoint2, {
            id_pedido: id_pedido, 
            id_cliente: id_cliente, 
            id_articulo: id_articulo, 
            unidades: unidades})
            Swal.fire(
                'Pedido Confirmado',
                'Tu pedido se ha registrado correctamente',
                'success'
              )
        navigate('/inicio')
    }
    useEffect(() => {
        const getArticuloById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            setNombre(response.data.nombre)
            setTalla(response.data.talla)
            setColor(response.data.color)
            setPrecio(response.data.precio)
            setDescripcion(response.data.descripcion)
            setId_Articulo(id)
            setId_Cliente(id)
            setId_Pedido(id)
        }
        getArticuloById()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <Menu />
            <form onSubmit={store}>
                <img className='img1' src={logo} alt='Logo' />
                <div className='campo'>
                    <label className='form-label'>Nombre:</label>
                    <label className='text'><b>{nombre}</b></label>
                </div>
                <div className='campo'>
                    <label className='form-label'>Talla:</label>
                    <label className='text'><b>{talla}</b></label>
                </div>
                <div className='campo'>
                    <label className='form-label'>Color:</label>
                    <label className='text'><b>{color}</b></label>
                </div>
                <div className='campo'>
                    <label>Precio:</label>
                    <label className='text'><b>{precio}€</b></label>
                </div>
                <div className='campo'>
                    <label className='form-label'>Descripción</label>
                    <label className='text'><b>{descripcion}</b></label>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Cantidad</label>
                    <input
                        value={unidades}
                        onChange={(e) => setUnidades(e.target.value)}
                        type='text'
                        className='form1'
                    />
                </div>
                <button type='submit' className='boton10'>Hacer Pedido</button>
                
                <p></p>
            </form>
        </div>
    )
}

export default AñadirArticulo