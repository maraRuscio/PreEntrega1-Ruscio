import './App.css';
//import { ItemListContainerComponent } from './components/ItemListContainer/ItemListContainerComponent';
//import NavbarComponent from './components/NavBar/NavbarComponent';
import { MainLayout } from './Layouts';
import { MainRoutes } from './Routes';


function App() {
  return (
    <MainLayout>
      <MainRoutes />
    </MainLayout>
  );
}

export default App;
