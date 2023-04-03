
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComponent from '../components/NavBar/NavbarComponent';
import Home from '../pages/Home';
import Nosotros from '../pages/Nosotros';
import Servicios from '../pages/Servicios';
import Clientes from '../pages/Clientes';
//import Productos from '../pages/Productos';
import Contactos from '../pages/Contactos';
import { ItemListContainerComponent } from '../components/ItemListContainer/ItemListContainerComponent';
import { ItemDetailsContainer } from '../pages/ItemDetailsConteiner';
import { ItemCategoryContainer } from '../pages/ItemCategoryContainer';
export const MainRoutes = () => {
  return (
    <Router>
      <NavbarComponent/>
        <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route exact path='/Nosotros' element={<Nosotros />}/>
            <Route exact path='/Servicios' element={<Servicios />}/>
            <Route exact path='/Clientes' element={<Clientes/>}/>
            <Route exact path='/Productos' element={<ItemListContainerComponent/>}/>
            <Route exact path='/item/:id' element={<ItemDetailsContainer/>}/>
            <Route exact path='/category/:categoryId' element={<ItemCategoryContainer/>}/>
            <Route exact path='/Contactos' element={<Contactos/>}/>

        </Routes>
    </Router>
  );
}