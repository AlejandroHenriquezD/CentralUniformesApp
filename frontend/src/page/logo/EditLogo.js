import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "../../components/form.css";

const endpoint = "http://localhost:8000/api/logo/";
const endpoint2 = "http://localhost:8000/api";

const EditLogo = () => {
  const [nombre, setNombre] = useState("");
  const [img, setImg] = useState("");
  const [id_user, setId_User] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const handleChange = (file) => {
    setImg(file[0]);
  };

  const [usuarios, setUsuarios] = useState([]);

  const update = async (e) => {
    e.preventDefault();
    await axios.put(`${endpoint}${id}`, {
      nombre: nombre,
      img: img,
      id_user: id_user,
    });
    navigate("/show_logo");
  };
  useEffect(() => {
    const getLogoById = async () => {
      const response = await axios.get(`${endpoint}${id}`);
      setNombre(response.data.nombre);
      setImg(response.data.img);
      setId_User(response.data.id_user);
      getAll();
    };
    const getAll = async () => {
      const response = await axios.get(`${endpoint2}/users`);
      setUsuarios(response.data);
    };
    getLogoById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h3>Editar Logo</h3>
      <form onSubmit={update} encType="multipart/form-data">
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            type="text"
            className="form"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="img" className="form-label">
            Imagen
          </label>
          <input
            name="img"
            id="img"
            type="file"
            className="form"
            onChange={(e) => handleChange(e.target.files)}
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
            {usuarios.map((usuario) => (
              <option value={`${usuario.id}`}>{usuario.name}</option>
            ))}
          </select>
        </div>
        <button type="submit" onClick={update} className="btn btn-danger">
          Crear
        </button>
      </form>
    </div>
  );
};

export default EditLogo;
