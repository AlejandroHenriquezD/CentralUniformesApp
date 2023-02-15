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

// const endpoint = "http://localhost:8000/api";
const Diseños = () => {
  
  const navigate = useNavigate();

  const navigateToPedido = () => {
    navigate("/pedido");
  };

  return (
    <div>
      <Header />
      <div id="itemsContent">
        <Row justify="start">
          <Col span={6}>
            <div className="item" onClick={navigateToPedido}>
              <div className="itemImgContainer">
                <img src="/img/camiseta_negra.jpg" />
              </div>
              <div className="itemData">
                <h4>Mi diseño</h4>
                <h3>7€</h3>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className="item" onClick={navigateToPedido}>
              <div className="itemImgContainer">
                <img src="/img/camiseta_negra.jpg" />
              </div>
              <div className="itemData">
                <h4>Mi diseño</h4>
                <h3>7€</h3>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className="item" onClick={navigateToPedido}>
              <div className="itemImgContainer">
                <img src="/img/camiseta_negra.jpg" />
              </div>
              <div className="itemData">
                <h4>Mi diseño</h4>
                <h3>7€</h3>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className="item" onClick={navigateToPedido}>
              <div className="itemImgContainer">
                <img src="/img/camiseta_negra.jpg" />
              </div>
              <div className="itemData">
                <h4>Mi diseño</h4>
                <h3>7€</h3>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className="item" onClick={navigateToPedido}>
              <div className="itemImgContainer">
                <img src="/img/camiseta_negra.jpg" />
              </div>
              <div className="itemData">
                <h4>Mi diseño</h4>
                <h3>7€</h3>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className="item" onClick={navigateToPedido}>
              <div className="itemImgContainer">
                <img src="/img/camiseta_negra.jpg" />
              </div>
              <div className="itemData">
                <h4>Mi diseño</h4>
                <h3>7€</h3>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className="item" onClick={navigateToPedido}>
              <div className="itemImgContainer">
                <img src="/img/camiseta_negra.jpg" />
              </div>
              <div className="itemData">
                <h4>Mi diseño</h4>
                <h3>7€</h3>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className="item">
              <div className="itemPlusContainer">
                <img src="/img/plus.png" />
              </div>
              <div className="itemData">
                <h4>Añadir logo</h4>
              </div>
            </div>
          </Col>
        </Row>
        <Footer />
      </div>
    </div>
  );
};

export default Diseños;