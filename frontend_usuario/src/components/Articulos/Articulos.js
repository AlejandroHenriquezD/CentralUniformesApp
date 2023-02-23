import "../componentes1.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Header/Header";
import logo from "../logo.png";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import { Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import authHeader from "../../services/auth-header";

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
    </div>
  );
};

export default Articulos;
