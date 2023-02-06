import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "../../components/form.css";

const endpoint = "http://localhost:8000/api/cliente/";
const endpoint2 = "http://localhost:8000/api";

const EditCliente = () => {
  const [provincia, setProvincia] = useState("");
  const [codigo_postal, setCodigo_postal] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [observaciones, setObservaciones] = useState("");
  const [id_user, setId_User] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const [usuarios, setUsuarios] = useState([]);

  const update = async (e) => {
    e.preventDefault();
    await axios.put(`${endpoint}${id}`, {
      provincia: provincia,
      codigo_postal: codigo_postal,
      municipio: municipio,
      direccion: direccion,
      telefono: telefono,
      observaciones: observaciones,
      id_user: id_user,
    });
    navigate("/show_clientes");
  };
  useEffect(() => {
    const getClienteById = async () => {
      const response = await axios.get(`${endpoint}${id}`);
      setProvincia(response.data.provincia);
      setCodigo_postal(response.data.codigo_postal);
      setMunicipio(response.data.municipio);
      setDireccion(response.data.direccion);
      setTelefono(response.data.telefono);
      setObservaciones(response.data.observaciones);
      setId_User(response.data.id_user);
      getAll();
    };
    const getAll = async () => {
      const response = await axios.get(`${endpoint2}/users`);
      setUsuarios(response.data);
    };
    getClienteById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h3>Editar Cliente</h3>
      <form onSubmit={update}>
        <div className="mb-3">
          <label className="form-label">Provincia</label>
          <input
            value={provincia}
            onChange={(e) => setProvincia(e.target.value)}
            type="text"
            className="form"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Código postal</label>
          <input
            value={codigo_postal}
            onChange={(e) => setCodigo_postal(e.target.value)}
            type="text"
            className="form"
          />
        </div>{" "}
        <div className="mb-3">
          <label className="form-label">Municipio</label>
          <input
            value={municipio}
            onChange={(e) => setMunicipio(e.target.value)}
            type="text"
            className="form"
          />
        </div>{" "}
        <div className="mb-3">
          <label className="form-label">Dirección</label>
          <input
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            type="text"
            className="form"
          />
        </div>{" "}
        <div className="mb-3">
          <label className="form-label">Teléfono</label>
          <input
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            type="text"
            className="form"
          />
        </div>{" "}
        <div className="mb-3">
          <label className="form-label">Observaciones</label>
          <input
            value={observaciones}
            onChange={(e) => setObservaciones(e.target.value)}
            type="text"
            className="form"
          />
        </div>{" "}
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
            {usuarios.map((usuario) => (
              <option value={`${usuario.id}`}>{usuario.name}</option>
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

export default EditCliente;
