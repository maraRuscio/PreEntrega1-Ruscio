import React from 'react'
import { useParams } from 'react-router-dom'
import {doc, getDoc, getFirestore} from "firebase/firestore"
import { LoaderComponent } from "../components/Loader/LoaderComponent"
import { CarritButtonComponent } from "../components/CarritButton/CarritButonComponent"

export const ItemDetail = () => {
    const productId = useParams();
    const [productData, setProductData] = React.useState({});
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        const db =getFirestore();
        const item = doc(db, "products", productId.id);
        getDoc(item)
        .then(product => {
            if(!product.exists()){
                setError(true);
            }
            setProductData({ id: product.id, ...product.data() });
        })
        .catch(err =>{
            setError(true);
        })
        .then(() => {
            setLoading(false);
        });
    },[productId]);

    return loading ? (<LoaderComponent />) : error? (
        <div>Producto no encontrado</div>
  ) : (
        <div
        className="detalle-producto"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1
          style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}
        >
          {productData.nombre}
        </h1>
        <img
          src={productData.imagen}
          alt={productData.nombre}
          className="img-fluid"
          style={{ maxWidth: "100%", marginBottom: "20px" }}
        />
        <p style={{ marginBottom: "20px" }}>{productData.descripcion}</p>
        <span
          className="precio"
          style={{ fontSize: "20px", fontWeight: "bold", color: "#007bff" }}
        >
          ${productData.precio}
        </span>
        <CarritButtonComponent />
       </div>
    );
};
