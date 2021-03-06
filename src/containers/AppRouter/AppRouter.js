import React from 'react'
import '../../App.css';
import NavBar from '../../components/Navbar/Navbar';
import LoginContainer from '../../containers/LoginContainer/LoginContainer';
import ItemListContainer from '../../containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../../containers/ItemDetailContainer/ItemDetailContainer';
import CategoriasContainer from '../../containers/CategoriasContainer/CategoriasContainer'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import CarritoContainer from '../CarritoContainer/CarritoContainer'
import {useContext} from 'react'
import { AppContext } from '../../context/AppContext';
 
export default function AppRouter() {

    // PARA SETEAR EL AUTH DEL USUARIO

     const {user} = useContext(AppContext)


    return (
        <Router>
            <div className="container">
            <NavBar />
        <Switch>
        <Route exact path="/">
          {
            user ? <ItemListContainer /> :  <LoginContainer />
          }
        </Route>
        <Route path="/login">
            <LoginContainer />
        </Route>
        <Route path="/books/:itemId">
        <ItemDetailContainer />
        </Route>
        <Route exact path="/categorias">
          {
            user ? <CategoriasContainer /> : <LoginContainer />
          }
        </Route>
        <Route exact path="/cart">
          <CarritoContainer />
        </Route>
        </Switch> 
      </div>
      </Router>
    )
}
