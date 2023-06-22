import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Herosection from './components/herosection';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
     <Navbar />
      <Herosection />
       
        <Routes>
          
          <Route path='/' exact />
        
        </Routes>
    </Router>
    </>
  );
}

export default App;
