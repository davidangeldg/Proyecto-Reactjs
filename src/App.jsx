import './App.css';
import NavbarComponent from './components/navbar';
import ItemListContainer from './containers/itemListContainer';


function App() {
  return (
    <>
      <NavbarComponent/>
      <ItemListContainer greeting={"Productos"}/>
    </>
  );
}

export default App;
