import React, { useEffect, useState } from "react";
import axios from "axios";
import { notification } from "antd";
import logo_pequeño from "../../components/logo_pequeño.png";
import { Link } from "react-router-dom";

const endpoint = "http://localhost:8000/api";

const ShowTrabajos = () => {
  const [api, contextHolder] = notification.useNotification();
  const [trabajos, setTrabajos] = useState([]);

  const alertaError = (type) => {
    api[type]({
      message: "ERROR",
      description: "Error al acceder a la base de datos",
    });
  };

  useEffect(() => {
    getAllTrabajos();
  }, []);

  const getAllTrabajos = async () => {
    try {
      const response = await axios.get(`${endpoint}/trabajos`);
      setTrabajos(response.data);
    } catch (error) {
      alertaError("error");
    }
  };

  const deleteTrabajo = async (id) => {
    try {
      await axios.delete(`${endpoint}/trabajo/${id}`);
      getAllTrabajos();
    } catch (error) {
      alertaError("error");
    }
  };

  return (
    <div className="back">
      {contextHolder}
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
