import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../form.css";

//Seguro que hay algo mal aquí por tema de imagenes que no entiendo pero he hecho lo que he podido.
//Hay que conseguir que en el atributo id_usuario se ponga automaticamente el id del que lo crea.
//David Casimiro Herrera

const endpoint = "http://localhost:8000/api/logos";

const CreateLogo = () => {
  const [nombre, setNombre] = useState("");
  const [img, setImg] = useState("");
  const [id_user, setId_user] = useState("");
  const navigate = useNavigate();

  const handleChange = (file) => {
    setImg(file[0]);
  };

  const store = async (e) => {
    e.preventDefault();

    //Asi a lo loco creo que cuando hagamos lo del localstorage puede ser algo así
    setId_user(localStorage.getItem.id_user);

    const fData = new FormData();
    fData.append("nombre", nombre);
    fData.append("img", img);
    fData.append("id_user", id_user);
    axios.post(endpoint, fData);
    navigate("/show_logos");
  };

  return (
    <div>
      <h3>Crear Logo</h3>
      <form onSubmit={store} encType="multipart/form-data">
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
          <label htmlFor="logo" className="form-label">
            Logo
          </label>
          <input
            name="logo"
            id="logo"
            type="file"
            className="form"
            onChange={(e) => handleChange(e.target.files)}
          />
        </div>
        <button type="submit" onClick={store} className="btn btn-danger">
          Crear
        </button>
      </form>
    </div>
  );
};

export default CreateLogo;
