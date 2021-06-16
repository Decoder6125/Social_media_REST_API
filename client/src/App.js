import React from 'react'
import Navbar from './components/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import Profile from './components/Profile';
import Post from './components/Post';
import Login from './components/Login';
import Home from './components/Home';
import About from './components/About';
import Signup from './components/Signup';

function App() {
  return (
    <BrowserRouter>
     <Route exact path="/Login">
    <Login />
    </Route>
    <Route exact path="/Signup">
    <Signup />
    </Route>
    <Route exact path="/">
    <Home />
    <Navbar />
    </Route>
    <Route exact path="/Profile">
    <Profile />
    <Navbar />
    </Route>
    <Route exact path="/Post">
    <Post />
    <Navbar />
    </Route>
    <Route exact path="/About">
    <About />
    <Navbar />
    </Route>
    </BrowserRouter>
    
  );
}

export default App;


