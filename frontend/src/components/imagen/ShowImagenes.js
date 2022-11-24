import React, {useEffect, useState} from 'react'
import axios from 'axios'

import {Link} from 'react-router-dom'

const endpoint = 'http://localhost:8000/api'
const ShowImagenes = () => {
    const [imagenes, setImagenes] = useState([])
    useEffect ( ()=> {
        getAllImagenes() 
    }, [])


    const getAllImagenes = async () => {
        const response = await axios.get(`${endpoint}/imagenes`)
        setImagenes(response.data)
    }

    const deleteImagen = async (id) => {
        await axios.delete(`${endpoint}/imagen/${id}`)
        getAllImagenes()
    }

    return (
        <div>
            <div className='d-grip gap-2'>
                <Link to="/create_imagen" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Create</Link>
            </div>

            <table className='table table-striped'>
                <thead className='bg-primary text-white'>
                    <tr>
                        <td>Articulo</td>
                        <td>Imagen</td>
                        <td>Acciones</td>
                    </tr>
                </thead>
                <tbody>
                    {imagenes.map( (imagen) => (
                        <tr key={imagen.id}>
                            <td> {imagen.id_articulo} </td>
                            <td> {imagen.imagen} </td>
                            <td>
                                <Link to={`/edit_imagen/${imagen.id}`} className='btn btn-warning'>Edit</Link>
                                <button onClick={ ()=>deleteImagen(imagen.id)} className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                    )) }
                </tbody>
            </table>
        </div>
    )
}

export default ShowImagenes