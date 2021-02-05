import './App.css';
import NavbarComponent from './components/navbar';
import ItemListContainer from './containers/itemListContainer';
import ItemDetailContainer from './containers/itemDetailContainer'


function App() {
  return (
    <>
      <NavbarComponent/>
      <ItemListContainer greeting={"Productos"}/>
      <ItemDetailContainer/>
    </>
  );
}

export default App;
