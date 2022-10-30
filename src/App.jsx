import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './components/Home';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import { Routes , Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="SignUp" element={<SignUp/>}/>
        <Route path="SignUp/LogIn" element={<LogIn/>}/>
        <Route path="SignUp/LogIn/Dashboard" element={<Dashboard />}/>
      </Routes>
    </div>
  )
}

export default App
