import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "antd";
import "./Register.css";

const endpoint2 = "http://localhost:8000/api/register";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm] = useState("");

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    // eslint-disable-next-line
    if (
      name.length == 0 ||
      password.length == 0 ||
      confirm_password.length == 0 ||
      email.length == 0
    ) {
      setError(true);
    }

    await axios.post(endpoint2, {
      name: name,
      password: password,
      confirm_password: confirm_password,
      email: email,
    });

    navigate("/login");
  };
  const navigateToLogin = () => {
    navigate("/login");
  };

  const navigateToHome = () => {
    navigate("/inicio");
  };

  // var rootStyle = {
  //     backgroundColor: '#7A7777',
  //     color: 'white',
  //     position: 'flex',
  //     padding: '3%',
  //     top: 0,
  //     left: 0,
  //     right: 0,
  //     bottom: 0,

  // }
  return (
    <div id="registerBackground">
      <div id="registerHeader">
        <img src="/img/cu_logo.png" />
      </div>
      <div id="registerContent">
        <h3>¡Introduce tus datos para registrarte!</h3>
        <div id="formContainer">
          <form className="registerForm">
            <Row justify="start" gutter={[80, 20]}>
              <Col span={12}>
                <div className="formGroup">
                  <label className="registerLabel">Nombre y apellidos</label>

                  <input type="text" class="registerInput" />
                  {/* {error && name.length <= 0 ? (
                <div className="lab">
                  <label>
                    <b>Nombre no puede estar vacio</b>
                  </label>
                </div>
              ) : (
                ""
              )} */}
                </div>
              </Col>
              <Col span={12}>
                <div className="formGroup">
                  <label className="registerLabel">DNI</label>

                  <input type="text" className="registerInput" />
                  {/* {error && dni.length <= 0 ? (
                <div className="lab">
                  <label>
                    <b>DNI no puede estar vacío</b>
                  </label>
                </div>
              ) : (
                ""
              )} */}
                </div>
              </Col>
              <Col span={12}>
                <div className="formGroup">
                  <label className="registerLabel">Contraseña</label>

                  <input type="password" className="registerInput" />
                  {/* {error && password.length <= 0 ? (
                <div className="lab">
                  <label>
                    <b>Contraseña no puede estar vacía</b>
                  </label>
                </div>
              ) : (
                ""
              )} */}
                </div>
              </Col>
              <Col span={12}>
                <div className="formGroup">
                  <label className="registerLabel">Repita su contraseña</label>

                  <input type="password" className="registerInput" />
                  {/* {error && confirm_password.length <= 0 ? (
                <div className="lab">
                  <label>
                    <b>Repetir contraseña no puede estar vacía</b>
                  </label>
                </div>
              ) : (
                ""
              )} */}
                </div>
              </Col>
              <Col span={12}>
                <div className="formGroup">
                  <label className="registerLabel">Correo electrónico</label>

                  <input type="text" class="registerInput" />
                  {/* <{error && email.length <= 0 ? (
                <div className="lab">
                  <label>
                    <b>Correo electrónico no puede estar vacío</b>
                  </label>
                </div>
              ) : (
                ""
              )}> */}
                </div>
              </Col>
              <Col span={12}>
                <div className="formGroup">
                  <label className="registerLabel">Provincia</label>

                  <input type="text" className="registerInput" />
                  {/* {error && provincia.length <= 0 ? (
                <div className="lab">
                  <label>
                    <b>Provincia no puede estar vacía</b>
                  </label>
                </div>
              ) : (
                ""
              )} */}
                </div>
              </Col>
              <Col span={12}>
                <div className="formGroup">
                  <label className="registerLabel">Código postal</label>

                  <input type="text" class="registerInput" />
                  {/* {error && cp.length <= 0 ? (
                <div className="lab">
                  <label>
                    <b>Código postal no puede estar vacío</b>
                  </label>
                </div>
              ) : (
                ""
              )} */}
                </div>
              </Col>
              <Col span={12}>
                <div className="formGroup">
                  <label className="registerLabel">Municipio</label>

                  <input type="text" className="registerInput" />
                  {/* {error && municipio.length <= 0 ? (
                <div className="lab">
                  <label>
                    <b>Municipio no puede estar vacío</b>
                  </label>
                </div>
              ) : (
                ""
              )} */}
                </div>
              </Col>
              <Col span={12}>
                <div className="formGroup">
                  <label className="registerLabel">Dirección</label>

                  <input type="text" class="registerInput" />
                  {/* {error && direccion.length <= 0 ? (
                <div className="lab">
                  <label>
                    <b>Dirección no puede estar vacía</b>
                  </label>
                </div>
              ) : (
                ""
              )} */}
                </div>
              </Col>
              <Col span={12}>
                <div className="formGroup">
                  <label className="registerLabel">Número de teléfono</label>

                  <input type="text" className="registerInput" />
                  {/* {error && tlf.length <= 0 ? (
                <div className="lab">
                  <label>
                    <b>Número de teléfono no puede estar vacío</b>
                  </label>
                </div>
              ) : (
                ""
              )} */}
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
                  {/* <button type="submit" className="registerButton">
                    Registrarse
                  </button> */}
                  <button onClick={navigateToHome} className="registerButton">
                    Registrarse
                  </button>
                </div>
              </Col>
            </Row>
          </form>
        </div>
      </div>
    </div>
    // <div style={rootStyle}>
    //     <h1 className='tittle'>Crear Una Cuenta</h1>
    //     <h5 class="subtittle"><i>Central de Uniformes S.L.</i></h5>

    //     <form class="form" onSubmit={register}>

    //         <label className='form-label'>Nombre</label>
    //         <div className>
    //             <input
    //                 value={name}
    //                 onChange={(e) => setName(e.target.value)}
    //                 type='text'
    //                 class='registerInput' />
    //             {error&&name.length<=0?
    //             <div className='lab'>
    //                 <label><b>Nombre no puede estar vacio</b></label>
    //             </div>:""}
    //         </div>

    //         <label className='form-label'>Contraseña *</label>
    //         <div className='mb-1'>
    //             <input
    //                 value={password}
    //                 onChange={(e) => setPassword(e.target.value)}
    //                 type='password'
    //                 className='registerInput'
    //             />
    //             {error&&password.length<=0?
    //             <div className='lab'>
    //                 <label><b>Contraseña no puede estar vacia</b></label>
    //             </div>:""}
    //         </div>
    //         <label className='form-label'>Confirmar Contraseña *</label>
    //         <div className='mb-3'>
    //             <input
    //                 value={confirm_password}
    //                 onChange={(e) => setConfirm(e.target.value)}
    //                 type='password'
    //                 className='registerInput'
    //             />
    //             {error&&confirm_password.length<=0?
    //             <div className='lab'>
    //                 <label><b>Confirmar Contraseña no puede estar vacio</b></label>
    //             </div>:""}
    //         </div>

    //         <label className='form-label'>Email *</label>
    //         <div className='mb-3'>
    //             <input
    //                 value={email}
    //                 onChange={(e) => setEmail(e.target.value)}
    //                 type='text'
    //                 className='registerInput'
    //             />
    //             {error&&email.length<=0?
    //             <div className='lab'>
    //                 <label><b>Email no puede estar vacio</b></label>
    //             </div>:""}
    //         </div>

    //         <button type='submit' class="but">Crear Cuenta</button>

    //         <h6>¿Ya tienes una cuenta?</h6>

    //         <button onClick={navigateToLogin} class="but">Iniciar Sesión</button>
    //     </form>
    // </div>
  );
};

export default Register;
