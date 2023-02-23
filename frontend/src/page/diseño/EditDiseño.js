import React, { useEffect, useState } from "react";
import axios from "axios";
import { notification } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import "../../components/form.css";

const endpoint = "http://localhost:8000/api/diseño/";
const endpoint2 = "http://localhost:8000/api";

const EditDiseño = () => {
  const [api, contextHolder] = notification.useNotification();
  const [nombre, setNombre] = useState("");
  const [img, setImg] = useState("");
  const [posicion, setPosicion] = useState("");
  const [tamaño, setTamaño] = useState("");
  const [favorito, setFavorito] = useState("");
  const [id_user, setId_User] = useState("");
  const [id_logo, setId_Logo] = useState("");
  const [id_articulo, setId_Articulo] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const [usuarios, setUsuarios] = useState([]);
  const [logos, setLogos] = useState([]);
  const [articulos, setArticulos] = useState([]);

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
        nombre.length === 0 ||
        posicion.length === 0 ||
        tamaño.length === 0 ||
        favorito.length === 0 ||
        id_user.length === 0 ||
        id_logo.length === 0 ||
        id_articulo.length === 0
      ) {
        setError(true);
      } else {
        await axios.put(`${endpoint}${id}`, {
          nombre: nombre,
          img: img,
          posicion: posicion,
          tamaño: tamaño,
          favorito: favorito,
          id_user: id_user,
          id_logo: id_logo,
          id_articulo: id_articulo,
        });
        navigate("/show_diseños");
      }
    } catch (error) {
      alertaError("error");
    }
  };
  useEffect(() => {
    const getDiseñoById = async () => {
      try {
        const response = await axios.get(`${endpoint}${id}`);
        setNombre(response.data.nombre);
        setImg(response.data.img);
        setPosicion(response.data.posicion);
        setTamaño(response.data.tamaño);
        setFavorito(response.data.favorito);
        setId_User(response.data.id_user);
        setId_Logo(response.data.id_logo);
        setId_Articulo(response.data.id_articulo);
        getAll();
      } catch (error) {
        alertaError("error");
      }
    };
    const getAll = async () => {
      try {
        const response = await axios.get(`${endpoint2}/users`);
        const response2 = await axios.get(`${endpoint2}/logos`);
        const response3 = await axios.get(`${endpoint2}/articulos`);
        setUsuarios(response.data);
        setLogos(response2.data);
        setArticulos(response3.data);
      } catch (error) {
        alertaError("error");
      }
    };
    getDiseñoById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {contextHolder}
      <h3>Editar Diseño</h3>
      <form onSubmit={update}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            type="text"
            className="form"
          />
          {error && nombre.length === 0 ? (
            <label className="label">El nombre es obligatorio.</label>
          ) : (
            ""
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Posición</label>
          <input
            value={posicion}
            onChange={(e) => setPosicion(e.target.value)}
            type="text"
            className="form"
          />
          {error && posicion.length === 0 ? (
            <label className="label">La posición es obligatoria.</label>
          ) : (
            ""
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Tamaño</label>
          <select
            value={tamaño}
            onChange={(e) => {
              setTamaño(e.target.value);
            }}
            className="form"
          >
            <option value="" />
            <option value="Pequeño">Pequeño</option>
            <option value="Mediano">Mediano</option>
            <option value="Grande">Grande</option>
          </select>
          {error && tamaño.length === 0 ? (
            <label className="label">El tamaño es obligatorio.</label>
          ) : (
            ""
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Favorito</label>
          <select
            value={favorito}
            onChange={(e) => {
              setFavorito(e.target.value);
            }}
            className="form"
          >
            <option value="No">No</option>
            <option value="Si">Sí</option>
          </select>
          {error && favorito.length === 0 ? (
            <label className="label">El favorito es obligatorio.</label>
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
        <div className="mb-3">
          <label className="form-label">Logo</label>
          <select
            value={id_logo}
            onChange={(e) => {
              setId_Logo(e.target.value);
            }}
            className="form"
          >
            <option value="" />
            {logos.map((logo) => (
              <option value={`${logo.id}`}>{logo.nombre}</option>
            ))}
          </select>
          {error && id_logo.length === 0 ? (
            <label className="label">El logo es obligatorio.</label>
          ) : (
            ""
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Artículo</label>
          <select
            value={id_articulo}
            onChange={(e) => {
              setId_Articulo(e.target.value);
            }}
            className="form"
          >
            <option value="" />
            {articulos.map((articulo) => (
              <option value={`${articulo.id}`}>{articulo.nombre}</option>
            ))}
          </select>
          {error && id_articulo.length === 0 ? (
            <label className="label">El artículo es obligatorio.</label>
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

export default EditDiseño;
