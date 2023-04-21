import React from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { getFirestore, collection, addDoc } from "firebase/firestore"
import { CartContext } from "../context/CartContext"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { Ring } from "@uiball/loaders";

const styles = {
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  paymentButton: {
    borderRadius: "12px",
    marginTop: "10px",
    fontSize: "1rem",
    backgroundColor: "#fbb929",
    color: "#555",

  },
};

// Para pruebas pueden usar:
//Tarjeta: 4509953566233704
//Fecha de vencimiento: 11/25
//Codigo de seguridad: 123
//Estos son datos de prueba que brinda mercado pago para desarrolladores
//Mas info: https://www.mercadopago.com.ar/developers/es/docs/checkout-pro/additional-content/test-cards

export const Checkout = () => {
  const [loading, setLoading] = React.useState(false);
  const [paymentSuccess, setPaymentSuccess] = React.useState(false);
  const [paymentId, setPaymentId] = React.useState("");
  const { itemCount, setItemCount } = React.useContext(CartContext);
  const navigate = useNavigate();
  const location = useLocation();
  const total = location.state;

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const cardNumber = e.target.cardNumber.value;
    const expirationDate = e.target.expirationDate.value;
    const cvc = e.target.cvc.value;
  
    setLoading(true);
    
    const newProduct = {
      nombre: name,
      cardNumber: cardNumber,
      expirationDate: expirationDate,
      cvc: cvc,
      total: total,
      products: itemCount, 
      status: (paymentSuccess ? ('Aprobada') : ('Rechazada') ), 
    };
    const db = getFirestore();
    const productCollection = collection(db, "sales");
    addDoc(productCollection, newProduct)
      .then(({ id }) => {
        setPaymentSuccess(true);
        setPaymentId(id);
      })
      .catch((err) => console.log(err))
      .then(() => setLoading(false));
      
    setTimeout(() => {
      navigate("/Tienda");
      setItemCount(()=>({
        qtyItems: 0,
        products: [],
      }));
      
    }, 2000);
  };
  return (
    <Container style={styles.container} fluid>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h1 className="text-center">Formulario de pago</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Nombre en la tarjeta</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre completo"
                required
              />
            </Form.Group>

            <Form.Group controlId="cardNumber">
              <Form.Label>Número de tarjeta</Form.Label>
              <Form.Control
                type="text"
                pattern="[0-9]{16}"
                placeholder="1234 5678 9012 3456"
                required
              />
            </Form.Group>

            <Form.Group controlId="expirationDate">
              <Form.Label>Fecha de vencimiento</Form.Label>
              <Form.Control type="month" required />
            </Form.Group>

            <Form.Group controlId="cvc">
              <Form.Label>Código de seguridad (CVC)</Form.Label>
              <Form.Control
                type="text"
                pattern="[0-9]{3}"
                placeholder="123"
                required
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              style={styles.paymentButton}
            >
              {loading ? (
               <Ring size={20} lineWeight={5} speed={2} color="black" />
              ) : paymentSuccess ? (`Su pago fue exitoso (${paymentId})`):(
                `Pagar $${total}`
              )}
            </Button>
          </Form>
        </Col>
      </Row>
      {paymentSuccess}
    </Container>
  );
};
