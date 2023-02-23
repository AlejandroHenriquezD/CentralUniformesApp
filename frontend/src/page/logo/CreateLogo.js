import React, { useState, useEffect } from "react";
import axios from "axios";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";
import "../../components/form.css";
import Menu from '../../components/menu/Menu';
import authHeader from "../../services/auth-header";

const endpoint = "http://localhost:8000/api/logo";
const endpoint2 = "http://localhost:8000/api";

const CreateLogo = () => {
  const [api, contextHolder] = notification.useNotification();
  const [img, setImg] = useState("");
  const [id_user, setId_User] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const [usuarios, setUsuarios] = useState([]);

  const alertaError = (type) => {
    api[type]({
      message: "ERROR",
      description: "Error al acceder a la base de datos",
    });
  };

  const store = async (e) => {
    try {
      e.preventDefault();
      if (id_user.length === 0 || img.length === 0) {
        setError(true);
      } else {
        const fData = new FormData();
        fData.append("nombre", img.name);
        fData.append("img", document.getElementById("imgForm").files[0]);
        fData.append("id_user", id_user);
        // axios.post(endpoint, fData);
        // navigate("/show_logos");
        await axios({
          url: `${endpoint}`,
          method: "POST",
          headers: authHeader(),
          data: fData
        }).then(() => navigate("/show_logos"));
      }
    } catch (error) {
      alertaError("error");
    }
  };

  useEffect(() => {
    getAll();
  }, []);

  const getAll = async () => {
    try {
      // const response = await axios.get(`${endpoint2}/users`);
      await axios({
        url: `${endpoint2}/users`,
        method: "GET",
        headers: authHeader(),
      }).then((response) => setUsuarios(response.data));
    } catch (error) {
      alertaError("error");
    }
  };

  return (
    <div>
      <Menu />
      {contextHolder}
      <h3>Crear Logo</h3>
      <form onSubmit={store} encType="multipart/form-data">
        <div className="mb-3">
          <label className="form-label">Imagen</label>
          <input
            value={img}
            onChange={(e) => setImg(e.target.value)}
            type="file"
            id="imgForm"
            className="form"
          />
          {error && img.length === 0 ? (
            <label className="label">La imagen es obligatoria.</label>
          ) : (
            ""
          )}
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
          {error && id_user.length === 0 ? (
            <label className="label">El usuario es obligatorio.</label>
          ) : (
            ""
          )}
        </div>
        <button type="submit" onClick={store} className="btn btn-danger">
          Crear
        </button>
      </form>
    </div>
  );
};

export default CreateLogo;
