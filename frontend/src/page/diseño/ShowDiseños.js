import React, { useEffect, useState } from "react";
import axios from "axios";
import logo_pequeño from "../../components/logo_pequeño.png";
import { Link } from "react-router-dom";

const endpoint = "http://localhost:8000/api";

const ShowPedidos = () => {
  const [pedidos, setPedidos] = useState([]);
  useEffect(() => {
    getAllPedidos();
  }, []);

  const getAllPedidos = async () => {
    const response = await axios.get(`${endpoint}/pedidos`);
    setPedidos(response.data);
  };

  const deletePedido = async (id) => {
    await axios.delete(`${endpoint}/pedido/${id}`);
    getAllPedidos();
  };

  return (
    <div>
      <div className="d-grip gap-2">
        <Link
          to="/create_pedido"
          className="btn btn-danger btn-lg mt-2 mb-2 text-white"
        >
          Crear
        </Link>
      </div>
      <img className="lg mt-2 mb-2 " src={logo_pequeño} alt="Logo" />

      <table className="table table-striped">
        <thead className="bg-success text-white">
          <tr>
            <td>Observaciones</td>
            <td>Unidades</td>
            <td>Cliente</td>
            <td>Empleado</td>
            <td>Trabajo</td>
            <td>Diseño</td>
            <th>Accion</th>
          </tr>
        </thead>
        <tbody>
          {pedidos.map((pedido) => (
            <tr key={pedido.id}>
              <td> {pedido.observaciones}</td>
              <td>{pedido.unidades}</td>
              <td> {pedido.id_cliente.name}</td>
              <td> {pedido.id_empleado.name}</td>
              <td> {pedido.id_trabajo.nombre}</td>
              <td> {pedido.id_diseño.nombre}</td>
              <td>
                <Link
                  to={`/edit_pedido/${pedido.id}`}
                  className="btn btn-primary"
                >
                  Editar
                </Link>
                <button
                  onClick={() => deletePedido(pedido.id)}
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

export default ShowPedidos;
