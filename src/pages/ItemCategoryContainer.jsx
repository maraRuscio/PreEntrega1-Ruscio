import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { products } from '../data/products'
import { Link } from 'react-router-dom'

export const ItemCategoryContainer = () => {

  const { categoryId } = useParams();
  const [items] = useState(products);
  const resultado = items.filter(e => e.categoria.id === categoryId);

  return (
    <div>
      {
        resultado.map(e =>
          <div key={e.id} >
          <img src={e.imagen} alt="" className='productImage' />
          <div>
            <h3>{e.titulo}</h3>
            <h3>{e.precio}</h3>
            <Link to={`/item/${e.id}`} >Detalle Producto</Link>
          </div>

          
        </div>
        )
      }
    </div>
  )
}
