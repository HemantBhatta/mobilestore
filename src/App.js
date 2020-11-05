import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Index from './pages/Index'
import Error from './pages/Error'
import Singleproduct from './pages/Singleproduct'
import AllProducts from './pages/AllProducts'
import Cart from './components/Cart/Cart'
import Navbar from './components/Navbar'
import Modal from './components/Modal'




function App() {
  return (   
    <div className="App">
      <Router>
      <Navbar/>
        <Switch>
          <Route exact path='/' component={Index}/>
          <Route exact path='/cart' component={Cart}/>
          <Route exact path='/products' component={AllProducts}/>
          <Route exact path='/products/:id' component={Singleproduct} />
          <Route component={Error}/>
        </Switch>
        <Modal/>
      </Router>
     
    </div>
  );
}

export default App;
