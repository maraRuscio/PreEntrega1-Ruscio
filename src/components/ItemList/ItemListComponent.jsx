import React from 'react'
import { products } from '../../data/products'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';


const  ItemListComponent = ()=> {
   // const [items] = useState(products);
    const [data, setData] = useState([]);
    useEffect(() =>{
        const getData = new Promise(resolve => {
            setTimeout(() =>{
                resolve (products);
            }, 300);
        });
        getData.then (res => setData(res));
    },[])    

    return (

       <div>
      {data.map(e =>
        <div key={e.id} >
          <img src={e.imagen} alt="mi imagen"  />
          <div>
            <h2>{e.titulo}</h2>
            <p>$ {e.precio}</p>
            <Link to={`/item/${e.id}`}  className='details'>Detalle Producto</Link>
          </div>

          
        </div>
      )}
    </div>
        );
}

export default ItemListComponent;
