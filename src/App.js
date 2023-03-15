import './App.css';
import { ItemListContainerComponent } from './components/ItemListContainer/ItemListContainerComponent';
import NavbarComponent from './components/NavBar/NavbarComponent';


function App() {
  return (
    <>
      <NavbarComponent/>
      <ItemListContainerComponent greeting = "Proximamente"/>
    </>
  );
}

export default App;
