import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import About from './components/pages/About';
import Footer from './components/Footer';
import Gallery from './components/pages/Gallery';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/about' component={About} />
          <Route path='/sign-up' component={Gallery} />
          <Route path='/sign-up' component={Gallery} />
        </Switch>
        <Footer />
      </Router>
      
      
    </>
  );
}

export default App;