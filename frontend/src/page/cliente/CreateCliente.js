import React, { useState, useEffect } from "react";
import axios from "axios";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";
import "../../components/form.css";
import Menu from '../../components/menu/Menu';
import authHeader from "../../services/auth-header";

const endpoint = "http://localhost:8000/api/cliente";
const endpoint2 = "http://localhost:8000/api";

const CreateCliente = () => {
  const [api, contextHolder] = notification.useNotification();
  const [provincia, setProvincia] = useState("");
  const [codigo_postal, setCodigo_postal] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [observaciones, setObservaciones] = useState("");
  const [id_user, setId_User] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const [clientes, setClientes] = useState([]);

  const alertaError = (type) => {
    api[type]({
      message: "ERROR",
      description: "Error al acceder a la base de datos",
    });
  };

  useEffect(() => {
    getAll();
  }, []);

  const getAll = async () => {
    try {
      // const response = await axios.get(`${endpoint2}/clients`);
      await axios({
        url: `${endpoint2}/clients`,
        method: "GET",
        headers: authHeader(),
      }).then((response) => setClientes(response.data));
    } catch (error) {
      alertaError("error");
    }
  };

  const store = async (e) => {
    try {
      e.preventDefault();
      if (
        provincia.length === 0 ||
        codigo_postal.length === 0 ||
        municipio.length === 0 ||
        direccion.length === 0 ||
        telefono.length === 0 ||
        id_user.length === 0
      ) {
        setError(true);
      } else {
        // await axios.post(endpoint, {
        //   provincia: provincia,
        //   codigo_postal: codigo_postal,
        //   municipio: municipio,
        //   direccion: direccion,
        //   telefono: telefono,
        //   observaciones: observaciones,
        //   id_user: id_user,
        // });
        await axios({
          url: `${endpoint}`,
          method: "POST",
          headers: authHeader(),
          data: {
            provincia: provincia,
            codigo_postal: codigo_postal,
            municipio: municipio,
            direccion: direccion,
            telefono: telefono,
            observaciones: observaciones,
            id_user: id_user,
          }
        }).then(() => navigate("/show_clientes"));
      }
    } catch (error) {
      alertaError("error");
    }
  };

  return (
    <div>
      {contextHolder}
      <Menu />
      <h3>Crear Cliente</h3>
      <form onSubmit={store}>
        <div className="mb-3">
          <label className="form-label">Provincia</label>
          <input
            value={provincia}
            onChange={(e) => setProvincia(e.target.value)}
            type="text"
            className="form"
          />
          {error && provincia.length === 0 ? (
            <label className="label">La provincia es obligatoria.</label>
          ) : (
            ""
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Código postal</label>
          <input
            value={codigo_postal}
            onChange={(e) => setCodigo_postal(e.target.value)}
            type="number"
            className="form"
            max={99999}
            min={10000}
          />
          {error && codigo_postal.length === 0 ? (
            <label className="label">El código postal es obligatorio.</label>
          ) : (
            ""
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Municipio</label>
          <input
            value={municipio}
            onChange={(e) => setMunicipio(e.target.value)}
            type="text"
            className="form"
          />
          {error && municipio.length === 0 ? (
            <label className="label">El municipio es obligatorio.</label>
          ) : (
            ""
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Dirección</label>
          <input
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            type="text"
            className="form"
          />
          {error && direccion.length === 0 ? (
            <label className="label">La dirección es obligatoria.</label>
          ) : (
            ""
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Teléfono</label>
          <input
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            type="number"
            className="form"
            min={100000000}
            max={999999999}
          />
          {error && telefono.length === 0 ? (
            <label className="label">El teléfono es obligatorio.</label>
          ) : (
            ""
          )}
        </div>
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
          <label className="form-label">Usuario</label>
          <select
            value={id_user}
            onChange={(e) => {
              setId_User(e.target.value);
            }}
            className="form"
          >
            <option value="" />
            {clientes.map((cliente) => (
              <option value={`${cliente.id}`}>{cliente.name}</option>
            ))}
          </select>
          {error && id_user.length === 0 ? (
            <label className="label">El cliente es obligatorio.</label>
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

export default CreateCliente;
