import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="title"></div>
      <div className="block1"></div>
      <div className="block2"></div>
      <div className="block3"></div>
      <footer className='App-footer'></footer>
    </div>
  );
}

export default App;
