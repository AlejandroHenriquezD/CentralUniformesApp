import React, { useState } from "react";
import axios from "axios";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";
import "../../components/form.css";
import Menu from '../../components/menu/Menu';
import authHeader from "../../services/auth-header";

const endpoint = "http://localhost:8000/api/trabajo";

const CreateTrabajo = () => {
  const [api, contextHolder] = notification.useNotification();
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
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
      if (nombre.length === 0 || descripcion.length === 0) {
        setError(true);
      } else {
        // await axios.post(endpoint, {
        //   nombre: nombre,
        //   descripcion: descripcion,
        // });
        await axios({
          url: `${endpoint}`,
          method: "POST",
          headers: authHeader(),
          data: {
            nombre: nombre,
            descripcion: descripcion,
          }
        }).then(() => navigate("/show_trabajos"));
      }
    } catch (error) {
      alertaError("error");
    }
  };

  return (
    <div>
      <Menu />
      {contextHolder}
      <h3>Crear Trabajo</h3>
      <form onSubmit={store}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            type="text"
            className="form"
          />
          {error && nombre.length === 0 ? (
            <label className="label">El nombre es obligatorio.</label>
          ) : (
            ""
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Descripcion</label>
          <input
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            type="text"
            className="form"
          />
          {error && descripcion.length === 0 ? (
            <label className="label">La descripcion es obligatoria.</label>
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

export default CreateTrabajo;
