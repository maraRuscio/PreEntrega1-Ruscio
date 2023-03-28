import React from 'react'
import './ItemComponent.css'
//import logoRuta from '../img/logo192.jpeg'

const ItemComponent = ({info}) => {
    return (
        <div className="product">
            <img src={info.img} alt="esto es una imagen"></img>
            <h2>{info.nombre}</h2>
            <p>El precio: ${info.precio}</p>
        </div>
    )
}

export default ItemComponent
