import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import $ from "jquery";
import Header from "../Header/Header";
import AuthService from "../../services/auth.service";
import authHeader from "../../services/auth-header";
import "./diseño.css";
import "../componentes2.css";

const endpoint = "http://localhost:8000/api";

const Diseño = () => {
  const navigate = useNavigate();

  const userId = AuthService.userId();

  const [articulo, setArticulo] = useState([]);
  const [logo, setLogo] = useState([]);
  const [show, setShow] = useState(false);

  const [nombre, setNombre] = useState("");
  const [posicion, setPosicion] = useState("");
  const [tamaño, setTamaño] = useState("");
  const [favorito, setFavorito] = useState("");
  const [id_user, setId_user] = useState("");
  const [id_logo, setId_logo] = useState("");
  const [id_articulo, setId_articulo] = useState("");

  const querystring = window.location.search;
  let params = new URLSearchParams(querystring);
  const idArticulo = params.get("id_articulo");
  const idLogo = params.get("id_logo");

  const hasLogo = () => {
    if (idLogo != null) {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  useEffect(() => {
    getArticuloById();
    if (idLogo != null) {
      getLogoById();
      $.when(document.readyState === 'complete')
      .then(() => {onPageLoad()})
      setId_logo(idLogo);
      setPosicion("\"x\":\"" + 0 + "\",\"y\":\"" + 0 + "\"");
      setTamaño();
    }
    hasLogo();
    setId_articulo(idArticulo);

    setId_user(userId);
    setFavorito(false);
  }, []);

  const onPageLoad = () => {
    const logoHeight = document.getElementById("logoHeight");
    const positionInputs = document.getElementById("positionInputs");
    logoHeight.classList.add("elementHidden");
    positionInputs.classList.add("elementHidden");
  };

  const showElement = (e) => {
    const element = document.getElementById(e);
    element.classList.toggle("elementHidden");
  };

  const postDesign = (e) => {
    e.preventDefault();
    axios({
      url: `${endpoint}/diseño`,
      method: "POST",
      headers: authHeader(),
      data: {
        nombre,
        posicion,
        tamaño,
        favorito,
        id_user,
        id_logo,
        id_articulo,
      }
    }).then((res) => {navigate("/diseños")});
  }

  const navigateToArticulo = () => {
    navigate(`/articulo/${idArticulo}`);
  };

  const navigateToLogos = () => {
    navigate(`/logos/?id_articulo=${idArticulo}`);
  };

  const getArticuloById = async () => {
    const response = await axios({
      url: `${endpoint}/articulo/${idArticulo}`,
      method: "GET",
      headers: authHeader(),
    })
    setArticulo(response.data);
  };

  const getLogoById = async () => {
    const response = await axios({
      url: `${endpoint}/logo/${idLogo}`,
      method: "GET",
      headers: authHeader(),
    })
    setLogo(response.data);
  };

  const logoPequeño = () => {
    var element = document.getElementById("logoImg");
    element.style.height = "10%";
    setTamaño(10);
  }

  const logoMediano = () => {
    var element = document.getElementById("logoImg");
    element.style.height = "15%";
    setTamaño(20);
  }

  const logoGrande = () => {
    var element = document.getElementById("logoImg");
    element.style.height = "20%";
    setTamaño(30);
  }

  const logoPosition = () => {
    var x = document.getElementById("x-pos").value;
    var y = document.getElementById("y-pos").value;
    var element = document.getElementById("logoImg");
    element.style.left = x + "%";
    element.style.top = y + "%";
    setPosicion("\"x\":\"" + x + "\",\"y\":\"" + y+ "\"");
    console.log(posicion);
  }

  return (
    <div>
      <Header />
      <div id="content">
        <div className="halfContent">
          <div id="imgCanvas">
            <img id="imgOnCanvas" src={"http://localhost:8000/" + articulo.img} alt=""/>
            {idLogo != null ? (
              <img
                id="logoImg"
                src={"http://localhost:8000/" + logo.img}
                alt=""
              />
            ) : null}
          </div>
        </div>
        <div className="halfContent">
          <div id="dataCanvas">
              <div id="designForm">
                <input
                  type="text"
                  placeholder="Nombre del diseño"
                  id="designName"
                  onChange={(e) => setNombre(e.target.value)}
                />
                <button className="longButton" onClick={navigateToLogos}>Seleccionar logo</button>
                {show ? (
                  <div>
                    <div id="designShortButtons">
                      <button onClick={() => showElement("logoHeight")} className="shortButton">Tamaño</button>
                      <button onClick={() => showElement("positionInputs")} className="shortButton">Posición</button>
                    </div>
                    <div id="designShortButtons">
                      <div id="logoHeight">
                        <button onClick={logoPequeño}>Pequeño</button>
                        <button onClick={logoMediano}>Mediano</button>
                        <button onClick={logoGrande}>Grande</button>
                      </div>
                      <div id="positionInputs">
                        <input
                          type="number"
                          name="x-pos"
                          placeholder="x"
                          min="0"
                          max="100"
                          id="x-pos"
                          onChange={(e) => logoPosition()}
                        />
                        <input
                          type="number"
                          name="y-pos"
                          placeholder="y"
                          min="0"
                          max="100"
                          id="y-pos"
                          onChange={(e) => logoPosition()}
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div id="designShortButtons">
                      <button className="redShortButton">Tamaño</button>
                      <button className="redShortButton">Posición</button>
                    </div>
                  </div>
                )}
                <div id="lastButtons">
                  <button className="longButton" onClick={navigateToArticulo}>Volver</button>
                  <button className="longButton" onClick={postDesign}>Guardar diseño</button>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diseño;
