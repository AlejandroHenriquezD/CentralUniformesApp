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

  const navigateToPedidos = () => {
    navigate("/pedidos");
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
      <button className="headerButton" onClick={navigateToPedidos}>Realizar pedido</button>
      <button className="headerButton">Configuración</button>
    </div>
    <div id="dropdown">
      <button className="headerButton" onClick={navigateToArticulos}>Crear diseño</button>
      <button className="headerButton">Mis logos</button>
      <button className="headerButton">Ver diseños</button>
    </div>
    </>
  );
};

export default Header;
