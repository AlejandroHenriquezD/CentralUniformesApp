import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "antd";
import AuthService from "../../services/auth.service";
import "./Register.css";

const Register = () => {
  // const form = useRef();
  // const checkBtn = useRef();
  
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

  const [error, setError] = useState("");

  const navigate = useNavigate();

  // const register = async (e) => {
  //   e.preventDefault();
  //   // eslint-disable-next-line
  //   if (
  //     name.length == 0 ||
  //     password.length == 0 ||
  //     confirm_password.length == 0 ||
  //     email.length == 0
  //   ) {
  //     setError(true);
  //   }

  //   await axios.post(endpoint2, {
  //     name: name,
  //     password: password,
  //     confirm_password: confirm_password,
  //     email: email,
  //   });

  //   navigate("/inicio");
  // };
  const handleRegister = (e) => {
    e.preventDefault(); // Evita que se recarge la página por defecto
    // setMessage("");
    // setSuccessful(false);
    // form.current.validateAll();

    // if (checkBtn.current.context._errors.length === 0) {
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
      ).then(
        (response) => {
          // setMessage(response.data.message);
          navigate("/inicio");
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          // setMessage(resMessage);
        }
      );
    // }
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
                  <input 
                    value={dni}
                    onChange={(e) => setDni(e.target.value)}
                    type="text" 
                    className="registerInput" 
                  />
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
                  <input 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password" 
                    className="registerInput" 
                  />
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
                  <input 
                    value={confirm_password}
                    onChange={(e) => setConfirm(e.target.value)}
                    type="password" 
                    className="registerInput" 
                  />
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
                  <input 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text" 
                    className="registerInput" 
                  />
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
                  <input 
                    value={provincia}
                    onChange={(e) => setProvincia(e.target.value)}
                    type="text" 
                    className="registerInput" 
                  />
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
                  <input 
                    value={codigo_postal}
                    onChange={(e) => setCodigo_postal(e.target.value)}
                    type="text" 
                    className="registerInput" 
                  />
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
                  <input 
                    value={municipio}
                    onChange={(e) => setMunicipio(e.target.value)}
                    type="text" 
                    className="registerInput" 
                  />
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
                  <input 
                    value={direccion}
                    onChange={(e) => setDireccion(e.target.value)}
                    type="text" 
                    className="registerInput" 
                  />
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
                  <input 
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    type="text" 
                    className="registerInput" 
                  />
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
                  <button type="submit" className="registerButton">
                    Registrarse
                  </button>
                  {/* <button onClick={navigateToHome} className="registerButton">
                    Registrarse
                  </button> */}
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
