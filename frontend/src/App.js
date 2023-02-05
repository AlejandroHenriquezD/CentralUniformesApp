
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ShowClients from './components/client/ShowClients';
import CreateClient from './components/client/CreateClient';
import EditClient from './components/client/EditClient';

import ShowArticulos from './components/articulo/ShowArticulos';
import EditArticulo from './components/articulo/EditArticulo';
import CreateArticulo from './components/articulo/CreateArticulo';

import ShowPedidos from './components/pedido/ShowPedidos';
import CreatePedido from './components/pedido/CreatePedido';
import EditPedido from './components/pedido/EditPedido';

import ShowImagenes from './components/logo/ShowLogos';
import CreateLogo from './components/logo/CreateLogo';
import EditImagen from './components/logo/EditLogo';


function App() {
  return (
    <div className="App">
      
        <BrowserRouter>
          <Routes>
            <Route path='/' element={ <ShowClients/>} />

            <Route path='/show_clients' element={ <ShowClients/>} />
            <Route path='/create_client' element={ <CreateClient/>} />
            <Route path='/edit_client/:id' element={ <EditClient/>} />

            <Route path='/show_articulos' element={ <ShowArticulos/>} />
            <Route path='/create_articulo' element={ <CreateArticulo/>} />
            <Route path='/edit_articulo/:id' element={ <EditArticulo/>} />

            <Route path='/show_pedidos' element={ <ShowPedidos/>} />
            <Route path='/create_pedido' element={ <CreatePedido/>} />
            <Route path='/edit_pedido/:id' element={ <EditPedido/>} />

            <Route path='/show_imagenes' element={ <ShowImagenes/>} />
            <Route path='/create_imagen' element={ <CreateLogo/>} />
            <Route path='/edit_imagen/:id' element={ <EditImagen/>} />
          </Routes>  
        </BrowserRouter>
    </div>
  );
}

export default App;
