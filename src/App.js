import Translator from './Components/Translator';
import Header from './Components/Header'
import InputField from './Components/InputField'
import React from 'react';
import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom';
import Footer from './Components/Footer';
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={InputField} />
          <Route path="/translator" component={Translator} />
          {/*<Route path="/translation" component={Translation} />
            <Route path="/profile" component={Profile} />*/}
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
