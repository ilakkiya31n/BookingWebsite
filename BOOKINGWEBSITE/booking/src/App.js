import logo from './logo.svg';
import './App.css';
import {Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/log' element={<Register/>}/>
  </Routes>
    </div>
  );
}

export default App;
