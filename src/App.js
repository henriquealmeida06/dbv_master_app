import './App.css';
import Home from './pages/Home';
import Navbar from './components/NavBar';
import Sidebar from './components/Sidebar';
import { useState } from 'react';
import Login from './pages/Login';
import Cadastrar from './pages/Cadastrar';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {

 
  return (
    <div className="App overflow-x-hidden font-Roboto">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/cadastrar' element={<Cadastrar/>}/>
        </Routes>
      </BrowserRouter>
      
     

      
    </div>
  );
}

export default App;
