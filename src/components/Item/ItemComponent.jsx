import React from 'react'
import './ItemComponent.css'
import logoRuta from '../../img/rinonPlana.jpeg';

const ItemComponent = ( {info} ) => {
   console.log(info);
    return (
        <div className="product">
           <img src={logoRuta} alt="mi foto"></img>
            <h3>Esto es un titulo</h3>
            <p>El precio: ${info}</p>
        </div>
    )
}

export default ItemComponent
