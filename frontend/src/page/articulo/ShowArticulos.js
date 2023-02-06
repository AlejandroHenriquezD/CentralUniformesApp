import React, { useEffect, useState } from "react";
import axios from "axios";
import logo_pequeño from "../../components/logo_pequeño.png";
import { Link } from "react-router-dom";

const endpoint = "http://localhost:8000/api";

const ShowArticulos = () => {
  const [articulos, setArticulos] = useState([]);

  useEffect(() => {
    getAllArticulos();
  }, []);

  const getAllArticulos = async () => {
    const response = await axios.get(`${endpoint}/articulos`);
    setArticulos(response.data);
  };

  const deleteArticulo = async (id) => {
    await axios.delete(`${endpoint}/articulo/${id}`);
    getAllArticulos();
  };

  return (
    <div className="back">
      <div className="d-grip gap-2">
        <Link
          to="/create_articulo"
          className="btn btn-danger btn-lg mt-2 mb-2 text-white"
        >
          Crear
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
              <td> {articulo.img} </td>
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
