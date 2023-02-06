import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../components/form.css";

const endpoint = "http://localhost:8000/api/pedido";
const endpoint2 = "http://localhost:8000/api";

const CreatePedido = () => {
  const [observaciones, setObservaciones] = useState("");
  const [unidades, setUnidades] = useState(0);
  const [id_cliente, setId_Cliente] = useState(0);
  const [id_empleado, setId_Empleado] = useState(0);
  const [id_trabajo, setId_Trabajo] = useState(0);
  const [id_diseño, setId_Diseño] = useState(0);
  const navigate = useNavigate();

  //Foreign key
  const [clientes, setId_Clientes] = useState([]);
  const [empleados, setId_Empleados] = useState([]);
  const [trabajos, setId_Trabajos] = useState([]);
  const [diseños, setId_Diseños] = useState([]);

  const store = async (e) => {
    e.preventDefault();
    await axios.post(endpoint, {
      observaciones: observaciones,
      unidades: unidades,
      id_cliente: id_cliente,
      id_empleado: id_empleado,
      id_trabajo: id_trabajo,
      id_diseño: id_diseño,
    });
    navigate("/show_pedidos");
  };

  useEffect(() => {
    getAll();
  }, []);

  const getAll = async () => {
    const response = await axios.get(`${endpoint2}/users`);
    const response2 = await axios.get(`${endpoint2}/trabajos`);
    const response3 = await axios.get(`${endpoint2}/diseños`);
    setId_Clientes(response.data);
    setId_Empleados(response.data);
    setId_Trabajos(response2.data);
    setId_Diseños(response3.data);
  };

  return (
    <div>
      <h3>Crear Pedido</h3>
      <form onSubmit={store}>
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
          />
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
        </div>
        <button type="submit" className="btn btn-danger">
          Crear
        </button>
      </form>
    </div>
  );
};

export default CreatePedido;
