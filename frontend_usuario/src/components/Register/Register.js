import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Row, notification } from "antd";
import AuthService from "../../services/auth.service";
import "./Register.css";

const Register = () => {
  const [api, contextHolder] = notification.useNotification();
  const [name, setName] = useState("");
  const [dni, setDni] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm] = useState("");
  const [email, setEmail] = useState("");
  const [provincia, setProvincia] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [codigo_postal, setCodigo_postal] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const rol = "cliente";

  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const alertaError = (type) => {
    api[type]({
      message: "ERROR",
      description: "Error al acceder a la base de datos",
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault(); // Evita que se recarge la página por defecto
    if (
      name.length === 0 ||
      password.length === 0 ||
      confirm_password.length === 0 ||
      email.length === 0 ||
      provincia.length === 0 ||
      codigo_postal.length === 0 ||
      municipio.length === 0 ||
      direccion.length === 0 ||
      telefono.length === 0
    ) {
      setError(true);
    } else {
      AuthService.registercli(
        dni,
        btoa(name),
        email,
        rol,
        btoa(password),
        btoa(confirm_password),
        provincia,
        municipio,
        codigo_postal,
        direccion,
        telefono
      )
        .then((response) => {})
        .catch((error) => {
          if (error.response.status == 404) {
            alertaError("error");
          } else {
            navigate("/inicio");
          }
        });
    }
  };

  const navigateToLogin = () => {
    navigate("/login");
  };

  return (
    <div id="registerBackground">
      {contextHolder}
      <div id="registerHeader">
        <img src="/img/cu_logo.png" />
      </div>
      <div id="registerContent">
        <h3>¡Introduce tus datos para registrarte!</h3>
        <div id="formContainer">
          <form className="registerForm" onSubmit={handleRegister}>
            <Row justify="start" gutter={[80, 20]}>
              <Col span={12}>
                <div className="formGroup">
                  <label className="registerLabel">Nombre y apellidos</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="registerInput"
                  />
                  {error && name.length <= 0 ? (
                    <div className="errorLabel">
                      <label>
                        <b>Nombre no puede estar vacio</b>
                      </label>
                    </div>
                  ) : null}
                </div>
              </Col>
              <Col span={12}>
                <div className="formGroup">
                  <label className="registerLabel">DNI</label>
                  <input
                    value={dni}
                    onChange={(e) => setDni(e.target.value)}
                    type="text"
                    className="registerInput"
                  />
                  {error && dni.length <= 0 ? (
                    <div className="errorLabel">
                      <label>
                        <b>DNI no puede estar vacío</b>
                      </label>
                    </div>
                  ) : null}
                </div>
              </Col>
              <Col span={12}>
                <div className="formGroup">
                  <label className="registerLabel">Contraseña</label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="registerInput"
                  />
                  {error && password.length <= 0 ? (
                    <div className="errorLabel">
                      <label>
                        <b>Contraseña no puede estar vacía</b>
                      </label>
                    </div>
                  ) : null}
                </div>
              </Col>
              <Col span={12}>
                <div className="formGroup">
                  <label className="registerLabel">Repita su contraseña</label>
                  <input
                    value={confirm_password}
                    onChange={(e) => setConfirm(e.target.value)}
                    type="password"
                    className="registerInput"
                  />
                  {error && confirm_password.length <= 0 ? (
                    <div className="errorLabel">
                      <label>
                        <b>Repetir contraseña no puede estar vacía</b>
                      </label>
                    </div>
                  ) : null}
                </div>
              </Col>
              <Col span={12}>
                <div className="formGroup">
                  <label className="registerLabel">Correo electrónico</label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    className="registerInput"
                  />
                  {error && email.length <= 0 ? (
                    <div className="errorLabel">
                      <label>
                        <b>Correo electrónico no puede estar vacío</b>
                      </label>
                    </div>
                  ) : null}
                </div>
              </Col>
              <Col span={12}>
                <div className="formGroup">
                  <label className="registerLabel">Provincia</label>
                  <input
                    value={provincia}
                    onChange={(e) => setProvincia(e.target.value)}
                    type="text"
                    className="registerInput"
                  />
                  {error && provincia.length <= 0 ? (
                    <div className="errorLabel">
                      <label>
                        <b>Provincia no puede estar vacía</b>
                      </label>
                    </div>
                  ) : null}
                </div>
              </Col>
              <Col span={12}>
                <div className="formGroup">
                  <label className="registerLabel">Código postal</label>
                  <input
                    value={codigo_postal}
                    onChange={(e) => setCodigo_postal(e.target.value)}
                    type="text"
                    className="registerInput"
                  />
                  {error && codigo_postal.length <= 0 ? (
                    <div className="errorLabel">
                      <label>
                        <b>Código postal no puede estar vacío</b>
                      </label>
                    </div>
                  ) : null}
                </div>
              </Col>
              <Col span={12}>
                <div className="formGroup">
                  <label className="registerLabel">Municipio</label>
                  <input
                    value={municipio}
                    onChange={(e) => setMunicipio(e.target.value)}
                    type="text"
                    className="registerInput"
                  />
                  {error && municipio.length <= 0 ? (
                    <div className="errorLabel">
                      <label>
                        <b>Municipio no puede estar vacío</b>
                      </label>
                    </div>
                  ) : null}
                </div>
              </Col>
              <Col span={12}>
                <div className="formGroup">
                  <label className="registerLabel">Dirección</label>
                  <input
                    value={direccion}
                    onChange={(e) => setDireccion(e.target.value)}
                    type="text"
                    className="registerInput"
                  />
                  {error && direccion.length <= 0 ? (
                    <div className="errorLabel">
                      <label>
                        <b>Dirección no puede estar vacía</b>
                      </label>
                    </div>
                  ) : null}
                </div>
              </Col>
              <Col span={12}>
                <div className="formGroup">
                  <label className="registerLabel">Número de teléfono</label>
                  <input
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    type="text"
                    className="registerInput"
                  />
                  {error && telefono.length <= 0 ? (
                    <div className="errorLabel">
                      <label>
                        <b>Número de teléfono no puede estar vacío</b>
                      </label>
                    </div>
                  ) : null}
                </div>
              </Col>
              <Col span={12}>
                <div id="back">
                  <button onClick={navigateToLogin} className="registerButton">
                    Volver
                  </button>
                </div>
              </Col>
              <Col span={12}>
                <div id="register">
                  <button type="submit" className="registerButton">
                    Registrarse
                  </button>
                </div>
              </Col>
            </Row>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
