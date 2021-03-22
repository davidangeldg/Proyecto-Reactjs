import './App.css';
import NavbarComponent from './components/navbar';
import ItemListContainer from './containers/itemListContainer';
import ItemDetailContainer from './containers/itemDetailContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { CartProvider } from './Context/cartContext';
import CartComponent from './components/cart/cart';
import Checkout from './components/checkout';
import Footer from './components/footer';


function App() {
  return ( 
    <CartProvider>
      <BrowserRouter>
          <NavbarComponent/>
          <Switch>
            <Route exact path="/">
              <ItemListContainer/>
            </Route>
            <Route exact path="/category/:categoria">
              <ItemListContainer />
            </Route>
            <Route exact path="/item/:id"> 
              <ItemDetailContainer/>
            </Route>
            <Route exact path="/cart">
              <CartComponent/>
            </Route>
            <Route exact path="/checkout">
              <Checkout/>
            </Route>
          </Switch>
          <Footer/>
      </BrowserRouter>
    </CartProvider>

  );
}

export default App;
