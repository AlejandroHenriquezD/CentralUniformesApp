import React, { useEffect, useState } from "react";
import axios from "axios";
import { notification } from "antd";
import logo_pequeño from "../../components/logo_pequeño.png";
import { Link } from "react-router-dom";
import "../styles.css";
import Menu from '../../components/menu/Menu';
import authHeader from "../../services/auth-header";

const endpoint = "http://localhost:8000/api";

const ShowLogos = () => {
  const [api, contextHolder] = notification.useNotification();
  const [logos, setLogos] = useState([]);

  const alertaError = (type) => {
    api[type]({
      message: "ERROR",
      description: "Error al acceder a la base de datos",
    });
  };

  useEffect(() => {
    getAllLogos();
  }, []);

  const getAllLogos = async () => {
    try {
      // const response = await axios.get(`${endpoint}/logos`);
      await axios({
        url: `${endpoint}/logos`,
        method: "GET",
        headers: authHeader(),
      }).then((response) => setLogos(response.data));
    } catch (error) {
      alertaError("error");
    }
  };

  const deleteLogo = async (id) => {
    try {
      // await axios.delete(`${endpoint}/logo/${id}`);
      await axios({
        url: `${endpoint}/logo/${id}`,
        method: "DELETE",
        headers: authHeader(),
      }).then(() => getAllLogos());
    } catch (error) {
      alertaError("error");
    }
  };

  return (
    <div>
      <Menu />
      {contextHolder}
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
