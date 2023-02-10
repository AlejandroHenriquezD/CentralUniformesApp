import Menu from "../Menu/Menu";
import "./Articulos.css";
// import { useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Header/Header";
import logo from "../logo.png";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import { Col, Row } from "antd";
import { useNavigate } from "react-router-dom";

// const Images = require.context('../../backend/public/storage/images', true);
// const foto = 'backend/public/storage/images/195906camisa_larga.jpg'

// const endpoint = "http://localhost:8000/api";
const Articulos = () => {
  // const [articulos, setArticulos] = useState([]);

  // useEffect(() => {
  //   getAllArticulos();
  // }, []);

  // const getAllArticulos = async () => {
  //   const response = await axios.get(`${endpoint}/articulos`);
  //   setArticulos(response.data);
  // };
  // const navigate = useNavigate()

  // const navigateToArticulos = () => {
  //     navigate('/articulos');
  // };

  const navigate = useNavigate();

  const navigateToArticulo = () => {
    navigate("/articulo");
  };

  return (
    <div>
      <Header />
      <div id="articulosContent">
        <Row justify="start">
          <Col span={6}>
            <div className="articulo" onClick={navigateToArticulo}>
              <div className="articuloImgContainer">
                <img src="/img/camiseta_negra.jpg" />
              </div>
              <div className="articuloData">
                <h4>Camiseta</h4>
                <h3>7€</h3>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className="articulo" onClick={navigateToArticulo}>
              <div className="articuloImgContainer">
                <img src="/img/camiseta_negra.jpg" />
              </div>
              <div className="articuloData">
                <h4>Camiseta</h4>
                <h3>7€</h3>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className="articulo" onClick={navigateToArticulo}>
              <div className="articuloImgContainer">
                <img src="/img/camiseta_negra.jpg" />
              </div>
              <div className="articuloData">
                <h4>Camiseta</h4>
                <h3>7€</h3>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className="articulo" onClick={navigateToArticulo}>
              <div className="articuloImgContainer">
                <img src="/img/camiseta_negra.jpg" />
              </div>
              <div className="articuloData">
                <h4>Camiseta</h4>
                <h3>7€</h3>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className="articulo" onClick={navigateToArticulo}>
              <div className="articuloImgContainer">
                <img src="/img/camiseta_negra.jpg" />
              </div>
              <div className="articuloData">
                <h4>Camiseta</h4>
                <h3>7€</h3>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className="articulo" onClick={navigateToArticulo}>
              <div className="articuloImgContainer">
                <img src="/img/camiseta_negra.jpg" />
              </div>
              <div className="articuloData">
                <h4>Camiseta</h4>
                <h3>7€</h3>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className="articulo" onClick={navigateToArticulo}>
              <div className="articuloImgContainer">
                <img src="/img/camiseta_negra.jpg" />
              </div>
              <div className="articuloData">
                <h4>Camiseta</h4>
                <h3>7€</h3>
              </div>
            </div>
          </Col>
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
