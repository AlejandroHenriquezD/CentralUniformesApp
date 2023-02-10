import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../components/form.css";

const endpoint = "http://localhost:8000/api/logo";
const endpoint2 = "http://localhost:8000/api";

const CreateLogo = () => {
  const [img, setImg] = useState("");
  const [id_user, setId_User] = useState("");
  const navigate = useNavigate();

  const handleChange = (file) => {
    setImg(file[0]);
  };

  const [usuarios, setUsuarios] = useState([]);

  const store = async (e) => {
    e.preventDefault();
    const fData = new FormData();

    fData.append("nombre", img.name);
    fData.append("img", img);
    fData.append("id_user", id_user);

    axios.post(endpoint, fData);
    navigate("/show_logos");
  };

  useEffect(() => {
    getAll();
  }, []);

  const getAll = async () => {
    const response = await axios.get(`${endpoint2}/users`);
    setUsuarios(response.data);
  };

  return (
    <div>
      <h3>Crear Logo</h3>
      <form onSubmit={store} encType="multipart/form-data">
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
        <button type="submit" onClick={store} className="btn btn-danger">
          Crear
        </button>
      </form>
    </div>
  );
};

export default CreateLogo;
