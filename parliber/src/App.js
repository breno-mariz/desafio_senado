import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.scss';
// import BaseUi from './components/ui/BaseUi';
import BaseLayout from './components/ui/BaseLayout';
import ListaParlamentar from './components/Parlamentar/ListaParlamentar';

const App = (props) => {
  return (
    <BrowserRouter>
      {/* <div className="App">
        <BaseUi/>
      </div> */}
      <BaseLayout>
        <ListaParlamentar/>
      </BaseLayout>
    </BrowserRouter>
  );
};

export default App;
