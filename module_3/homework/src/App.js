import React from 'react';

import FormView from './pages/FormView';
import CardView from './pages/CardView';
import MenuView from './pages/MenuView';

import './assets/css/fonts.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faUser, faChevronDown } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee, faUser, faChevronDown);

function App() {
  return (
    <div>
      <FormView />
      <CardView />
      <MenuView />
    </div>
  );
}

export default App;
