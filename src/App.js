import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './components/Main';
import ComingSoon from './components/CominSoon';

function App() {
  return (
    <BrowserRouter basename={window.location.pathname || ''}>
      <div className="App">
        {
          <div>
             <Main />
           </div>
        }
      </div>
    </BrowserRouter>
  );
}

export default App;