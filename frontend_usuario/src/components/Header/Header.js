import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";

const Header = () => {
  const navigate = useNavigate();

  const navigateToInicio = () => {
    navigate("/inicio");
  };

  const navigateToArticulos = () => {
    navigate("/articulos");
  };

  const navigateToLogos = () => {
    navigate("/logos");
  };

  const navigateToDiseños = () => {
    navigate("/diseños");
  };

  const navigateToPedido = () => {
    navigate("/pedido");
  };

  const navigateToUsuario = () => {
    navigate("/usuario");
  };

  const showDropdown = () => {
    const dropdown = document.getElementById("dropdown");
    dropdown.classList.toggle("dropdownHidden");
  };

  const onPageLoad = () => {
      const dropdown = document.getElementById("dropdown");
      dropdown.classList.add("dropdownHidden");
    };

  useEffect(() => {
    

    if (document.readyState === 'complete') {
      onPageLoad();
    }
  })
  
  return (
    <>
    <div id="header">
      <img src="/img/cu_logo.png" onClick={navigateToInicio}/>
      <button className="headerButton" onClick={showDropdown}>Uniformes</button>
      <button className="headerButton" onClick={navigateToPedido}>Realizar pedido</button>
      <button className="headerButton" onClick={navigateToUsuario}>Configuración</button>
    </div>
    <div id="dropdown">
      <button className="headerButton" onClick={navigateToArticulos}>Crear diseño</button>
      <button className="headerButton" onClick={navigateToLogos}>Mis logos</button>
      <button className="headerButton" onClick={navigateToDiseños}>Ver diseños</button>
    </div>
    </>
  );
};

export default Header;
