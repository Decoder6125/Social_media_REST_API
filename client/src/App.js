import React from 'react'
import Navbar from './components/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import Profile from './components/Profile';
import Post from './components/Post';
import Login from './components/Login';
import Home from './components/Home';


function App() {
  return (
    <BrowserRouter>
    <Navbar />

    <Route exact path="/">
    <Home />
    </Route>
    <Route path="/Profile">
    <Profile />
    </Route>
    <Route path="/Post">
    <Post />
    </Route>
    <Route path="/Login">
    <Login />
    </Route>
    </BrowserRouter>
    
  );
}

export default App;
