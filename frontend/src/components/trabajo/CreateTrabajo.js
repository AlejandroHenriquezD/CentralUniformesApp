import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../form.css";

const endpoint = "http://localhost:8000/api/trabajo";

const CreateTrabajo = () => {
  const [nombre, setNombre] = useState();
  const [descripcion, setDescripcion] = useState();
  const navigate = useNavigate();

  const store = async (e) => {
    e.preventDefault();
    await axios.post(endpoint, {
      nombre: nombre,
      descripcion: descripcion,
    });
    navigate("/show_trabajos");
  };

  return (
    <div>
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
        </div>
        <div className="mb-3">
          <label className="form-label">Descripción</label>
          <input
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            type="text"
            className="form"
          />
        </div>
        <button type="submit" className="btn btn-danger">
          Crear
        </button>
      </form>
    </div>
  );
};

export default CreateTrabajo;
