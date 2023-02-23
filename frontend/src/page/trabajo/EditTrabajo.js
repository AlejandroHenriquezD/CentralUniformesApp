import React, { useEffect, useState } from "react";
import axios from "axios";
import { notification } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import "../../components/form.css";

const endpoint = "http://localhost:8000/api/trabajo/";

const EditTrabajo = () => {
  const [api, contextHolder] = notification.useNotification();
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const alertaError = (type) => {
    api[type]({
      message: "ERROR",
      description: "Error al acceder a la base de datos",
    });
  };

  const update = async (e) => {
    try {
      e.preventDefault();
      if (nombre.length === 0 || descripcion.length === 0) {
        setError(true);
      } else {
        await axios.put(`${endpoint}${id}`, {
          nombre: nombre,
          descripcion: descripcion,
        });
        navigate("/show_trabajos");
      }
    } catch (error) {
      alertaError("error");
    }
  };
  useEffect(() => {
    const getTrabajoById = async () => {
      const response = await axios.get(`${endpoint}${id}`);
      setNombre(response.data.nombre);
      setDescripcion(response.data.descripcion);
    };
    getTrabajoById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {contextHolder}
      <h3>Editar Trabajo</h3>
      <form onSubmit={update}>
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

export default EditTrabajo;
