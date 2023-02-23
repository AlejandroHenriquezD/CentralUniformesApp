import React, { useEffect, useState } from "react";
import axios from "axios";
import { notification } from "antd";
import logo_pequeño from "../../components/logo_pequeño.png";
import { Link } from "react-router-dom";
import Menu from '../../components/menu/Menu';
import authHeader from "../../services/auth-header";

const endpoint = "http://localhost:8000/api";

const ShowPedidos = () => {
  const [api, contextHolder] = notification.useNotification();
  const [pedidos, setPedidos] = useState([]);

  const alertaError = (type) => {
    api[type]({
      message: "ERROR",
      description: "Error al acceder a la base de datos",
    });
  };

  useEffect(() => {
    getAllPedidos();
  }, []);

  const getAllPedidos = async () => {
    try {
      // const response = await axios.get(`${endpoint}/pedidos`);
      await axios({
        url: `${endpoint}/pedidos`,
        method: "GET",
        headers: authHeader(),
      }).then((response) => setPedidos(response.data));
    } catch (error) {
      alertaError("error");
    }
  };

  const deletePedido = async (id) => {
    try {
      // await axios.delete(`${endpoint}/pedido/${id}`);
      // getAllPedidos();
      await axios({
        url: `${endpoint}/pedido/${id}`,
        method: "DELETE",
        headers: authHeader(),
      }).then(() => getAllPedidos());
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
          to="/create_pedido"
          className="btn btn-danger btn-lg mt-2 mb-2 text-white"
        >
          Crear Pedido
        </Link>
      </div>
      <img className="lg mt-2 mb-2 " src={logo_pequeño} alt="Logo" />

      <table className="table table-striped">
        <thead className="bg-success text-white">
          <tr>
            <td>Fecha</td>
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
              <td> {pedido.fecha_pedido}</td>
              <td> {pedido.observaciones}</td>
              <td>{pedido.unidades}</td>
              <td> {pedido.cliente.name}</td>
              <td> {pedido.empleado.name}</td>
              <td> {pedido.trabajo.nombre}</td>
              <td> {pedido.diseño.nombre}</td>
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
