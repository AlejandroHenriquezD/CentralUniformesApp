import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../form.css'

const endpoint = 'http://localhost:8000/api/imagen'
const endpoint2 = 'http://localhost:8000/api'

const CreateImagen = () => {

    const [id_articulo, setId_Articulo] = useState(0)
    const [imagen, setImagen] = useState('')
    const navigate = useNavigate()

    const [articulos, setId_Articulos] = useState([])


    const store = async (e) => {
        e.preventDefault()
        await axios.post(endpoint, {
            id_articulo: id_articulo,
            imagen: imagen
        })
        navigate('/show_imagenes')
    }

    useEffect(() => {
        getAll();
    }, []);

    const getAll = async () => {
        const response = await axios.get(`${endpoint2}/articulos`);
        setId_Articulos(response.data);
    };


    return (
        <div>
            <h3>Crear Imagen</h3>
            <form onSubmit={store}>
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
                            <option value={`${articulo.id}`}>{articulo.nombre} {articulo.color}</option>
                        ))}
                    </select>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Imagen</label>
                    <input
                        value={imagen}
                        onChange={(e) => setImagen(e.target.value)}
                        type='text'
                        className='form'
                    />
                </div>
                <button type='submit' className='btn btn-danger'>Crear</button>
            </form>
        </div>

    )
}

export default CreateImagen