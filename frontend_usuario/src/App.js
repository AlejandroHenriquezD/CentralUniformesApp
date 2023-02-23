import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Inicio from "./components/Inicio/Inicio";
import Articulos from "./components/Articulos/Articulos";
import Articulo from "./components/Articulo/Articulo";
import Pedido from "./components/Pedido/Pedido";
import Diseño from "./components/Diseño/Diseño";
import Diseños from "./components/Diseños/Diseños";
import Logos from "./components/Logos/Logos";
import Usuario from "./components/Usuario/Usuario";
import EditarUsuario from "./components/EditarUsuario/EditarUsuario";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Login />} />

          <Route path="/inicio" element={<Inicio />} />

          <Route path="/pedido" element={<Pedido />} />

          <Route path="/articulos" element={<Articulos />} />
          <Route path="/articulo/:id" element={<Articulo />} />
          <Route path="/diseño" element={<Diseño />} />
          <Route path="/diseños" element={<Diseños />} />
          <Route path="/logos" element={<Logos />} />
          <Route path="/usuario" element={<Usuario />} />
          <Route path="/editar" element={<EditarUsuario />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
