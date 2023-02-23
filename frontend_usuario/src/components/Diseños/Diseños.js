import "../componentes1.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import AuthService from "../../services/auth.service";
import authHeader from "../../services/auth-header";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Col, Row } from "antd";
import { useNavigate } from "react-router-dom";

const endpoint = "http://localhost:8000/api";

const Diseños = () => {
  const navigate = useNavigate();

  const userId = AuthService.userId();

  const [diseños, setDiseños] = useState([]);
  const [diseñosBase, setDiseñosBase] = useState([]);

  const querystring = window.location.search;
  let params = new URLSearchParams(querystring);
  const pedido = params.get("pedido");

  useEffect(() => {
    getEmpleados();
    getDiseñosByIdUser(userId);
  }, []);

  const getDiseñosByIdUser = async (id) => {
    const response = await axios({
      url: `${endpoint}/diseños/user/${id}`,
      method: "GET",
      headers: authHeader(),
    })
    setDiseños(response.data);
  };

  const getDiseñosBase = async (id) => {
    const response = await axios({
      url: `${endpoint}/diseños/user/${id}`,
      method: "GET",
      headers: authHeader(),
    })
    setDiseñosBase(response.data);
  };

  const getEmpleados = async () => {
    const response = await axios({
      url: `${endpoint}/empleados`,
      method: "GET",
      headers: authHeader(),
    }).then((res) => {
      res.data.forEach(empleado => getDiseñosBase(empleado.id));
    })
  }

  const getThisArticulo = (idArticulo) => {
    var request = require('sync-request');
    var res = request('GET', `${endpoint}/articulo/${idArticulo}`, {
      headers: authHeader()
    });
    return JSON.parse(res.body);
  };

  const getThisImgArticulo = (idArticulo) => {
    return "http://localhost:8000/"+getThisArticulo(idArticulo).img;
  }

  const getThisPrecioArticulo = (idArticulo) => {
    return getThisArticulo(idArticulo).precio;
  }

  const navigateToArticulos = () => {
    navigate("/articulos");
  };

  const navigateToPedido = (id_diseño, id_articulo) => {
    navigate(`/pedido/?id_diseño=${id_diseño}&id_articulo=${id_articulo}`);
  };

  return (
    <div>
      <Header />
      <div id="itemsContent">
        {pedido != null ? (
          <Row justify="start">
            {diseñosBase.map((diseño) => (
              <Col span={6}>
                <div className="item" onClick={() => navigateToPedido(diseño.id, diseño.id_articulo)}>
                  <div className="itemImgContainer">
                    <img src={getThisImgArticulo(diseño.id_articulo)} />
                  </div>
                  <div className="itemData">
                    <h4>{diseño.nombre}</h4>
                    <h3>{getThisPrecioArticulo(diseño.id_articulo)}€</h3>
                  </div>
                </div>
              </Col>
            ))}
            {diseños.map((diseño) => (
              <Col span={6}>
                <div className="item" onClick={() => navigateToPedido(diseño.id, diseño.id_articulo)}>
                  <div className="itemImgContainer">
                    <img src={getThisImgArticulo(diseño.id_articulo)} />
                  </div>
                  <div className="itemData">
                    <h4>{diseño.nombre}</h4>
                    <h3>{getThisPrecioArticulo(diseño.id_articulo)}€</h3>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        ) : (
          <Row justify="start">
            {diseños.map((diseño) => (
              <Col span={6}>
                <div className="item">
                  <div className="itemImgContainer">
                    <img src={getThisImgArticulo(diseño.id_articulo)} />
                  </div>
                  <div className="itemData">
                    <h4>{diseño.nombre}</h4>
                    <h3>{getThisPrecioArticulo(diseño.id_articulo)}€</h3>
                  </div>
                </div>
              </Col>
            ))}
            <Col span={6}>
              <div className="item" onClick={navigateToArticulos}>
                <div className="itemPlusContainer">
                  <img src="/img/plus.png" />
                </div>
                <div className="itemData">
                  <h4>Crear diseño</h4>
                </div>
              </div>
            </Col>
          </Row>
        )}
        <Footer />
      </div>
    </div>
  );
};

export default Diseños;