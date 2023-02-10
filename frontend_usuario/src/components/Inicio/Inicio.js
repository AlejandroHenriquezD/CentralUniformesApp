import Menu from "../Menu/Menu";
import "./Inicio.css";
import { useNavigate } from "react-router-dom";
import ima1 from "../imga1.jpg";
import ima2 from "../imga2.jpg";
import ima3 from "../imga3.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Header from "../Header/Header";
import Footer from "../Footer/Footer"

const Inicio = () => {
  const navigate = useNavigate();

  const navigateToArticulos = () => {
    navigate("/articulos");
  };

  const navigateToPedidos = () => {
    navigate("/pedidos");
  };

  return (
    <div id="imageBackground">
      <Header />
      <div id="imageContent">
        <div className="imageButton" onClick={navigateToArticulos}>
          <img src="/img/frame1.jpg" />
          <div className="redFilter" />
          <div className="rightBlueSquare" />
          <div className="rightHomeText">
            <h3>¡Diseñe su uniforme!</h3>
            <h4>Escoja una prenda de ropa y añada uno de sus logos</h4>
          </div>
        </div>
        <div className="imageButton" onClick={navigateToPedidos}>
          <img src="/img/frame2.jpg" />
          <div className="greenFilter" />
          <div className="leftBlueSquare" />
          <div className="leftHomeText">
            <h3>¡Realice un pedido!</h3>
            <h4>Y elija entre sus diseños creados y prendas de ropa básicas</h4>
          </div>
        </div>
        <div className="imageButton">
          <img src="/img/frame3.jpg" />
          <div className="redFilter" />
          <div className="rightBlueSquare" />
          <div className="rightHomeText">
            <h3>¡Contacte con nosotros!</h3>
            <h4>Nuestro personal responderá para resolver sus dudas y problemas</h4>
          </div>
        </div>
        <Footer />
      </div>
      {/* <Menu />
            <Carousel className>
                <div>
                    <img src={ima1} alt="ima1" />
                </div>
                <div>
                    <img src={ima2} alt="ima2" />
                </div>
                <div>
                    <img src={ima3} alt="ima3" />
                </div>
            </Carousel>


            <div>
                <button onClick={navigateToArticulos} class="buto">Hacer Pedido</button>
            </div> */}
    </div>
  );
};

export default Inicio;
