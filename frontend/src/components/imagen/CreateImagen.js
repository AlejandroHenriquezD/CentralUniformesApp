import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const endpoint = 'http://localhost:8000/api/imagen'

const CreateImagen = () => {

    const [id_articulo, setId_Articulo] = useState(0)
    const [imagen, setImagen] = useState('')
    const navigate = useNavigate()


    const store = async (e) => {
        e.preventDefault()
        await axios.post(endpoint, {
            id_articulo: id_articulo, 
            imagen: imagen})
        navigate('/show_imagenes')
    }


    return (
        <div>
            <h3>Create Imagen</h3>
            <form onSubmit={store}>
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
                    <label className='form-label'>Imagen</label>
                    <input
                        value={imagen}
                        onChange= { (e)=> setImagen(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
                <button type='submit' className='btn btn-primary'>Create</button>
            </form>
        </div>

    )
}

export default CreateImagen