import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import "./diseño.css";
import "../componentes2.css";

const Diseño = () => {
  const navigate = useNavigate();

  const navigateToArticulo = () => {
    navigate("/articulo");
  };

  const navigateToLogos = () => {
    navigate("/logos");
  };

  return (
    <div>
      <Header />
      <div id="content">
        <div className="halfContent">
          <div id="imgCanvas">
            <img src="/img/camiseta_negra.jpg" />
          </div>
        </div>
        <div className="halfContent">
          <div id="dataCanvas">
            <form>
              <div id="designForm">
                <input 
                  type="text" 
                  placeholder="Nombre del diseño"
                  id="designName"
                />
                <button className="longButton" onClick={navigateToLogos}>Seleccionar logo</button>
                <div id="designShortButtons">
                  <button className="shortButton">Tamaño</button>
                  <button className="shortButton">Posición</button>
                </div>
                <div id="designShortButtons">
                  <div id="logoHeight">
                    <button>Pequeño</button>
                    <button>Mediano</button>
                    <button>Grande</button>
                  </div>
                    {/* <option>Pequeño</option>
                    <option>Mediano</option>
                    <option>Grande</option> */}
                  <div id="positionInputs">
                    <input 
                      type="number" 
                      name="x-pos" 
                      placeholder="x"
                      min="0" 
                      max="100" 
                      id="x-pos" 
                    />
                    <input 
                      type="number" 
                      name="y-pos" 
                      placeholder="y"
                      min="0" 
                      max="100" 
                      id="y-pos" 
                    />
                  </div>
                </div>
                <div id="lastButtons">
                  <button className="longButton" onClick={navigateToArticulo}>Volver</button>
                  <button className="longButton">Guardar diseño</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diseño;
