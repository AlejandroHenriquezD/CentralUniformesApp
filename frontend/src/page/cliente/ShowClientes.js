import React, { useEffect, useState } from "react";
import axios from "axios";
import logo_pequeño from "../../components/logo_pequeño.png";

import { Link } from "react-router-dom";

const endpoint = "http://localhost:8000/api";
const ShowClientes = () => {
  const [clientes, setClientes] = useState([]);
  useEffect(() => {
    getAllClientes();
  }, []);

  const getAllClientes = async () => {
    const response = await axios.get(`${endpoint}/clientes`);
    setClientes(response.data);
  };

  const deleteCliente = async (id) => {
    await axios.delete(`${endpoint}/cliente/${id}`);
    getAllClientes();
  };

  return (
    <div>
      <div className="d-grip gap-2">
        <Link
          to="/create_cliente"
          className="btn btn-danger btn-lg mt-2 mb-2 text-white"
        >
          Crear
        </Link>
      </div>
      <img className="lg mt-2 mb-2 " src={logo_pequeño} alt="Logo" />

      <table className="table table-striped">
        <thead className="bg-success text-white">
          <tr>
            <td>Provincia</td>
            <td>Código postal</td>
            <td>Municipio</td>
            <td>Dirección</td>
            <td>Teléfono</td>
            <td>Observaciones</td>
            <td>Usuario</td>
            <td>Acciones</td>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <tr key={cliente.id}>
              <td> {cliente.provincia} </td>
              <td> {cliente.codigo_postal} </td>
              <td> {cliente.municipio} </td>
              <td> {cliente.direccion} </td>
              <td> {cliente.telefono} </td>
              <td> {cliente.observaciones} </td>
              <td> {cliente.id_user.name} </td>
              <td>
                <Link
                  to={`/edit_cliente/${cliente.id}`}
                  className="btn btn-primary"
                >
                  Editar
                </Link>
                <button
                  onClick={() => deleteCliente(cliente.id)}
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

export default ShowClientes;
