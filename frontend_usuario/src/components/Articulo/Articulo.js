import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from '../Header/Header';
import authHeader from "../../services/auth-header";
import "./articulo.css";
import "../componentes2.css";

const endpoint = "http://localhost:8000/api";

const Articulo = () => {
  const navigate = useNavigate();

  const [articulo, setArticulo] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getArticuloById();
  }, []);

  const getArticuloById = async () => {
    const response = await axios({
      url: `${endpoint}/articulo/${id}`,
      method: "GET",
      headers: authHeader(),
    })
    setArticulo(response.data);
  };

  const navigateToArticulos = () => {
    navigate("/articulos");
  }

  const navigateToDiseño = () => {
    navigate(`/diseño/?id_articulo=${id}`);
  }

  return(
    <div>
      <Header/>
      <div id="content">
        <div className="halfContent">
          <div id="imgCanvas">
            <img id="imgOnCanvas" src={"http://localhost:8000/"+articulo.img} />
          </div>
        </div>
        <div className="halfContent">
          <div id="dataCanvas">
            <div id="nameAndPrice">
              <h1 id="articuloName">{articulo.nombre}</h1>
              <h1 id="articuloPrice">{articulo.precio}€</h1>
            </div>
            <div id="articuloDescription">
              <h3>Descripción del artículo:</h3>
              <h4>{articulo.descripcion}</h4>
            </div>
            <div className="otherArticulo">
              <h3>Talla: </h3>
              <h3 className="otherArticuloData">{articulo.talla}</h3>
            </div>
            <div className="otherArticulo">
              <h3>Color: </h3>
              <h3 className="otherArticuloData">{articulo.color}</h3>
            </div>
            <div id="lastButtons">
              <button className="longButton" onClick={navigateToArticulos}>Volver</button>
              <button className="longButton" onClick={navigateToDiseño}>Seleccionar prenda</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Articulo;