import "./Login.css";
import { useNavigate } from "react-router-dom";
import React, { useState, useRef } from "react";
import axios from "axios";
import AuthService from "../../services/auth.service";

const endpoint = "http://localhost:8000/api/login";

const Login = () => {
  const form = useRef();
  const checkBtn = useRef();

  const [error, setError] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  // const login = async (e) => {
  //   e.preventDefault();
  //   if (email.length == 0 || password.length == 0) {
  //     setError(true);
  //   } else {
  //     await axios.post(endpoint, {
  //       email: email,
  //       password: password,
  //     });
  //     navigate("/inicio");
  //   }
  // };

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

    // setMessage("");
    // setLoading(true);

    // form.current.validateAll();

    // if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(email, btoa(password)).then(
        (response) => {
          console.log(response);
          // localStorage.setItem("token", response.data.data.token);
          navigate("/inicio");
          // window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          // setLoading(false);
          setMessage(resMessage);
        }
      );
    // } else {
    //   setLoading(false);
    // }
  };

  // var rootStyle = {
  //   backgroundColor: "#7A7777",
  //   color: "white",
  //   position: "absolute",
  //   padding: "3%",
  //   top: 0,
  //   left: 0,
  //   right: 0,
  //   bottom: 0,
  // };

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
    // <div style={rootStyle}>
    //   <h1 className="tittle">Incio de Sesion</h1>
    //   <h5 class="subtittle">
    //     <i>Central de Uniformes S.L.</i>
    //   </h5>

    //   <form class="form" onSubmit={login}>
    //     <label className="form-label">Email</label>
    //     <div className="mb-3">
    //       <input
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //         class="input1"
    //         type="text"
    //       />
    //       {error && email.length <= 0 ? (
    //         <div className="lab">
    //           <label>
    //             <b>Email no puede estar vacio</b>
    //           </label>
    //         </div>
    //       ) : (
    //         ""
    //       )}
    //     </div>

    //     <label className="form-label">Contraseña</label>
    //     <div className="mb-3">
    //       <input
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //         class="input1"
    //         type="password"
    //       />
    //     </div>
    //     {error && password.length <= 0 ? (
    //       <div className="lab">
    //         <label>
    //           <b>Contraseña no puede estar vacia</b>
    //         </label>
    //       </div>
    //     ) : (
    //       ""
    //     )}

    //     <button type="submit" class="but">
    //       Iniciar Sesión
    //     </button>

    //     <h6>¿Todavía no tienes una cuenta?</h6>

    //     <button onClick={navigateToRegister} class="but">
    //       Registrate
    //     </button>
    //   </form>
    // </div>
  );
};

export default Login;
