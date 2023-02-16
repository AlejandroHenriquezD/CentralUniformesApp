import { Row, Col } from "antd";
import Header from "../Header/Header";
import "./usuario.css";

const Usuario = () => {
  return (
    <div>
      <Header />
      <div id="userContent">
        <h1 id="userTitle">Datos de usuario</h1>
        <Row justify="start" gutter={[0, 50]}>
          <Col span={12}>
            <div className="userData">
              <p className="userDataLabel">Nombre y apellidos</p>
              <p className="userDataContent">Prueba</p>
            </div>
          </Col>
          <Col span={12}>
            <div className="userData">
              <p className="userDataLabel">Provincia</p>
              <p className="userDataContent">Prueba</p>
            </div>
          </Col>
          <Col span={12}>
            <div className="userData">
              <p className="userDataLabel">DNI</p>
              <p className="userDataContent">Prueba</p>
            </div>
          </Col>
          <Col span={12}>
            <div className="userData">
              <p className="userDataLabel">Municipio</p>
              <p className="userDataContent">Prueba</p>
            </div>
          </Col>
          <Col span={12}>
            <div className="userData">
              <p className="userDataLabel">Correo electrónico</p>
              <p className="userDataContent">Prueba</p>
            </div>
          </Col>
          <Col span={12}>
            <div className="userData">
              <p className="userDataLabel">Código postal</p>
              <p className="userDataContent">Prueba</p>
            </div>
          </Col>
          <Col span={12}>
            <div className="userData">
              <p className="userDataLabel">Dirección</p>
              <p className="userDataContent">Prueba</p>
            </div>
          </Col>
          <Col span={12}>
            <div className="userData">
              <p className="userDataLabel">Número de teléfono</p>
              <p className="userDataContent">Prueba</p>
            </div>
          </Col>
        </Row>
        <div id="userButtonContainer">
          <button className="userLongButton">Editar datos de usuario</button>
        </div>
      </div>
    </div>
  );
};

export default Usuario;
