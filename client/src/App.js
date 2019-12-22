import React, {Component} from 'react';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList' ;

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppNavbar/>
      </header>
      <ShoppingList />
    </div>
  );
}

export default App;
