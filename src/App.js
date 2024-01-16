import './App.css';
import Home from './pages/Home';
import Navbar from './components/NavBar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App overflow-x-hidden">
      <Navbar/>
      <Sidebar/>
      <Home/>

      
    </div>
  );
}

export default App;
