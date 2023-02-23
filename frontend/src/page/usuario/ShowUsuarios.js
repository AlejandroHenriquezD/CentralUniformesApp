import React, { useEffect, useState } from "react";
import axios from "axios";
import logo_pequeño from "../../components/logo_pequeño.png";
import { Link } from "react-router-dom";
import Menu from '../../components/menu/Menu';
import authHeader from "../../services/auth-header";

const endpoint = "http://localhost:8000/api";

const ShowUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    getAllUsuarios();
  }, []);

  const getAllUsuarios = async () => {
    // const response = await axios.get(`${endpoint}/users`);
    await axios({
      url: `${endpoint}/users`,
      method: "GET",
      headers: authHeader(),
    }).then((response) => setUsuarios(response.data));
  };

  const deleteUsuario = async (id) => {
    // await axios.delete(`${endpoint}/user/${id}`);
    await axios({
      url: `${endpoint}/user/${id}`,
      method: "DELETE",
      headers: authHeader(),
    }).then(() => getAllUsuarios());
  };
  return (
    <div>
      <Menu />
      <div className="d-grip gap-2">
        <Link
          to="/create_usuario"
          className="btn btn-danger btn-lg mt-2 mb-2 text-white"
        >
          Crear Usuario
        </Link>
      </div>
      <img className="lg mt-2 mb-2 " src={logo_pequeño} alt="Logo" />

      <table className="table table-striped">
        <thead className="bg-success text-white">
          <tr>
            <td>DNI</td>
            <td>Nombre</td>
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
