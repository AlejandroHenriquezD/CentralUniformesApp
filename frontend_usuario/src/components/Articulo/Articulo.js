import { useNavigate } from "react-router-dom";
import Header from '../Header/Header';
import "./articulo.css";
import "../componentes2.css";

const Articulo = () => {
  const navigate = useNavigate();

  const navigateToArticulos = () => {
    navigate("/articulos");
  }

  const navigateToDiseño = () => {
    navigate("/diseño");
  }

  return(
    <div>
      <Header/>
      <div id="content">
        <div className="halfContent">
          <div id="imgCanvas">
            <img src="/img/camiseta_negra.jpg" />
          </div>
        </div>
        <div className="halfContent">
          <div id="dataCanvas">
            <div id="nameAndPrice">
              <h1 id="articuloName">Camiseta</h1>
              <h1 id="articuloPrice">7€</h1>
            </div>
            <div id="articuloDescription">
              <h3>Descripción del artículo:</h3>
              <h4>Camiseta básica de poliester</h4>
            </div>
            <div className="otherArticulo">
              <h3>Talla: </h3>
              <h3 className="otherArticuloData">M</h3>
            </div>
            <div className="otherArticulo">
              <h3>Color: </h3>
              <h3 className="otherArticuloData">Negro</h3>
            </div>
            <div id="lastButtons">
              <button onClick={navigateToArticulos}>Volver</button>
              <button onClick={navigateToDiseño}>Seleccionar prenda</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Articulo;