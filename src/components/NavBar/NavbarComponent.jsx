import React from 'react'
import NavItem from "./NavItem"
import styled from 'styled-components'
import CartWidget from '../CartWidget/CartWidgetComponent'
import logoRuta from '../../img/logoER.png'


function NavbarComponent() {

  
  
    return (
        <>
            <Navbar>
                <NavItem label={<img alt='EcoRuta' src={logoRuta} height='70px'/>} src="/" />
                <div className={`links`}>
                    <NavItem label="Inicio" src="/" />
                    <NavItem src='/Nosotros' label="Nosotros" />
                    <NavItem src='/Productos' label="Productos" />
                    <NavItem src='/Tienda' label="Tienda" />
                    <NavItem src='/Contactos' label="Contactos" />
                    <NavItem src='/Carrito' label={<CartWidget/>} /> 
                </div>
               
            </Navbar>
        
        </>
    )
}

export default NavbarComponent

const Navbar = styled.nav`
    h2{
        color: #fff;
        font-size: rem;
    }
    padding: 20px;   
    background-color: #555;
    border-bottom: 2px solid #fbb929;
    border-right: 2px solid #fbb929;
    height: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
        
    a{
        color: #fbb929;
        text-decoration: none;
        margin-right: 1rem;
        font-size: 0.5rem;
        text-decoration: none;
    }
    .links{
        position: absolute;
        right: 0;
        text-align: center;
        a{
            color: #bb929;
            font-size: 1.2rem;
            display: block;

        }
        @media(min-width:768px){
            margin:0;
            h2{
                color: #fff;
                font-size: 2rem;
            }
            
            a{
                font-size: 1rem;
                color: #fbb929;
                display: inline;
            
            }

        }
    }    `

   