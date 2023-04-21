import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComponent from '../components/NavBar/NavbarComponent';
import { FooterComponent } from '../components/Footer/FooterComponent';
import Home from '../pages/Home';
import Nosotros from '../pages/Nosotros';
import Clientes from '../pages/Clientes'
import Productos from '../pages/Productos'
import Contactos from '../pages/Contactos'
import Carrit from '../pages/Carrit'
import Tienda from '../pages/Tienda'
import { Checkout } from '../pages/Checkout'
import { ItemDetail } from '../pages/ItemDetail'

export const MainRoutes = () => {
  return (
    <Router>
      <NavbarComponent/>
        <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route exact path='/Nosotros' element={<Nosotros />}/>
            <Route exact path='/Clientes' element={<Clientes/>}/>
            <Route exact path='/Productos' element={<Productos/>}/>
            <Route exact path='/Tienda' element={<Tienda/>}/>
            <Route exact path='Tienda/:id' element={<ItemDetail />}/>
            <Route exact path="/Carrito" element={<Carrit/>}/>
            <Route exact path="/checkout" element={<Checkout />}/>
            <Route exact path='/Contactos' element={<Contactos/>}/>
        </Routes>
      <FooterComponent />
    </Router>
  );
}