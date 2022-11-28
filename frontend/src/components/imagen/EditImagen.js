import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'
import '../form.css'

const endpoint = 'http://localhost:8000/api/imagen/'

const EditImagen = () => {

    const [id_articulo, setId_Articulo] = useState(0)
    const [imagen, setImagen] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()


    const update = async (e) =>{
        e.preventDefault()
        await axios.put(`${endpoint}${id}`, {
            id_articulo: id_articulo, 
            imagen: imagen
        })
        navigate('/show_imagenes')
    }
    useEffect ( () =>{
        const getPedidoById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            setId_Articulo(response.data.id_articulo)
            setImagen(response.data.imagen)

        }
        getPedidoById()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] )

    return (
        <div>
            <h3>Editar Imagen</h3>
            <form onSubmit={update}>
                <div className='mb-3'>
                    <label className='form-label'>Identificador Articulo</label>
                    <input
                        value={id_articulo}
                        onChange= { (e)=> setId_Articulo(e.target.value)}
                        type='number'
                        className='form'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Imagen</label>
                    <input
                        value={imagen}
                        onChange= { (e)=> setImagen(e.target.value)}
                        type='text'
                        className='form'
                    />
                </div>
                <button type='submit' className='btn btn-primary'>Actualizar</button>
            </form>
        </div>
    )
}

export default EditImagen