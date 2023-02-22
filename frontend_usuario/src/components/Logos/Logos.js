import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import AuthService from "../../services/auth.service";
import Header from "../Header/Header";
import authHeader from "../../services/auth-header";
import Footer from "../Footer/Footer";
import { Col, Row } from "antd";
import "../componentes1.css";

const endpoint = "http://localhost:8000/api";

const Logos = () => {
  const navigate = useNavigate();

  const [logos, setLogos] = useState([]);

  const userId = AuthService.userId();
  const querystring = window.location.search;
  let params = new URLSearchParams(querystring);
  const idArticulo = params.get("id_articulo");

  useEffect(() => {
    getLogosByUserId();
  }, []);

  const getLogosByUserId = async () => {
    const response = await axios({
      url: `${endpoint}/logos/user/${userId}`,
      method: "GET",
      headers: authHeader(),
    })
    setLogos(response.data);
  }

  const storeLogo = (e) => {
    let file = document.getElementById("uploadLogo").files[0]
    let formdata = new FormData()

    formdata.append('nombre', file.name)
    formdata.append('img', file)
    formdata.append('id_user', userId)

    axios({
      url: `${endpoint}/logo`,
      method: "POST",
      headers: authHeader(),
      data: formdata
    }).then((res) => {
      getLogosByUserId();
    })

    // window.location.reload();
  };


  const navigateToDiseño = (id) => {
    navigate(`/diseño/?id_articulo=${idArticulo}&id_logo=${id}`);
  };

  return (
    <>
      <Header/>
      <div id="itemsContent">
        <Row justify="start">
          {logos.map((logo) => (
            <Col span={6}>
              {idArticulo != null ? (
              <div className="item" onClick={() => navigateToDiseño(logo.id)}>
                <div className="itemImgContainer">
                  <img src={"http://localhost:8000/"+logo.img} alt=""/>
                </div>
                <div className="itemData">
                  <h4>{logo.nombre}</h4>
                </div>
              </div>
              ) : (
                <div className="item">
                <div className="itemImgContainer">
                  <img src={"http://localhost:8000/"+logo.img} alt=""/>
                </div>
                <div className="itemData">
                  <h4>{logo.nombre}</h4>
                </div>
              </div>
              )}
            </Col>
          ))}
          <Col span={6}>
            <div className="item">
              <div className="itemPlusContainer">
                <img src="/img/plus.png" />
              </div>
              <div className="itemData">
                <h4>Añadir logo</h4>
              </div>
              <form id="logoForm" onSubmit={storeLogo}>
                <input
                  onChange={(e) => storeLogo(e.target.value)}
                  type="file"
                  id="uploadLogo"
                  accept=".jpg,.png"
                />
              </form>
            </div>
          </Col>
        </Row>
        <Footer />
      </div>
    </>
  )
}

export default Logos;