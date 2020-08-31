import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import './assets/css/main.css'
import { BrowserRouter as Router , Route } from "react-router-dom";
import Home from './components/Home';


function App() {
  return (
    <Router>
      <Route path='/' component={Home} />
    </Router>
  );
}

export default App;
