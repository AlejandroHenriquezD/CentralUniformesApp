import React, { useEffect, useState } from "react";
import axios from "axios";
import { notification } from "antd";
import logo_pequeño from "../../components/logo_pequeño.png";
import { Link } from "react-router-dom";

const endpoint = "http://localhost:8000/api";

const ShowDiseños = () => {
  const [api, contextHolder] = notification.useNotification();
  const [diseños, setDiseños] = useState([]);

  const alertaError = (type) => {
    api[type]({
      message: "ERROR",
      description: "Error al acceder a la base de datos",
    });
  };

  useEffect(() => {
    getAllDiseños();
  }, []);

  const getAllDiseños = async () => {
    try {
      const response = await axios.get(`${endpoint}/diseños`);
      setDiseños(response.data);
    } catch (error) {
      alertaError("error");
    }
  };

  const deleteDiseño = async (id) => {
    try {
      await axios.delete(`${endpoint}/diseño/${id}`);
      getAllDiseños();
    } catch (error) {
      alertaError("error");
    }
  };

  return (
    <div>
      {contextHolder}
      <div className="d-grip gap-2">
        <Link
          to="/create_diseño"
          className="btn btn-danger btn-lg mt-2 mb-2 text-white"
        >
          Crear Diseño
        </Link>
      </div>
      <img className="lg mt-2 mb-2 " src={logo_pequeño} alt="Logo" />

      <table className="table table-striped">
        <thead className="bg-success text-white">
          <tr>
            <td>Nombre</td>
            <td>Posición</td>
            <td>Tamaño</td>
            <td>Favorito</td>
            <td>Usuario</td>
            <td>Logo</td>
            <td>Artículo</td>
            <th>Accion</th>
          </tr>
        </thead>
        <tbody>
          {diseños.map((diseño) => (
            <tr key={diseño.id}>
              <td> {diseño.nombre}</td>
              <td>{diseño.posicion}</td>
              <td>{diseño.tamaño}</td>
              <td>{diseño.favorito}</td>
              <td> {diseño.user.name}</td>
              <td>
                {" "}
                <img
                  className="img"
                  src={"http://localhost:8000/" + diseño.logo.img}
                  alt={diseño.nombre}
                />{" "}
              </td>
              <td>
                {" "}
                <img
                  className="img"
                  src={"http://localhost:8000/" + diseño.articulo.img}
                  alt={diseño.nombre}
                />
              </td>
              <td>
                <Link
                  to={`/edit_diseño/${diseño.id}`}
                  className="btn btn-primary"
                >
                  Editar
                </Link>
                <button
                  onClick={() => deleteDiseño(diseño.id)}
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

export default ShowDiseños;
