import './App.css';
import NavbarComponent from './components/navbar';
import ItemListContainer from './containers/itemListContainer';
import ItemDetailContainer from './containers/itemDetailContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { CartProvider } from './Context/cartContext';
import CartComponent from './components/cart/cart';


function App() {
  return ( 
    <CartProvider>
      <BrowserRouter>
          <NavbarComponent/>
          <Switch>
            <Route exact path="/">
              <ItemListContainer/>
            </Route>
            <Route exact path="/category/:categoryId">
              <ItemListContainer />
            </Route>
            <Route exact path="/item/:id"> 
              <ItemDetailContainer/>
            </Route>
            <Route exact path="/cart">
              <CartComponent/>
            </Route>
          </Switch>
      </BrowserRouter>
    </CartProvider>

  );
}

export default App;
