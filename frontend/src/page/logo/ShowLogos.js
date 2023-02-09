import React, { useEffect, useState } from "react";
import axios from "axios";

import logo_pequeño from "../../components/logo_pequeño.png";

import { Link } from "react-router-dom";

import "../styles.css";

const endpoint = "http://localhost:8000/api";
const ShowLogos = () => {
  const [logos, setLogos] = useState([]);
  useEffect(() => {
    getAllLogos();
  }, []);

  const getAllLogos = async () => {
    const response = await axios.get(`${endpoint}/logos`);
    setLogos(response.data);
  };

  const deleteLogo = async (id) => {
    await axios.delete(`${endpoint}/logo/${id}`);
    getAllLogos();
  };

  return (
    <div>
      <div className="d-grip gap-2">
        <Link
          to="/create_logo"
          className="btn btn-danger btn-lg mt-2 mb-2 text-white"
        >
          Crear Logo
        </Link>
      </div>
      <img className="lg mt-2 mb-2 " src={logo_pequeño} alt="Logo" />

      <table className="table table-striped">
        <thead className="bg-success text-white">
          <tr>
            <td>Nombre</td>
            <td>Imagen</td>
            <td>Usuario</td>
            <td>Acciones</td>
          </tr>
        </thead>
        <tbody>
          {logos.map((logo) => (
            <tr key={logo.id}>
              <td> {logo.nombre} </td>
              <td>
                <img
                  className="img"
                  src={"http://localhost:8000/" + logo.img}
                  alt={logo.nombre}
                />{" "}
              </td>
              <td> {logo.user.name} </td>
              <td>
                <Link to={`/edit_logo/${logo.id}`} className="btn btn-primary">
                  Editar
                </Link>
                <button
                  onClick={() => deleteLogo(logo.id)}
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

export default ShowLogos;
