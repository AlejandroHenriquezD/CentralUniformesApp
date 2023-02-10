import Header from '../Header/Header';
import "./articulo.css";

const Articulo = () => {
  return(
    <div>
      <Header/>
      <div id="articuloContent">
        <div className="halfArticuloContent">
          <div id="articuloImgCanvas">
            <img src="/img/camiseta_negra.jpg" />
          </div>
        </div>
        <div className="halfArticuloContent">
          <div id="articuloDataCanvas">
            <div id="nameAndPrice">
              <h1>Camiseta</h1>
              <h2>7€</h2>
            </div>
            <div id="articuloDescription">
              <h3>Descripción del artículo</h3>
              <h4>Camiseta básica de poliester</h4>
            </div>
            <h3>Talla:</h3>
            <h4>M</h4>
            <h3>Color:</h3>
            <h4>Negro</h4>
            <button>Volver</button>
            <button>Seleccionar prenda</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Articulo;