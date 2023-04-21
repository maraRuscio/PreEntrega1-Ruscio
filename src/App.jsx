import './App.css';
import { MainLayout } from './Layouts';
import { MainRoutes } from './Routes';
import { CartProvider } from './context/CartContext';


function App() {
  return (
    <MainLayout>
      <CartProvider>
        <MainRoutes />
      </CartProvider>
    </MainLayout>
  );
}

export default App;
