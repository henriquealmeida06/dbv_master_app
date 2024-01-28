import './App.css';
import Home from './pages/Home';
import Navbar from './components/NavBar';
import Sidebar from './components/Sidebar';
import { useState } from 'react';
import Login from './pages/Login';

function App() {

 
  return (
    <div className="App overflow-x-hidden font-Roboto">
      <Navbar/>
      <Sidebar/>
      <Home/>
      
     

      
    </div>
  );
}

export default App;
