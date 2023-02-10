import "./Login.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import RenderCondicional from "./RenderCondicional";
import axios from "axios";

const endpoint = "http://localhost:8000/api/login";

const Login = () => {
  const [error, setError] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    // eslint-disable-next-line
    if (email.length == 0 || password.length == 0) {
      setError(true);
    } else {
      await axios.post(endpoint, {
        email: email,
        password: password,
      });
      navigate("/inicio");
    }
  };

  const navigateToRegister = () => {
    navigate("/register");
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
            {/* {show ? (
              <div className="loginButtons">
                <div></div>
              </div>
            ) : (
              <div className="loginButtons">
                <div className="loginButton">
                  <p>Iniciar sesión</p>
                </div>
                <div className="loginButton">
                  <p>Registrarse</p>
                </div>
              </div>
            )} */}
            <RenderCondicional/>
          </div>
          <div className="halfCanvas">
            <img id="imagenLogin" src="/img/imagen_login_1.jpg" />
            <div id="redFilter" />
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
