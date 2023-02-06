import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ShowArticulos from "./page/articulo/ShowArticulos";
import EditArticulo from "./page/articulo/EditArticulo";
import CreateArticulo from "./page/articulo/CreateArticulo";

import ShowClientes from "./page/cliente/ShowClientes";
import CreateCliente from "./page/cliente/CreateCliente";
import EditCliente from "./page/cliente/EditCliente";

import ShowDiseños from "./page/diseño/ShowDiseños";
import EditDiseño from "./page/diseño/EditDiseño";
import CreateDiseño from "./page/diseño/CreateDiseño";

import ShowLogos from "./page/logo/ShowLogos";
import EditLogo from "./page/logo/EditLogo";
import CreateLogo from "./page/logo/CreateLogo";

import ShowPedidos from "./page/pedido/ShowPedidos";
import CreatePedido from "./page/pedido/CreatePedido";
import EditPedido from "./page/pedido/EditPedido";

import ShowTrabajos from "./page/trabajo/ShowTrabajos";
import CreateTrabajo from "./page/trabajo/CreateTrabajo";
import EditTrabajo from "./page/trabajo/EditTrabajo";

import ShowUsuarios from "./page/usuario/ShowUsuarios";
import CreateUsuario from "./page/usuario/CreateUsuario";
import EditUsuario from "./page/usuario/EditUsuario";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowClientes />} />

          <Route path="/show_articulos" element={<ShowArticulos />} />
          <Route path="/create_articulo" element={<CreateArticulo />} />
          <Route path="/edit_articulo/:id" element={<EditArticulo />} />

          <Route path="/show_clientes" element={<ShowClientes />} />
          <Route path="/create_cliente" element={<CreateCliente />} />
          <Route path="/edit_cliente/:id" element={<EditCliente />} />

          <Route path="/show_diseños" element={<ShowDiseños />} />
          <Route path="/create_diseño" element={<CreateDiseño />} />
          <Route path="/edit_diseño/:id" element={<EditDiseño />} />

          <Route path="/show_logos" element={<ShowLogos />} />
          <Route path="/create_logo" element={<CreateLogo />} />
          <Route path="/edit_logo/:id" element={<EditLogo />} />

          <Route path="/show_pedidos" element={<ShowPedidos />} />
          <Route path="/create_pedido" element={<CreatePedido />} />
          <Route path="/edit_pedido/:id" element={<EditPedido />} />

          <Route path="/show_trabajos" element={<ShowTrabajos />} />
          <Route path="/create_trabajo" element={<CreateTrabajo />} />
          <Route path="/edit_trabajo/:id" element={<EditTrabajo />} />

          <Route path="/show_usuarios" element={<ShowUsuarios />} />
          <Route path="/create_usuario" element={<CreateUsuario />} />
          <Route path="/edit_usuario/:id" element={<EditUsuario />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
