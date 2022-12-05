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

    const handleChange = (file) => {
        setImagen(file[0]);
    };

    const [articulos, setId_Articulos] = useState([])


    const store = async (e) => {
        e.preventDefault()
        const fData = new FormData();

        fData.append("imagen", imagen)
        fData.append("id_articulo", id_articulo)

        axios.post(endpoint,fData)
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
            <form onSubmit={store} encType="multipart/form-data">
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
                    <label htmlFor="imagen" className='form-label'>Imagen</label>
                    <input 
                        name="imagen"
                        id="imagen"
                        type='file'
                        className='form'
                        onChange={(e) => handleChange(e.target.files)}
                    />
                </div>
                <button type='submit' onClick={store} className='btn btn-danger'>Crear</button>
            </form>
        </div>

    )
}

export default CreateImagen