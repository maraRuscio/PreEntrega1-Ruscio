import React from 'react'
import { products } from '../data/products'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

export const ItemDetailsContainer = () => {

    const {id} = useParams();
    const [items] = useState(products);
    const resultado = items.find(e => e.id === id);

  return (
    <div>
        <div key={resultado.id}>
          <img src={resultado.imagen} alt=""  />
          <div>
            <h3>{resultado.titulo}</h3>
            <p>{resultado.id}</p>
            <p>Categoría: {resultado.categoria.nombre}</p>
            <p>$ {resultado.precio}</p>
            <Link to={`/`} >Volver atrás</Link>
          </div>
    </div>
    </div>
  )
}
