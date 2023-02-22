import Menu from '../Menu/Menu';
import './Pedido.css';
import '../componentes2.css';
import { useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import AuthService from "../../services/auth.service";
import authHeader from "../../services/auth-header";
import Header from '../Header/Header';
import axios from 'axios';
import $ from "jquery";

const endpoint = 'http://localhost:8000/api'

const Pedido = () => {
  const navigate = useNavigate();

  const [diseño, setDiseño] = useState([]);
  const [trabajos, setTrabajos] = useState([]);

  const userId = AuthService.userId();

  // const [fecha_pedido, setFecha_pedido] = useState("");
  const [id_cliente, setId_cliente] = useState("");
  const [id_empleado, setId_empleado] = useState("");
  const [unidades, setUnidades] = useState("");
  const [observaciones, setObservaciones] = useState("");
  const [id_trabajo, setId_trabajo] = useState("");
  const [id_diseño, setId_diseño] = useState("");

  const querystring = window.location.search;
  let params = new URLSearchParams(querystring);
  const idDiseño = params.get("id_diseño");
  const idArticulo = params.get("id_articulo");

  useEffect(() => {
    if (idDiseño != null) {
      getThisDiseño();
      getTrabajos();
      setId_diseño(idDiseño);
      setId_cliente(userId);
      $.when(document.readyState === 'complete')
      .then(() => {onPageLoad()})
    }
  }, [])

  const onPageLoad = () => {
    const logoHeight = document.getElementById("tipoTrabajoDropdown");
    logoHeight.classList.add("elementHidden");
  };

  const showElement = (e) => {
    const element = document.getElementById(e);
    element.classList.toggle("elementHidden");
  };

  const postPedido = async (e) => {
    e.preventDefault();
    axios({
      url: `${endpoint}/pedido`,
      method: "POST",
      headers: authHeader(),
      data: {
        id_cliente,
        id_empleado,
        unidades,
        observaciones,
        id_trabajo,
        id_diseño,
      }
    }).then((res) => {navigate("/inicio")});
  }

  const getThisDiseño = () => {
    axios({
      url: `${endpoint}/diseño/${idDiseño}`,
      method: "GET",
      headers: authHeader(),
    }).then((res) => {
      setDiseño(res.data);
    })
  };

  const getThisArticulo = () => {
    var request = require('sync-request');
    var res = request('GET', `${endpoint}/articulo/${idArticulo}`, {
      headers: authHeader()
    });
    return JSON.parse(res.body);
  };

  const getTrabajos = () => {
    axios({
      url: `${endpoint}/trabajos`,
      method: "GET",
      headers: authHeader(),
    }).then((res) => {
      setTrabajos(res.data);
    })
  };

  const getThisImgArticulo = () => {
    return getThisArticulo().img;
  }

  const navigateToDiseños = () => {
    navigate(`/diseños/?pedido=true`);
  };

  return (
    <div>
      <Header />
      {idDiseño != null ? (
        <div id="content">
          <div className="halfContent">
            <div id="dataCanvas">
              <h1>Pedido</h1>
              <button className="longButton" onClick={navigateToDiseños}>Seleccionar diseño</button>
              <div id="unidades">
                <button className="shortButton">Unidades</button>
                <input type="number" onChange={(e) => setUnidades(e.target.value)}/>
              </div>
              <div id="tipoTrabajo">
                <button onClick={() => showElement("tipoTrabajoDropdown")} className="longButton">Tipo de trabajo</button>
                <div id="tipoTrabajoDropdown">
                  {trabajos.map((trabajo) => (
                    <button onClick={() => setId_trabajo(trabajo.id)}>{trabajo.nombre}</button>
                  ))}
                </div>
              </div>
              <div id="lastButtons">
                <button className="longButton" onClick={postPedido}>Realizar pedido</button>
              </div>
            </div>
          </div>
          <div className="halfContent">
            <div id="imgCanvas">
              <img id="imgOnCanvas" src={"http://localhost:8000/" + getThisImgArticulo()} />
            </div>
          </div>
        </div>
      ) : (
        <div id="content">
          <div className="halfContent">
            <div id="dataCanvas">
              <h1>Pedido</h1>
              <button className="longButton" onClick={navigateToDiseños}>Seleccionar diseño</button>
              <div id="lastButtons">
                <button className="redLongButton">Realizar pedido</button>
              </div>
            </div>
          </div>
          <div className="halfContent">
            <div id="imgCanvas">
            </div>
          </div>
        </div>
      )}
    </div>
    /* <Menu/>
    {pedidos.map((pedido) => (
            <div className='pedido'>
                <p>{pedido.fecha_pedido}</p>
                <p>{pedido.articulo.nombre} {pedido.articulo.talla} {pedido.articulo.color}</p>
                <p>{pedido.unidades} unidad/es</p>
                <p>{pedido.articulo.precio}€/unidad</p>
            </div>
    ))} */
  )
}

export default Pedido