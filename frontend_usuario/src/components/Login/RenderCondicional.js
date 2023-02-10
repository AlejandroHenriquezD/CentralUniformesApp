import React, { Component } from "react";
import "./Login.css";

export default class RenderCondicional extends Component {
  constructor(props) {
    super(props);
    this.setShow = this.setShow.bind(this);
    this.setHide = this.setHide.bind(this);
    this.state = { show: false };
  }

  setShow() {
    this.setState({ show: true });
  }

  setHide() {
    this.setState({ show: false });
  }

  render() {
    return (
      <>
        {this.state.show ? (
          <div className="loginButtons">
            <form>
              <div className="formGroup">
                <label htmlFor="email">Correo electrónico</label>
                <input name="email" className="loginInput" type="text" />
              </div>
              <div className="formGroup">
                <label htmlFor="contraseña">Contraseña</label>
                <input
                  name="contraseña"
                  className="loginInput"
                  type="password"
                />
              </div>
            </form>
            <div id="hiddenButtons">
              <div className="loginButton" onClick={this.setHide}>
                <p>Volver</p>
              </div>
              <a className="loginButton" href="/inicio">
                <p>Iniciar sesión</p>
              </a>
            </div>
          </div>
        ) : (
          <div className="loginButtons">
            <div className="loginButton" onClick={this.setShow}>
              <p>Iniciar sesión</p>
            </div>
            <a className="loginButton" href="/register">
              <p>Registrarse</p>
            </a>
          </div>
        )}
      </>
    );
  }
}
