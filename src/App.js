import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/forms/SignupForm';
import Home from './components/home/Home';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import { Route } from "react-router-dom";

import "normalize.css";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faShoppingCart, faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faShoppingCart, faChevronDown, faChevronRight, faFacebookSquare);

function App() {
  return (
    <div className="App">
      <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      <Footer />
    </div>
  );
}

export default App;


/** What do I need to do first?
 * 
 * Create a Login.
 * 
 * Email
 * Password
 * 
 * If you are logged in you should be able to Create
 * a new Listing.
 * 
 * Name of Product
 * Description
 * URL
 * Price
 * 
 * Each time a new listing is added it should show automatically in the list.
 * 
 * Get this far and then figure out the next step.
 * 
 */