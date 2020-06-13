import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.scss';
import BaseLayout from './components/ui/BaseLayout';

const App = (props) => {
  return (
    <BrowserRouter>
      {/* <div className="App">
        <BaseUi/>
      </div> */}
      <BaseLayout/>
    </BrowserRouter>
  );
};

export default App;
