import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Col, Row } from "antd";
import "../componentes1.css";

const Logos = () => {
  const navigate = useNavigate();

  const navigateToDiseño = () => {
    navigate("/diseño");
  };

  return (
    <>
      <Header/>
      <div id="itemsContent">
        <Row justify="start">
          <Col span={6}>
            <div className="item" onClick={navigateToDiseño}>
              <div className="itemImgContainer">
                <img src="/img/camiseta_negra.jpg" />
              </div>
              <div className="itemData">
                <h4>Camiseta</h4>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className="item" onClick={navigateToDiseño}>
              <div className="itemImgContainer">
                <img src="/img/camiseta_negra.jpg" />
              </div>
              <div className="itemData">
                <h4>Camiseta</h4>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className="item" onClick={navigateToDiseño}>
              <div className="itemImgContainer">
                <img src="/img/camiseta_negra.jpg" />
              </div>
              <div className="itemData">
                <h4>Camiseta</h4>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className="item" onClick={navigateToDiseño}>
              <div className="itemImgContainer">
                <img src="/img/camiseta_negra.jpg" />
              </div>
              <div className="itemData">
                <h4>Camiseta</h4>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className="item" onClick={navigateToDiseño}>
              <div className="itemImgContainer">
                <img src="/img/camiseta_negra.jpg" />
              </div>
              <div className="itemData">
                <h4>Camiseta</h4>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className="item" onClick={navigateToDiseño}>
              <div className="itemImgContainer">
                <img src="/img/camiseta_negra.jpg" />
              </div>
              <div className="itemData">
                <h4>Camiseta</h4>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className="item" onClick={navigateToDiseño}>
              <div className="itemImgContainer">
                <img src="/img/camiseta_negra.jpg" />
              </div>
              <div className="itemData">
                <h4>Camiseta</h4>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className="item" onClick={navigateToDiseño}>
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
    </>
  )
}

export default Logos;