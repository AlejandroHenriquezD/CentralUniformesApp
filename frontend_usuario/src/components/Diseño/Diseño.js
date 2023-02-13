import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import "./diseño.css";

const Diseño = () => {
  const navigate = useNavigate();

  const navigateToArticulos = () => {
    navigate("/articulos");
  };

  return (
    <div>
      <Header />
      <div id="designContent">
        <div className="halfDesignContent">
          <div id="designImgCanvas">
            <img src="/img/camiseta_negra.jpg" />
          </div>
        </div>
        <div className="halfDesignContent">
          <div id="designDataCanvas">
            <form>
              <div id="designForm">
                <input 
                  type="text" 
                  placeholder="Nombre del diseño"
                  id="designName"
                />
                <button className="designLongButton">Seleccionar logo</button>
                <div id="designShortButtons">
                  <button className="designShortButton">Tamaño</button>
                  <button className="designShortButton">Posición</button>
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
                <button className="designLongButton">Guardar diseño</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diseño;
