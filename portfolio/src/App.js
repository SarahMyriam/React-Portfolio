import React from 'react';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Switch, Route} from 
'react-router-dom';
import './App.css';
import HeroSection from './components/HeroSection';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './components/Footer';





function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Switch>
        <Route path='/' exact component={HeroSection}/>
        <Route path='/about' exact component={About}/>
        <Route path='/portfolio'exact component={Portfolio}/>
        <Route path='/contact'exact component={Contact}/>
        <Route path='/footer' exact component={Footer}/>
        </Switch>
      </Router>

    </>
  );
}

export default App;
