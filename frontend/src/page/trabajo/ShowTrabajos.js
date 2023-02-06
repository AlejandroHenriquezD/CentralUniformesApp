import React, { useEffect, useState } from "react";
import axios from "axios";
import logo_pequeño from "../../components/logo_pequeño.png";
import { Link } from "react-router-dom";

const endpoint = "http://localhost:8000/api";

const ShowTrabajos = () => {
  const [trabajos, setTrabajos] = useState([]);

  useEffect(() => {
    getAllTrabajos();
  }, []);

  const getAllTrabajos = async () => {
    const response = await axios.get(`${endpoint}/trabajos`);
    setTrabajos(response.data);
  };

  const deleteTrabajo = async (id) => {
    await axios.delete(`${endpoint}/trabajo/${id}`);
    getAllTrabajos();
  };

  return (
    <div className="back">
      <div className="d-grip gap-2">
        <Link
          to="/create_trabajo"
          className="btn btn-danger btn-lg mt-2 mb-2 text-white"
        >
          Crear Trabajo
        </Link>
      </div>
      <img className="lg mt-2 mb-2 " src={logo_pequeño} alt="Logo" />

      <table className="table table-striped">
        <thead className="bg-success text-white">
          <tr>
            <td>Nombre</td>
            <td>Descripción</td>
            <td>Acciones</td>
          </tr>
        </thead>
        <tbody>
          {trabajos.map((trabajo) => (
            <tr key={trabajo.id}>
              <td> {trabajo.nombre} </td>
              <td> {trabajo.descripcion} </td>
              <td>
                <Link
                  to={`/edit_trabajo/${trabajo.id}`}
                  className="btn btn-primary"
                >
                  Editar
                </Link>
                <button
                  onClick={() => deleteTrabajo(trabajo.id)}
                  className="boton danger"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowTrabajos;
