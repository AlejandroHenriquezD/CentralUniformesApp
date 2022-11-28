import './Menu.css';
import {GiHamburgerMenu} from 'react-icons/gi';
import {FaSignOutAlt} from 'react-icons/fa';
// import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';

const Menu = () => {

    return (

<div class="navbar">
  
  <div class="subnav">
    <button class="subnavbtn"><GiHamburgerMenu/></button>
    <div class="subnav-content">
      <a href="#company"><b>Inicio</b></a>
      <a href="#team"><b>Hacer Pedido</b></a>
      <a href="#careers"><b>Mis Pedidos</b></a>
      <a href="#careers"><b>Sistema de Ayuda</b></a>
    </div>
  </div>

  <a class="center" href="#home"><b>Pedidos</b></a>

  <div class="subnav2">
    <a class="subnavbtn2" href="#home"><FaSignOutAlt/></a>
    <div class="subnav-content">
    </div>
  </div>
</div>
    )
}

export default Menu