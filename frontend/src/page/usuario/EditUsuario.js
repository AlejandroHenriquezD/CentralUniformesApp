import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "../../components/form.css";

const endpoint = "http://localhost:8000/api/user/";

const EditUsuario = () => {
  const [dni, setDni] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [rol, setRol] = useState();
  const navigate = useNavigate();
  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();
    await axios.put(`${endpoint}${id}`, {
      dni: dni,
      name: name,
      password: password,
      email: email,
      rol: rol,
    });
    navigate("/Show_usuarios");
  };

  useEffect(() => {
    const getUsuarioById = async () => {
      const response = await axios.get(`${endpoint}${id}`);
      setDni(response.data.dni);
      setName(response.data.name);
      setPassword(response.data.password);
      setEmail(response.data.email);
      setRol(response.data.rol);
    };
    getUsuarioById();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <h3>Editar Usuario</h3>
      <form onSubmit={update}>
        <div className="mb-3">
          <label className="form-label">DNI</label>
          <input
            value={dni}
            onChange={(e) => setDni(e.target.value)}
            type="text"
            className="form"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form"
          />
        </div>{" "}
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className="form"
          />
        </div>{" "}
        <div className="mb-3">
          <label className="form-label">Rol</label>
          <select
            value={rol}
            onChange={(e) => {
              setRol(e.target.value);
            }}
            className="form"
          >
            <option value="" />
            <option value="Cliente">Cliente</option>
            <option value="Empleado">Empleado</option>
            <option value="Encargado">Encargado</option>
          </select>
        </div>
        <button type="submit" className="btn btn-danger">
          Crear
        </button>
      </form>
    </div>
  );
};

export default EditUsuario;
