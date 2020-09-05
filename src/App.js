import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderApp from './components/Header/header'
import CategoriesContainer from './components/categories'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import beerContainer from './components/beerContainer'
import nalewkiContainer from './components/nalewkiContainer'
import wineContainer from './components/wineContainer'
import SingleRecipe from './components/SingleRecipe'
// import CardApp from './card'
function App() {
  return (
    
    <Router>
      <HeaderApp />
      <Switch>
        <Route path="/" exact component={CategoriesContainer} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path='/beerContainer' component={beerContainer}/>
        <Route path='/wineContainer' component={wineContainer}/>
        <Route path='/nalewkiContainer' component={nalewkiContainer}/>
        <Route path='/mietowa' component={SingleRecipe}/>
      </Switch>   
    </Router>

  );
}

export default App;
