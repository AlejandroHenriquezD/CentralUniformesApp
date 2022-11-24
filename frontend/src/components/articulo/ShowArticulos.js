import React, {useEffect, useState} from 'react'
import axios from 'axios'

import {Link} from 'react-router-dom'

const endpoint = 'http://localhost:8000/api'
const ShowArticulos = () => {
    const [articulos, setArticulos] = useState([])
    useEffect ( ()=> {
        getAllArticulos() 
    }, [])


    const getAllArticulos = async () => {
        const response = await axios.get(`${endpoint}/articulos`)
        setArticulos(response.data)
    }

    const deleteArticulo = async (id) => {
        await axios.delete(`${endpoint}/articulo/${id}`)
        getAllArticulos()
    }

    return (
        <div>
            <div className='d-grip gap-2'>
                <Link to="/create_articulo" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Create</Link>
            </div>

            <table className='table table-striped'>
                <thead className='bg-primary text-white'>
                    <tr>
                        <td>Nombre</td>
                        <td>Talla</td>
                        <td>Color</td>
                        <td>Acciones</td>
                    </tr>
                </thead>
                <tbody>
                    {articulos.map( (articulo) => (
                        <tr key={articulo.id}>
                            <td> {articulo.nombre} </td>
                            <td> {articulo.talla} </td>
                            <td> {articulo.color} </td>
                            <td>
                                <Link to={`/edit_articulo/${articulo.id}`} className='btn btn-warning'>Edit</Link>
                                <button onClick={ ()=>deleteArticulo(articulo.id)} className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                    )) }
                </tbody>
            </table>
        </div>
    )
}

export default ShowArticulos