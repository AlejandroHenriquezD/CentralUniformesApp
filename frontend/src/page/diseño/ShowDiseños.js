import React, { useEffect, useState } from "react";
import axios from "axios";
import logo_pequeño from "../../components/logo_pequeño.png";
import { Link } from "react-router-dom";

const endpoint = "http://localhost:8000/api";

const ShowDiseños = () => {
  const [diseños, setDiseños] = useState([]);
  useEffect(() => {
    getAllDiseños();
  }, []);

  const getAllDiseños = async () => {
    const response = await axios.get(`${endpoint}/diseños`);
    setDiseños(response.data);
  };

  const deleteDiseño = async (id) => {
    await axios.delete(`${endpoint}/diseño/${id}`);
    getAllDiseños();
  };

  return (
    <div>
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
            <td>Imagen</td>
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
              <td>
                <img
                  className="img"
                  src={"http://localhost:8000/" + diseño.img}
                  alt={diseño.nombre}
                />
              </td>
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
