import React from 'react';
import Form from './components/forms/SignupForm';
import Nav from './components/nav/Nav';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faShoppingCart, faChevronDown } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faShoppingCart, faChevronDown);

function App() {
  return (
    <div className="App">
      <Nav />
      <Form />
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