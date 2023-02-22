import Menu from "../Menu/Menu";
import "../componentes1.css";
// import { useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Header/Header";
import logo from "../logo.png";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import { Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import authHeader from "../../services/auth-header";

// const Images = require.context('../../backend/public/storage/images', true);
// const foto = 'backend/public/storage/images/195906camisa_larga.jpg'

const endpoint = "http://localhost:8000/api";

const Articulos = () => {
  const [articulos, setArticulos] = useState([]);

  useEffect(() => {
    getAllArticulos();
  }, []);

  const getAllArticulos = async () => {
    const response = await axios({
      url: `${endpoint}/articulos`,
      method: "GET",
      headers: authHeader(),
    })
    setArticulos(response.data);
  };

  const navigate = useNavigate();

  const navigateToArticulo = (id) => {
    navigate(`/articulo/${id}`);
  };

  return (
    <div>
      <Header />
      <div id="itemsContent">
        <Row justify="start">
          {articulos.map((articulo) => (
          <Col span={6}>
            <div className="item" onClick={() => navigateToArticulo(articulo.id)}>
              <div className="itemImgContainer">
                <img src={"http://localhost:8000/"+articulo.img} alt=""/>
              </div>
              <div className="itemData">
                <h4>{articulo.nombre}</h4>
                <h3>{articulo.precio}€</h3>
              </div>
            </div>
          </Col>
          ))}
        </Row>
        <Footer />
      </div>
      {/* <Menu />
      {articulos.map((articulo) => (
        <div className="articulo">
          <img className="img1" src={logo} alt="Foto"></img>
          <p>{articulo.nombre}</p>
          <p>{articulo.precio} €</p>
          <p>Talla {articulo.talla}</p>
          <p>Color {articulo.color} </p>
          <button className="boton10">
            <Link to={`/add_articulo/${articulo.id}`} className="lin">
              Añadir
            </Link>
          </button>

          <p></p>
        </div> */}
      {/* ))} */}
    </div>
  );
};

export default Articulos;
