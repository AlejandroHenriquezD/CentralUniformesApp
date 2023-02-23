import React, { useState } from "react";
import axios from "axios";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";
import "../../components/form.css";
import Menu from '../../components/menu/Menu';
import authHeader from "../../services/auth-header";

const endpoint = "http://localhost:8000/api/register";

const CreateUsuario = () => {
  const [api, contextHolder] = notification.useNotification();
  const [dni, setDni] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [confirm_password, setConfirm_Password] = useState();
  const [email, setEmail] = useState();
  const [rol, setRol] = useState();
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const alertaError = (type) => {
    api[type]({
      message: "ERROR",
      description: "Error al acceder a la base de datos",
    });
  };

  const store = async (e) => {
    try {
      e.preventDefault();
      if (
        dni.length === 0 ||
        name.length === 0 ||
        password.length === 0 ||
        confirm_password != password ||
        email.length === 0 ||
        rol.length === 0
      ) {
        setError(true);
      } else {
        // await axios.post(endpoint, {
        //   dni: dni,
        //   name: btoa(name),
        //   password: btoa(password),
        //   confirm_password: btoa(confirm_password),
        //   email: email,
        //   rol: rol,
        // });
        await axios({
          url: `${endpoint}`,
          method: "POST",
          headers: authHeader(),
          data: {
            dni: dni,
            name: btoa(name),
            password: btoa(password),
            confirm_password: btoa(confirm_password),
            email: email,
            rol: rol,
          }
        }).then(() => navigate("/show_usuarios"));
      }
    } catch (error) {
      alertaError("error");
      console.log(dni);
    }
  };

  return (
    <div>
      <Menu />
      {contextHolder}
      <h3>Crear Usuario</h3>
      <form onSubmit={store}>
        <div className="mb-3">
          <label className="form-label">DNI</label>
          <input
            value={dni}
            onChange={(e) => setDni(e.target.value)}
            type="text"
            className="form"
          />
          {error && dni.length === 0 ? (
            <label className="label">El DNI es obligatorio.</label>
          ) : (
            ""
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form"
          />
          {error && name.length === 0 ? (
            <label className="label">El nombre es obligatorio.</label>
          ) : (
            ""
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="new-password"
            className="form"
          />
          {error && password.length === 0 ? (
            <label className="label">La contraseña es obligatoria.</label>
          ) : (
            ""
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Confirmar contraseña</label>
          <input
            value={confirm_password}
            onChange={(e) => setConfirm_Password(e.target.value)}
            type="current-password"
            className="form"
          />
          {error && confirm_password != password ? (
            <label className="label">
              Las contraseña no coinciden o no son válidas.
            </label>
          ) : (
            ""
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className="form"
          />
          {error && email.length === 0 ? (
            <label className="label">El email es obligatorio.</label>
          ) : (
            ""
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Rol</label>
          <select
            value={rol}
            onChange={(e) => {
              setRol(e.target.value);
            }}
            className="form"
          >
            <option value="" />
            <option value="Cliente">Cliente</option>
            <option value="Empleado">Empleado</option>
            <option value="Encargado">Encargado</option>
          </select>
          {error && rol.length === 0 ? (
            <label className="label">El rol es obligatorio.</label>
          ) : (
            ""
          )}
        </div>
        <button type="submit" className="btn btn-danger">
          Crear
        </button>
      </form>
    </div>
  );
};

export default CreateUsuario;
