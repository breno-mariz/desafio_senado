import React from 'react';
import './App.scss';
import Dashboard from './components/Dashboard';
import BaseUi from './components/ui/BaseUi';

const App = (props) => {
  return (
    <div className="App">
      <BaseUi>
        {/* <Dashboard/> */}
      </BaseUi>
    </div>
  );
};

export default App;
