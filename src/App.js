import Translator from './Components/Translator';
import Header from './Components/Header'
import InputField from './Components/InputField'
import React from 'react';
import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom';
import Footer from './Components/Footer';
import './App.css'
import Profile from './Components/Profile';
import PrivateRouter from './Components/PrivateRouter';

function App() {  
  return (
    <div className="App">
      <Router> 
        <Header/>       
        <Switch>
          <Route exact path="/" component={InputField} />
          <PrivateRouter path="/translator" component={Translator} />
          <PrivateRouter path="/profile" component={Profile} />
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
