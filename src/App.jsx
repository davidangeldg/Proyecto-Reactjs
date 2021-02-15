import './App.css';
import NavbarComponent from './components/navbar';
import ItemListContainer from './containers/itemListContainer';
import ItemDetailContainer from './containers/itemDetailContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


function App() {
  return (
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
        </Switch>
    </BrowserRouter>
  );
}

export default App;
