import React, { } from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './views/Login';
import Register from './views/Register';
import Profile from './views/Profile'
import useToken from './components/UseToken'
import Navbar from './components/Navbar';
import Home from './views/Home';


function App() {

  const { token, removeToken, setToken } = useToken();

  return (
    <div className="vh-100 gradient-custom">
      <div className="container">
        <h1 className="page-header text-center">React-JS </h1>

        <BrowserRouter>
          <Navbar token={removeToken} />
          <Routes>
            <Route exact path="/profile" element={<Profile token={token} setToken={setToken} />}></Route>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login setToken={setToken} />} />
            <Route path='/register' element={<Register />} />
          </Routes>
                
              
            
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;