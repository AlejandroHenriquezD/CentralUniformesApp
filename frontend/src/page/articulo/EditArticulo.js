import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "../../components/form.css";

const endpoint = "http://localhost:8000/api/articulo/";

const EditArticulo = () => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [img, setImg] = useState("");
  const [precio, setPrecio] = useState(0);
  const [color, setColor] = useState("");
  const [talla, setTalla] = useState("");
  const [stock, setStock] = useState(0);
  const navigate = useNavigate();
  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();
    await axios.put(`${endpoint}${id}`, {
      nombre: nombre,
      descripcion: descripcion,
      img: img,
      precio: precio,
      color: color,
      talla: talla,
      stock: stock,
    });
    navigate("/show_articulos");
  };
  useEffect(() => {
    const getArticuloById = async () => {
      const response = await axios.get(`${endpoint}${id}`);
      setNombre(response.data.nombre);
      setDescripcion(response.data.descripcion);
      setImg(response.data.img);
      setPrecio(response.data.precio);
      setColor(response.data.color);
      setTalla(response.data.talla);
      setStock(response.data.stock);
    };
    getArticuloById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h3>Editar Artículo</h3>
      <form onSubmit={update}>
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
          <label className="form-label">Descripcion</label>
          <input
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
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
          <label className="form-label">Precio</label>
          <input
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            type="number"
            className="form"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Color</label>
          <input
            value={color}
            onChange={(e) => setColor(e.target.value)}
            type="text"
            className="form"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Talla</label>
          <input
            value={talla}
            onChange={(e) => setTalla(e.target.value)}
            type="text"
            className="form"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Stock</label>
          <input
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            type="number"
            className="form"
          />
        </div>
        <button type="submit" className="btn btn-danger">
          Actualizar
        </button>
      </form>
    </div>
  );
};

export default EditArticulo;
