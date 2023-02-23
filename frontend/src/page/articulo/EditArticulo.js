import React, { useEffect, useState } from "react";
import axios from "axios";
import { notification } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import "../../components/form.css";
import Menu from '../../components/menu/Menu';
import authHeader from "../../services/auth-header";

const endpoint = "http://localhost:8000/api/articulo/";

const EditArticulo = () => {
  const [api, contextHolder] = notification.useNotification();
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  // const [img, setImg] = useState("");
  const [precio, setPrecio] = useState(0);
  const [color, setColor] = useState("");
  const [talla, setTalla] = useState("");
  const [stock, setStock] = useState(0);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

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
        talla.length === 0 ||
        color.length === 0 ||
        precio.length === 0 ||
        stock.length === 0
        // img.length === 0
      ) {
        setError(true);
      } else {
        // await axios.put(`${endpoint}${id}`, {
        //   nombre: nombre,
        //   descripcion: descripcion,
        //   // img: img,
        //   precio: precio,
        //   color: color,
        //   talla: talla,
        //   stock: stock,
        // });
        await axios({
          url: `${endpoint}${id}`,
          method: "PUT",
          headers: authHeader(),
          data: {
            nombre: nombre,
            descripcion: descripcion,
            precio: precio,
            color: color,
            talla: talla,
            stock: stock,
          }
        }).then(() => navigate("/show_articulos"));
      }
    } catch (error) {
      alertaError("error");
    }
  };

  useEffect(() => {
    const getArticuloById = async () => {
      // const response = await axios.get(`${endpoint}${id}`);
      await axios({
        url: `${endpoint}${id}`,
        method: "GET",
        headers: authHeader(),
      }).then((response) => {
        setNombre(response.data.nombre);
        setDescripcion(response.data.descripcion);
        setPrecio(response.data.precio);
        setColor(response.data.color);
        setTalla(response.data.talla);
        setStock(response.data.stock);
      });
    };
    try {
      getArticuloById();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    } catch (error) {
      alertaError("error");
    }
  }, []);

  return (
    <div>
      <Menu />
      {contextHolder}
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
          {error && nombre.length === 0 ? (
            <label className="label">El nombre es obligatorio.</label>
          ) : (
            ""
          )}
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
        {/* <div className="mb-3">
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
        </div> */}
        <div className="mb-3">
          <label className="form-label">Precio</label>
          <input
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            type="number"
            className="form"
            defaultValue={1}
            min={1}
          />
          {error && precio.length === 0 ? (
            <label className="label">El precio debe ser mayor que 0.</label>
          ) : (
            ""
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Color</label>
          <input
            value={color}
            onChange={(e) => setColor(e.target.value)}
            type="text"
            className="form"
          />
          {error && color.length === 0 ? (
            <label className="label">El color es obligatorio.</label>
          ) : (
            ""
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Talla</label>
          <input
            value={talla}
            onChange={(e) => setTalla(e.target.value)}
            type="text"
            className="form"
          />
          {error && talla.length === 0 ? (
            <label className="label">La talla es obligatoria.</label>
          ) : (
            ""
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Stock</label>
          <input
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            type="number"
            className="form"
            min={0}
          />
          {error && stock.length === 0 ? (
            <label className="label">El stock es obligatorio.</label>
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

export default EditArticulo;
