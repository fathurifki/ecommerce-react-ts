import React, { FC } from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
// import InitiatePage from './views/Intiatie'; 
import Home from './views/Home/Home';

const App: FC = () => {
  return (
    <div>
      {/* <InitiatePage /> */}
      <Home />
    </div>
  );
}

export default App;
