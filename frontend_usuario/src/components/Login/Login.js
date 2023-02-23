import "./Login.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import AuthService from "../../services/auth.service";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const navigateToRegister = () => {
    navigate("/register");
  };

  function changeLoginContent() {
    if (show === false) {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  const handleLogin = (e) => {
    e.preventDefault();
    AuthService.login(email, btoa(password)).then(
      (response) => {
        navigate("/inicio");
      }
    );
  };
  return (
    <div id="loginBackground">
      <div id="loginPage">
        <div id="loginCanvas">
          <div className="halfCanvas">
            <div id="redSquare" />
            <div id="greenSquare" />
            <div id="logo">
              <img src="/img/cu_logo.png" />
            </div>
            {show ? (
              <div className="loginButtons">
                <form>
                  <div className="formGroup">
                    <label htmlFor="email">Correo electrónico</label>
                    <input
                      name="email"
                      className="loginInput"
                      type="text"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="formGroup">
                    <label htmlFor="contraseña">Contraseña</label>
                    <input
                      name="contraseña"
                      className="loginInput"
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </form>
                <div id="hiddenButtons">
                  <button className="loginButton" onClick={changeLoginContent}>
                    Volver
                  </button>
                  <button className="loginButton" onClick={handleLogin}>Iniciar sesión</button>
                </div>
              </div>
            ) : (
              <div className="loginButtons">
                <button className="loginButton" onClick={changeLoginContent}>
                  Iniciar sesión
                </button>
                <button className="loginButton" onClick={navigateToRegister}>
                  Registrarse
                </button>
              </div>
            )}
          </div>
          <div className="halfCanvas">
            <img id="imagenLogin" src="/img/imagen_login_1.jpg" />
            <div className="redFilter" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
