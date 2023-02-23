import React, { useEffect, useState } from "react";
import axios from "axios";
import { notification } from "antd";
import logo_pequeño from "../../components/logo_pequeño.png";
import { Link } from "react-router-dom";
import Menu from '../../components/menu/Menu';
import authHeader from "../../services/auth-header";

const endpoint = "http://localhost:8000/api";

const ShowArticulos = () => {
  const [api, contextHolder] = notification.useNotification();
  const [articulos, setArticulos] = useState([]);

  const alertaError = (type) => {
    api[type]({
      message: "ERROR",
      description: "Error al acceder a la base de datos",
    });
  };

  useEffect(() => {
    getAllArticulos();
  }, []);

  const getAllArticulos = async () => {
    try {
      // const response = await axios.get(`${endpoint}/articulos`);
      await axios({
        url: `${endpoint}/articulos`,
        method: "GET",
        headers: authHeader(),
      }).then((response) => setArticulos(response.data));
      
    } catch (error) {
      alertaError("error");
    }
  };

  const deleteArticulo = async (id) => {
    try {
      // await axios.delete(`${endpoint}/articulo/${id}`);
      await axios({
        url: `${endpoint}/articulo/${id}`,
        method: "DELETE",
        headers: authHeader(),
      }).then(() => getAllArticulos());
    } catch (error) {
      alertaError("error");
    }
  };

  return (   
    <div className="back">
      <Menu />
      {contextHolder}
      <div className="d-grip gap-2">
        <Link
          to="/create_articulo"
          className="btn btn-danger btn-lg mt-2 mb-2 text-white"
        >
          Crear Artículo
        </Link>
      </div>
      <img className="lg mt-2 mb-2 " src={logo_pequeño} alt="Logo" />
      <table className="table table-striped">
        <thead className="bg-success text-white">
          <tr>
            <td>Nombre</td>
            <td>Descripción</td>
            <td>Imagen</td>
            <td>Precio</td>
            <td>Color</td>
            <td>Talla</td>
            <td>Stock</td>
            <td>Acciones</td>
          </tr>
        </thead>
        <tbody>
          {articulos.map((articulo) => (
            <tr key={articulo.id}>
              <td> {articulo.nombre} </td>
              <td> {articulo.descripcion} </td>
              <td>
                {" "}
                <img
                  className="img"
                  src={"http://localhost:8000/" + articulo.img}
                  alt={articulo.nombre}
                />{" "}
              </td>
              <td> {articulo.precio} </td>
              <td> {articulo.color} </td>
              <td> {articulo.talla} </td>
              <td> {articulo.stock} </td>
              <td>
                <Link
                  to={`/edit_articulo/${articulo.id}`}
                  className="btn btn-primary"
                >
                  Editar
                </Link>
                <button
                  onClick={() => deleteArticulo(articulo.id)}
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

export default ShowArticulos;
