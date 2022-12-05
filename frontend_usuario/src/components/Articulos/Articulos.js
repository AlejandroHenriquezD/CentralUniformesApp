import Menu from '../Menu/Menu';
import './Articulos.css';
// import { useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import logo from '../logo.png';
import {Link} from 'react-router-dom'

// const Images = require.context('../../backend/public/storage/images', true);
// const foto = 'backend/public/storage/images/195906camisa_larga.jpg'

const endpoint = 'http://localhost:8000/api' 
const Articulos = () => {
    const [articulos, setArticulos] = useState([])

    useEffect(() => {
        getAllArticulos()
    }, [])


    const getAllArticulos = async () => {
        const response = await axios.get(`${endpoint}/imagenes`)
        setArticulos(response.data)
    }
    // const navigate = useNavigate()

    // const navigateToArticulos = () => {
    //     navigate('/articulos');
    // };




    return (
        <div>
            <Menu />
            {articulos.map((articulo) => (
                    <div className='articulo'>
                        <img className='img1' src={ logo } alt="Foto"></img>
                        <p>{articulo.articulo.nombre}</p>
                        <p>{articulo.articulo.precio} €</p>
                        <p>Talla {articulo.articulo.talla}</p>
                        <p>Color {articulo.articulo.color} </p>
                        <button  className='boton10'>
                            <Link to={`/add_articulo/${articulo.articulo.id}`} className='lin'>Añadir</Link>
                        </button>
                        
                        <p></p>
                    </div>
            ))}


        </div>
    )
}

export default Articulos