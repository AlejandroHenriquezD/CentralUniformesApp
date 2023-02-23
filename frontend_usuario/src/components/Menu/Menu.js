import './Menu.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaSignOutAlt } from 'react-icons/fa';

const Menu = () => {

  return (
    <div class="navbar">
      <div class="subnav">
        <button class="subnavbtn"><GiHamburgerMenu /></button>
        <div class="subnav-content">
          <a href="/inicio"><b>Inicio</b></a>
          <a href="/articulos"><b>Hacer Pedido</b></a>
          <a href="/mis_pedidos"><b>Mis Pedidos</b></a>
          <a href="/sistema_ayuda"><b>Sistema de Ayuda</b></a>
        </div>
      </div>
      <a class="center" href="/inicio"><b>Pedidos</b></a>
      <div class="subnav2">
        <a class="subnavbtn2" href="/login"><FaSignOutAlt /></a>
        <div class="subnav-content">
        </div>
      </div>
    </div>
  )
}

export default Menu