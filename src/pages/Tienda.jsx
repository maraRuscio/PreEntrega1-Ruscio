import React from "react"
import { LoaderComponent } from '../components/Loader/LoaderComponent'
import {collection, getDocs, getFirestore } from "firebase/firestore"
import CardComponent from '../components/Card/CardComponent'
import "./tienda.css"


const  Tienda = ()=> {
      const [data, setData] = React.useState([]);
      const [loading, setLoading] = React.useState(true);
    React.useEffect(() =>{
      const db= getFirestore();

      const itemsCollection = collection (db, "products");
      getDocs (itemsCollection)
      .then (products => {
        if(products.size ===0) {
          console.log("No products");
        }
      /*salva condicion de base d edato vaca*/
      setData(
        products.docs.map((doc) =>({id: doc.id, ...doc.data() }))
      );
      })
      .catch(err => console.log(err))
      .then( () => {
        setLoading(false);
    });
    },[]);    

    return loading ? (<LoaderComponent />) : (
       <div className="stilyTienda">
        {data.map(e =>
            <CardComponent key={e.id} producto={e} />
        )}
      </div>
      );
}
export default Tienda;