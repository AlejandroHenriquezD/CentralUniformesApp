import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../components/form.css";

const endpoint = "http://localhost:8000/api/diseño";
const endpoint2 = "http://localhost:8000/api";

const CreateDiseño = () => {
  const [nombre, setNombre] = useState("");
  const [img, setImg] = useState("");
  const [posicion, setPosicion] = useState("");
  const [tamaño, setTamaño] = useState("");
  const [favorito, setFavorito] = useState("");
  const [id_user, setId_User] = useState("");
  const [id_logo, setId_Logo] = useState("");
  const [id_articulo, setId_Articulo] = useState("");
  const navigate = useNavigate();

  //Foreign key
  const [usuarios, setUsuarios] = useState([]);
  const [logos, setLogos] = useState([]);
  const [articulos, setArticulos] = useState([]);

  const store = async (e) => {
    e.preventDefault();
    await axios.post(endpoint, {
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
  };

  useEffect(() => {
    getAll();
  }, []);

  const getAll = async () => {
    const response = await axios.get(`${endpoint2}/users`);
    const response2 = await axios.get(`${endpoint2}/logos`);
    const response3 = await axios.get(`${endpoint2}/articulos`);
    setUsuarios(response.data);
    setLogos(response2.data);
    setArticulos(response3.data);
  };

  return (
    <div>
      <h3>Crear Diseño</h3>
      <form onSubmit={store}>
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
          <label className="form-label">Imagen</label>
          <input
            value={img}
            onChange={(e) => setImg(e.target.value)}
            type="text"
            className="form"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Posición</label>
          <input
            value={posicion}
            onChange={(e) => setPosicion(e.target.value)}
            type="text"
            className="form"
          />
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
        </div>
        <button type="submit" className="btn btn-danger">
          Crear
        </button>
      </form>
    </div>
  );
};

export default CreateDiseño;
