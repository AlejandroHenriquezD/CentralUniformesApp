import React, { useEffect, useState } from "react";
import axios from "axios";
import { notification } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import "../../components/form.css";

const endpoint = "http://localhost:8000/api/pedido/";
const endpoint2 = "http://localhost:8000/api";

const EditPedido = () => {
  const [api, contextHolder] = notification.useNotification();
  const [observaciones, setObservaciones] = useState("");
  const [unidades, setUnidades] = useState(0);
  const [id_cliente, setId_Cliente] = useState(0);
  const [id_empleado, setId_Empleado] = useState(0);
  const [id_trabajo, setId_Trabajo] = useState(0);
  const [id_diseño, setId_Diseño] = useState(0);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const [clientes, setClientes] = useState([]);
  const [empleados, setEmpleados] = useState([]);
  const [trabajos, setTrabajos] = useState([]);
  const [diseños, setDiseños] = useState([]);

  const alertaError = (type) => {
    api[type]({
      message: "ERROR",
      description: "Error al acceder a la base de datos",
    });
  };

  const update = async (e) => {
    try {
      e.preventDefault();
      if (
        unidades.length === 0 ||
        id_cliente.length === 0 ||
        id_empleado.length === 0 ||
        id_trabajo.length === 0 ||
        id_diseño.length === 0
      ) {
        setError(true);
      } else {
        await axios.put(`${endpoint}${id}`, {
          observaciones: observaciones,
          unidades: unidades,
          id_cliente: id_cliente,
          id_empleado: id_empleado,
          id_trabajo: id_trabajo,
          id_diseño: id_diseño,
        });
        navigate("/show_pedidos");
      }
    } catch (error) {
      alertaError("error");
    }
  };

  useEffect(() => {
    const getPedidoById = async () => {
      try {
        const response = await axios.get(`${endpoint}${id}`);
        setObservaciones(response.data.observaciones);
        setUnidades(response.data.unidades);
        setId_Cliente(response.data.id_cliente);
        setId_Empleado(response.data.id_empleado);
        setId_Trabajo(response.data.id_trabajo);
        setId_Diseño(response.data.id_diseño);
        getAll();
      } catch (error) {
        alertaError("error");
      }
    };

    const getAll = async () => {
      try {
        const response = await axios.get(`${endpoint2}/clients`);
        const response2 = await axios.get(`${endpoint2}/empleados`);
        const response3 = await axios.get(`${endpoint2}/trabajos`);
        const response4 = await axios.get(`${endpoint2}/diseños`);
        setClientes(response.data);
        setEmpleados(response2.data);
        setTrabajos(response3.data);
        setDiseños(response4.data);
      } catch (error) {
        alertaError("error");
      }
    };
    getPedidoById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      {contextHolder}
      <h3>Editar Pedido</h3>
      <form onSubmit={update}>
        <div className="mb-3">
          <label className="form-label">Observaciones</label>
          <input
            value={observaciones}
            onChange={(e) => setObservaciones(e.target.value)}
            type="text"
            className="form"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Unidades</label>
          <input
            value={unidades}
            onChange={(e) => setUnidades(e.target.value)}
            type="number"
            className="form"
            min={1}
          />
          {error && unidades.length === 0 ? (
            <label className="label">Las unidades son obligatorias.</label>
          ) : (
            ""
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Cliente</label>
          <select
            value={id_cliente}
            onChange={(e) => {
              setId_Cliente(e.target.value);
            }}
            className="form"
          >
            <option value="" />
            {clientes.map((cliente) => (
              <option value={`${cliente.id}`}>{cliente.name}</option>
            ))}
          </select>
          {error && id_cliente.length === 0 ? (
            <label className="label">El cliente es obligatorio.</label>
          ) : (
            ""
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Empleado</label>
          <select
            value={id_empleado}
            onChange={(e) => {
              setId_Empleado(e.target.value);
            }}
            className="form"
          >
            <option value="" />
            {empleados.map((empleado) => (
              <option value={`${empleado.id}`}>{empleado.name}</option>
            ))}
          </select>
          {error && id_empleado.length === 0 ? (
            <label className="label">El empleado es obligatorio.</label>
          ) : (
            ""
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Trabajo</label>
          <select
            value={id_trabajo}
            onChange={(e) => {
              setId_Trabajo(e.target.value);
            }}
            className="form"
          >
            <option value="" />
            {trabajos.map((trabajo) => (
              <option value={`${trabajo.id}`}>{trabajo.nombre}</option>
            ))}
          </select>
          {error && id_trabajo.length === 0 ? (
            <label className="label">El trabajo es obligatorio.</label>
          ) : (
            ""
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Diseño</label>
          <select
            value={id_diseño}
            onChange={(e) => {
              setId_Diseño(e.target.value);
            }}
            className="form"
          >
            <option value="" />
            {diseños.map((diseño) => (
              <option value={`${diseño.id}`}>{diseño.nombre}</option>
            ))}
          </select>
          {error && id_diseño.length === 0 ? (
            <label className="label">El diseño es obligatorio.</label>
          ) : (
            ""
          )}
        </div>
        <button type="submit" className="btn btn-danger">
          Crear
        </button>
      </form>
    </div>
  );
};

export default EditPedido;
