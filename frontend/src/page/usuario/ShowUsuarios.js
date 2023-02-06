import React, { useEffect, useState } from "react";
import axios from "axios";
import logo_pequeño from "../../components/logo_pequeño.png";
import { Link } from "react-router-dom";

const endpoint = "http://localhost:8000/api";

const ShowUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    getAllUsuarios();
  }, []);

  const getAllUsuarios = async () => {
    const response = await axios.get(`${endpoint}/users`);
    setUsuarios(response.data);
  };

  const deleteUsuario = async (id) => {
    await axios.delete(`${endpoint}/user/${id}`);
    getAllUsuarios();
  };
  return (
    <div>
      <div className="d-grip gap-2">
        <Link
          to="/create_usuario"
          className="btn btn-danger btn-lg mt-2 mb-2 text-white"
        >
          Crear
        </Link>
      </div>
      <img className="lg mt-2 mb-2 " src={logo_pequeño} alt="Logo" />

      <table className="table table-striped">
        <thead className="bg-success text-white">
          <tr>
            <td>DNI</td>
            <td>Nombre</td>
            <td>Contraseña</td>
            <td>Email</td>
            <td>Rol</td>
            <th>Accion</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td> {usuario.dni}</td>
              <td>{usuario.name}</td>
              <td> {usuario.password}</td>
              <td> {usuario.email}</td>
              <td> {usuario.rol}</td>
              <td>
                <Link
                  to={`/edit_usuario/${usuario.id}`}
                  className="btn btn-primary"
                >
                  Editar
                </Link>
                <button
                  onClick={() => deleteUsuario(usuario.id)}
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

export default ShowUsuarios;
