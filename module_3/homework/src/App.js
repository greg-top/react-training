import React from 'react';

import Form from './pages/FormView';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faUser } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee, faUser)

function App() {
  return (
    <div>
      <Form />
    </div>
  );
}

export default App;
