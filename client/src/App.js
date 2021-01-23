import React, {useState, useEffect} from 'react';
import {Router} from '@reach/router';
import logo from './logo.svg';
import './App.css';
import Home from './routes/home/Home';
import Login from './routes/login/Login';
import SignUp from './routes/signup/SignUp';

const App = () => {
  const [user, setUser] = useState({});

  // on startup
  useEffect(() => {
    setUser({
      username: localStorage.getItem("username")||"",
      imgUrl: localStorage.getItem("imgUrl")||""
    })
  }, []);

  // On change
  useEffect(() => {
    for (let key in user) {
      localStorage.setItem(key, user[key]);
    }
    return () => {
      for (let key in user) {
        localStorage.setItem(key, "");
      }
    }
  }, [user]);

  // On Logout
  const logOut = () => {
    for (let key in user) {
      localStorage.setItem(key, "");
    }
    setUser({})
  }

  if (!user.username || user.username==="") {
    return (
      <Router>
        <Login path="/" setUser={setUser}/>
        <SignUp path="/signup" />
      </Router>
    );
  }
  return (
    <Router>
      <Home path="/" user={user} logout={logOut}/>
    </Router>
  )
}

export default App;