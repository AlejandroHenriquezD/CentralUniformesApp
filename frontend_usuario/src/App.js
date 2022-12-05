import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Inicio from './components/Inicio/Inicio';
import Articulos from './components/Articulos/Articulos';
import AñadirArticulo from './components/Articulos/AñadirArticulo';
import Pedidos from './components/Pedidos/Pedidos';

function App() {
  return (
<div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/*' element={ <Login/>} />
    
            <Route path='/inicio' element={ <Inicio/>} />

            <Route path='/mis_pedidos' element={ <Pedidos/> } />

            <Route path='/articulos' element={ <Articulos/>} />
            <Route path='/add_articulo/:id' element={ <AñadirArticulo/>} />


            <Route path='/login' element={ <Login/>} />
            <Route path='/register' element={ <Register/>} />
          </Routes>  
        </BrowserRouter>
    </div>
  );
}

export default App;
