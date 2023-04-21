import React from 'react';
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import LoaderComponent from "../components/Loader/LoaderComponent";
import { CarritoDetailComponent } from "../components/CarritoDetail/CarritoDetailComponent";
import { CarritoPaymentComponent } from "../components/CarritoPayment/CarritoPaymentComponent";
import { collection, getDoc, doc, getFirestore } from "firebase/firestore";

const fetchProductsByIds = async (ids) => {
  const db = getFirestore();
  const prodRef = ids.map((id) => doc(collection(db, "products"), id.id));
  const productSnapshots = await Promise.all(
    prodRef.map((prodRef) => getDoc(prodRef))
  ); 

    const products = productSnapshots.map((productSnapshot) => {
    if (productSnapshot.exists()) {
      return { id: productSnapshot.id, ...productSnapshot.data() };
    } else {
      return null;
    }
  });
  return products.filter((product) => product !== null);
};

export const Carrit = () => {
  const [error, setError] = React.useState(false);
  const [productsData, setProductsData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const { itemCount } = useContext(CartContext);
  
  React.useEffect(() => {
    const ids = itemCount.products.map((product) => product.productId);
    fetchProductsByIds(ids)
      .then((res) => setProductsData(res))
      .catch((err) => setError(err))
      .then(() => setLoading(false));
  }, [itemCount.products]);
  
  const findQtyByProductId = (idProduct) => {
    const item = itemCount.products.find(
      (p) => p.productId.id === idProduct);
   console.log(item)
       return item ? item.qty : 0;
  };
  
  const total = productsData.map((product) => product.precio * findQtyByProductId(product.id) )
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  const navigate = useNavigate();

  const handleCheckoutClick = () => {
    navigate("/checkout", { state: total });
  };
  const styles = {
    cartWrapper: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      height: "100vh",
    },
    productCardDetail: {
      width: "60%",
    },
  };

  return loading ? (
    <LoaderComponent /> ) 
    : error? (
      <div>No hay productos en el carrito</div>
    ) : (
    <div style={styles.cartWrapper}>
      <div style={styles.productCardDetail}>
        {productsData.map((product) => (
          <CarritoDetailComponent key={product.id} product={product} qty={findQtyByProductId(product.id)
            
          } />
        ))}
      </div>
      <div>
        <CarritoPaymentComponent total={total} onClick={handleCheckoutClick} />
      </div>
    </div>
  );
}
export default Carrit;