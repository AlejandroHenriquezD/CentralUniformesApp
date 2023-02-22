import { Row, Col } from "antd";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AuthService from "../../services/auth.service";
import Header from "../Header/Header";
import authHeader from "../../services/auth-header";
import "./usuario.css";

const endpoint = "http://localhost:8000/api";

const Usuario = () => {
  const userId = AuthService.userId();
  const [user, setUser] = useState("");
  const [cliente, setCliente] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    getUser();
    getCliente();
  }, []);

  const getUser = async () => {
    const response = await axios({
      url: `${endpoint}/user/${userId}`,
      method: "GET",
      headers: authHeader(),
    })
    setUser(response.data);
  };

  const getCliente = async () => {
    const response = await axios({
      url: `${endpoint}/cliente/user/${userId}`,
      method: "GET",
      headers: authHeader(),
    })
    const arrayCliente = response.data;
    setCliente(arrayCliente[0]);
  };

  const logout = async () => {
    AuthService.logout();
    navigate('/');
  }

  const navigateToEditarUsuario = () => {
    navigate("/editar");
  };

  return (
    <div>
      <Header />
      <div id="userContent">
        <h1 id="userTitle">Datos de usuario</h1>
        <Row justify="start" gutter={[0, 50]}>
          <Col span={12}>
            <div className="userData">
              <p className="userDataLabel">Nombre y apellidos</p>
              <p className="userDataContent">{user.name}</p>
            </div>
          </Col>
          <Col span={12}>
            <div className="userData">
              <p className="userDataLabel">Provincia</p>
              <p className="userDataContent">{cliente.provincia}</p>
            </div>
          </Col>
          <Col span={12}>
            <div className="userData">
              <p className="userDataLabel">DNI</p>
              <p className="userDataContent">{user.dni}</p>
            </div>
          </Col>
          <Col span={12}>
            <div className="userData">
              <p className="userDataLabel">Municipio</p>
              <p className="userDataContent">{cliente.municipio}</p>
            </div>
          </Col>
          <Col span={12}>
            <div className="userData">
              <p className="userDataLabel">Correo electrónico</p>
              <p className="userDataContent">{user.email}</p>
            </div>
          </Col>
          <Col span={12}>
            <div className="userData">
              <p className="userDataLabel">Código postal</p>
              <p className="userDataContent">{cliente.codigo_postal}</p>
            </div>
          </Col>
          <Col span={12}>
            <div className="userData">
              <p className="userDataLabel">Dirección</p>
              <p className="userDataContent">{cliente.direccion}</p>
            </div>
          </Col>
          <Col span={12}>
            <div className="userData">
              <p className="userDataLabel">Número de teléfono</p>
              <p className="userDataContent">{cliente.telefono}</p>
            </div>
          </Col>
        </Row>
        <div id="userButtonContainer">
          <button className="userLongButton" onClick={navigateToEditarUsuario}>Editar datos de usuario</button>
          <button className="userRedLongButton" onClick={logout}>Cerrar sesión</button>
        </div>
      </div>
    </div>
  );
};

export default Usuario;
