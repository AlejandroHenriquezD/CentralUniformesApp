import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "antd";
import axios from "axios";
import Header from "../Header/Header";
import AuthService from "../../services/auth.service";
import authHeader from "../../services/auth-header";
import "./editarUsuario.css";

const endpoint = "http://localhost:8000/api";

const EditarUsuario = () => {
  const navigate = useNavigate();

  const userId = AuthService.userId();

  const [name, setName] = useState("");
  const [dni, setDni] = useState("");
  const [email, setEmail] = useState("");
  const [rol, setRol] = useState("");
  const [provincia, setProvincia] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [codigo_postal, setCodigo_postal] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [id_user, setId_user] = useState("");

  const [id_cliente, setId_cliente] = useState("");

  useEffect(() => {
    getUser();
    getCliente();
  }, []);

  const navigateToUsuario = () => {
    navigate("/usuario");
  };

  const getUser = async () => {
    const response = await axios({
      url: `${endpoint}/user/${userId}`,
      method: "GET",
      headers: authHeader(),
    })
    setName(response.data.name);
    setDni(response.data.dni);
    setEmail(response.data.email);
    setRol(response.data.rol);
  };

  const getCliente = async () => {
    const response = await axios({
      url: `${endpoint}/cliente/user/${userId}`,
      method: "GET",
      headers: authHeader(),
    })
    const arrayCliente = response.data;
    setId_cliente(arrayCliente[0].id)
    setProvincia(arrayCliente[0].provincia);
    setMunicipio(arrayCliente[0].municipio);
    setCodigo_postal(arrayCliente[0].codigo_postal);
    setDireccion(arrayCliente[0].direccion);
    setTelefono(arrayCliente[0].telefono);
    setId_user(arrayCliente[0].id_user)
  };

  const updateUser = (e) => {
    e.preventDefault();
    axios({
      url: `${endpoint}/user/${userId}`,
      method: "PUT",
      headers: authHeader(),
      data: {
        name: btoa(name),
        dni,
        email,
        rol
      }
    })
    axios({
      url: `${endpoint}/cliente/${id_cliente}`,
      method: "PUT",
      headers: authHeader(),
      data: {
        provincia,
        municipio,
        codigo_postal,
        direccion,
        telefono,
        id_user
      }
    }).then((res) => { navigate("/usuario") });
  }

  return (
    <div>
      <Header />
      <div id="editarContent">
        <h3>Modifica tus datos de usuario</h3>
        <div id="editarFormContainer">
          <form className="registerForm" onSubmit={updateUser}>
            <Row justify="start" gutter={[80, 20]}>
              <Col span={12}>
                <div className="editarFormGroup">
                  <label className="editarLabel">Nombre y apellidos</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="editarInput"
                  />
                </div>
              </Col>
              <Col span={12}>
                <div className="editarFormGroup">
                  <label className="editarLabel">DNI</label>
                  <input
                    value={dni}
                    onChange={(e) => setDni(e.target.value)}
                    type="text"
                    className="editarInput"
                  />
                </div>
              </Col>
              <Col span={12}>
                <div className="editarFormGroup">
                  <label className="editarLabel">Correo electrónico</label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    className="editarInput"
                  />
                </div>
              </Col>
              <Col span={12}>
                <div className="editarFormGroup">
                  <label className="editarLabel">Provincia</label>
                  <input
                    value={provincia}
                    onChange={(e) => setProvincia(e.target.value)}
                    type="text"
                    className="editarInput"
                  />
                </div>
              </Col>
              <Col span={12}>
                <div className="editarFormGroup">
                  <label className="editarLabel">Código postal</label>
                  <input
                    value={codigo_postal}
                    onChange={(e) => setCodigo_postal(e.target.value)}
                    type="text"
                    className="editarInput"
                  />
                </div>
              </Col>
              <Col span={12}>
                <div className="editarFormGroup">
                  <label className="editarLabel">Municipio</label>
                  <input
                    value={municipio}
                    onChange={(e) => setMunicipio(e.target.value)}
                    type="text"
                    className="editarInput"
                  />
                </div>
              </Col>
              <Col span={12}>
                <div className="editarFormGroup">
                  <label className="editarLabel">Dirección</label>
                  <input
                    value={direccion}
                    onChange={(e) => setDireccion(e.target.value)}
                    type="text"
                    className="editarInput"
                  />
                </div>
              </Col>
              <Col span={12}>
                <div className="editarFormGroup">
                  <label className="editarLabel">Número de teléfono</label>
                  <input
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    type="text"
                    className="editarInput"
                  />
                </div>
              </Col>
              <Col span={12}>
                <div id="back">
                  <button onClick={navigateToUsuario} className="registerButton">
                    Volver
                  </button>
                </div>
              </Col>
              <Col span={12}>
                <div id="register">
                  <button type="submit" className="registerButton">
                    Guardar
                  </button>
                </div>
              </Col>
            </Row>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditarUsuario;