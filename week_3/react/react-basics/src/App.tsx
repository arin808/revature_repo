import React  from 'react';
import ComponentOne from './components/ComponentOne/ComponentOne';
import logo from './logo.svg';
import './App.css';
import ParentComponent from './components/Props/ParentComponent/ParentComponent';
import Hook from './components/Hook/Hook';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ComponentOne />
        <img src={logo} className="App-logo" alt="logo" />
        <ParentComponent/>
        <Hook/>
      </header>
    </div>
  );
}

export default App;
