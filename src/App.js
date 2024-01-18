import './App.css';
import Home from './pages/Home';
import Navbar from './components/NavBar';
import Sidebar from './components/Sidebar';
import { useState } from 'react';

function App() {

  const [ativo, setAtivo] = useState(false)
    

    function toggle({setAtivo}){
        setAtivo(!ativo)
        console.log(ativo)
       

    }
  return (
    <div className="App overflow-x-hidden">
      <Navbar/>
      <Sidebar/>
      <Home/>

      
    </div>
  );
}

export default App;
