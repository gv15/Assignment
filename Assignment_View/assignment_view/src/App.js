
import React, { useState } from 'react';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppContainer from "./containers/AppContainer";

function App() {
  
  return (
    <BrowserRouter>
      <div className="container">
        
          <AppContainer />
      
      </div>
    </BrowserRouter>
  );
}

export default App;
