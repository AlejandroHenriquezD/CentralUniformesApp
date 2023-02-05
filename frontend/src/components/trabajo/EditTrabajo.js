import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "../form.css";

const endpoint = "http://localhost:8000/api/pedido/";

const EditTrabajo = () => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();
    await axios.put(`${endpoint}${id}`, {
      nombre: nombre,
      descripcion: descripcion,
    });
    navigate("/Show_trabajos");
  };

  useEffect(() => {
    const getTrabajoById = async () => {
      const response = await axios.get(`${endpoint}${id}`);
      setNombre(response.data.nombre);
      setDescripcion(response.data.descripcion);
    };
    getTrabajoById();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
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

export default EditTrabajo;
